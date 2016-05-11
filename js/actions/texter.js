

function Texter() {

  var _this = this;

  // Application variables
  position = {x: 0, y: window.innerHeight/2};
  textIndex = 0;
  this.textColor = "#000000";
  this.bgColor = "#ffffff";
  this.minFontSize = 8;
  this.maxFontSize = 300;
  this.angleDistortion = 0.01;

  this.text = "'noooooooooo'";

  this.initialize = function() {
    can.addEventListener('mousemove', mouseMove, false);
    can.addEventListener('mousedown', mouseDown, false);
    can.addEventListener('mouseup',   mouseUp,   false);
    can.addEventListener('mouseout',  mouseUp,  false);
    update();
  };

  var mouseMove = function(e) {
    mouse.x = e.pageX;
    mouse.y = e.pageY;
    draw();
  };

  var update = function() {
    requestAnimationFrame( update );
    draw();
  }

  var draw = function() { 
    if ( mouse.down ) {
      var newDistance = distance( position, mouse );
      var fontSize = _this.minFontSize + newDistance/2;

      if ( fontSize > _this.maxFontSize ) {
        fontSize = _this.maxFontSize;
      }

      var letter = _this.text[textIndex];
      var stepSize = textWidth( letter, fontSize );
      
      if (newDistance > stepSize) {
        var angle = Math.atan2(mouse.y-position.y, mouse.x-position.x);
        
        ctx.font = fontSize + "px Georgia";
      
        ctx.save();
        ctx.translate( position.x, position.y);
        ctx.rotate( angle + ( Math.random() * ( _this.angleDistortion * 2 ) - _this.angleDistortion ) );
        ctx.fillText(letter,0,0);
        ctx.restore();

        textIndex++;
        if (textIndex > _this.text.length-1) {
          textIndex = 0;
        }
      
        position.x = position.x + Math.cos(angle) * stepSize;
        position.y = position.y + Math.sin(angle) * stepSize;

      }
    }
  };

  var distance = function( pt, pt2 ){
    var xs = 0;
    var ys = 0;
   
    xs = pt2.x - pt.x;
    xs = xs * xs;
   
    ys = pt2.y - pt.y;
    ys = ys * ys;
   
    return Math.sqrt( xs + ys );
  };

  var mouseDown = function( event ){
    mouse.down = true;
    position.x = event.pageX;
    position.y = event.pageY;
  }

  var mouseUp = function( event ){
    mouse.down = false;
  }

  var textWidth = function( string, size ) {
    ctx.font = size + "px Times";
    
    if ( ctx.fillText ) {
      return ctx.measureText( string ).width;

    } else if (ctx.mozDrawText) {
      return ctx.mozMeasureText( string );
    }
  };

  this.clear = function() {
    can.width = can.width;
    ctx.fillStyle = _this.textColor;
  }

  this.applyNewColor = function( value ) {
    _this.textColor = value;
    ctx.fillStyle = _this.textColor;
  }

  this.setBackground = function( value ) {
    _this.bgColor = value;
    can.style.backgroundColor = value;

  };

  this.onTextChange = function() {
    textIndex = 0;
  }

};