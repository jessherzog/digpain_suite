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
    
    document.getElementById('maintxt').innerHTML = 
    '<ul><input onclick="changePix()" id="pixel" type="button" value="smear"></ul></p>' +
    '<ul><input onclick="erase()" id="eraser" type="button" value="erase"></ul></p>';  

      dropzone.style.visibility = "hidden";
    };

  reader.readAsDataURL(e.dataTransfer.files[0]);

  return false;
};
