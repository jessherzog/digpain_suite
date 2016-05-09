var run_filter = function(filter, x, y, w, h) {
  
  var offset_x = x - w / 2;
  var offset_y = y - h / 2;

  // Get current pixels.
  var imageData = ctx.getImageData(offset_x, offset_y, w, h);
  filter(imageData);

  // Replace with filtered pixels.
  ctx.putImageData(imageData, offset_x, offset_y);
};