var can = document.getElementsByTagName('canvas')[0];
var ctx = can.getContext('2d');

mouse = {x: 0, y: 0, down: false};

can.width = document.body.clientWidth/4;
can.height = document.body.clientHeight/4;

var pix = document.getElementById('pixel');
var text = document.getElementById('text');

var is_drawing = false;
var is_erasing = false;

var last_x;
var last_y;

var brushes;
var radX;
var radY;

var fill;
var fills;
var currentFill = 0;

img = new Image();
img.onload = imgLoaf;

function imgLoaf(e) {
	can.width = img.width; 
	can.height = img.height;
	ctx.drawImage(img, 0, 0);
};	

window.onmousedown = function(e) {
  if (is_drawing){
    currentFill += 1;
    if (currentFill === fills.length) { currentFill = 0; }
  }
  if (is_erasing){
    fill = eater;
  }
};

window.onmousemove = function(e) {
  radX = e.y;
  radY = e.x;

  if(is_drawing){
    fill = fills[currentFill];
    var brush = pickBrush(1);
    run_filter(fill, e.x/4, e.y/4, brush[0], brush[1]);
  }
  if(is_erasing){
    var brush = pickBrush(1);
    run_filter(fill, e.x/4, e.y/4, brush[0], brush[1]);
  }
};

window.onmouseup = function(e) {
  is_drawing = false;
  is_erasing = false; 
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
    return [3, 50];
    break;
  }
 
};

