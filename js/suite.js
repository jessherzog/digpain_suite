var can = document.getElementsByTagName('canvas')[0];
var ctx = can.getContext('2d');

can.width = document.body.clientWidth/4;
can.height = document.body.clientHeight/4;

var is_drawing = false;
var last_x;
var last_y;

var brushes;
var radX;
var radY;

img = new Image();
img.onload = imgLoaf;

function imgLoaf(ev) {
	can.width = img.width; 
	can.height = img.height;
	ctx.drawImage(img, 0, 0);
};	

window.onmousedown = function(e) {
  is_drawing = true;
};

window.onmousemove = function(e) {
  if(is_drawing){
    var fill = pickFill();
    var brush = pickBrush(brushes);
    run_filter(fill, e.x/4-radX/4, e.y/4-radY/4, brush, brush);
  }
};

window.onmouseup = function(e) {
  is_drawing = false;
};

var pickFill = function() {
  var fills = [redden, greenie];
  for (var currentFill = 0; currentFill < fills.length; currentFill++){

  }
};

var pickBrush = function() {

  radX = e.y;
  radY = e.x;

  switch(brushes) {
  case 1:
    radX/2;
    radY/2;
    break;
  case 2:
    radX/10;
    radY/10;
    break;
  default:
    radX/1;
    radY/1;
    break;
  }

  return radX;
  return radY;
}

