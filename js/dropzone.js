var dropzone = document.getElementById('dropzone');

dropzone.ondragover = function (e) { return false; };
dropzone.ondragend = function (e) { return false; };

dropzone.ondrop = function (e) {
  reader = new FileReader();
  reader.onload = function (e) {

    var image_uri = e.target.result;
    var img = document.createElement('img');
    img.src = image_uri;

    // Draws image into editzone.
    ctx.drawImage(img, 0, 0, can.width, can.height);    
    document.getElementById('maintxt').innerHTML = '<p>pick a tool</p>';
  };
  reader.readAsDataURL(e.dataTransfer.files[0]);

  return false;
};
