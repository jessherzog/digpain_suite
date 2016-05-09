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

var fills;
var currentFill = 0;

img = new Image();
img.onload = imgLoaf;

function imgLoaf(ev) {
	can.width = img.width; 
	can.height = img.height;
	ctx.drawImage(img, 0, 0);
};	

window.onmousedown = function(e) {
  is_drawing = true;

  currentFill += 1;
  if (currentFill === fills.length) { currentFill = 0; }

};

window.onmousemove = function(e) {
  radX = e.y;
  radY = e.x;

  if(is_drawing){
    var fill = fills[currentFill];
    var brush = pickBrush(1);
    run_filter(fill, e.x/4, e.y/4, brush[0], brush[1]);
  }
};

window.onmouseup = function(e) {
  is_drawing = false; 
};

var pickBrush = function(brush) {

  switch(brush) {
  case 1:
    return [30, 30];
    break;
  case 2:
    return [20, 5];
    break;
  default:
    return [2, 2];
    break;
  }
 
};

