var run_filter = function(filter, x, y, w, h) {
  
  // Get current pixels.
  var imageData = ctx.getImageData(x, y, w, h);
  filter(imageData);
  // Replace with filtered pixels.
  ctx.putImageData(imageData, x, y);
};