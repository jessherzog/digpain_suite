(function() {
  // See http://socket.io/
  var socket = io.connect('stream.wikimedia.org/rc');
  
  var feedNode = document.getElementById('feed');
  var errorNode = document.createElement('div');
  errorNode.className = 'alert alert-danger';
  var updateBuffer = makeDisplayBuffer(10);
  printEvent({
    type: 'info',
    'message': 'Subscribed! Waiting...'
  });
  socket.on('connect', function() {
    // Subscribe to one or more wikis
    // See https://wikitech.wikimedia.org/wiki/RCStream
    socket.emit('subscribe', '*');
  });

  socket.on('change', function(rc) {
    // See https://www.mediawiki.org/wiki/Manual:RCFeed#Properties
    if (rc.type == 'edit') {
      printEvent({
        type: 'rc',
        data: rc
      });
    }
  });

  socket.on('error', function(data) {
    printEvent({
      type: 'error',
      data: data
    });
  });

  function printEvent(event) {
    var node;
    if (event.type === 'rc') {
      var node = document.createTextNode(JSON.stringify(event.data) + '\n\n');
      $(feedNode).prepend(node);
      updateBuffer(node);
    } else if (event.type === 'error') {
      $(errorNode).empty().text(JSON.stringify(event.data));
      if (!errorNode.parentNode) {
        $(feedNode).before(errorNode);
      }
    } else if (event.type === 'info') {
      node = $('<div>').addClass('alert alert-info').text(event.message).get(0);
      $(feedNode).prepend(node);
      updateBuffer(node);
    }
  }

  function makeDisplayBuffer(size) {
    var buffer = [];
    return function (element) {
      buffer.push(element);
      if (buffer.length > size) {
        var popped = buffer.shift();
        popped.parentNode.removeChild(popped);
      }
    }
  }
  
}());