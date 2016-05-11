var redden1 = function(imageData) {
	for (var y = 0; y < imageData.height; y++) { 
		for (var x = 0; x < imageData.width; x++) { 
			var index = (x + y * imageData.width) * 4;
			imageData.data[index+0] = Math.round(Math.random() * 2000); // r
			imageData.data[index+1] += 0.01; // g
			imageData.data[index+2] += 0.01; // b
		}
	}
};

var greenie1 = function(imageData) {
	for (var y = 0; y < imageData.height; y++) { 
		for (var x = 0; x < imageData.width; x++) { 
			var index = (x + y * imageData.width) * 4;
			imageData.data[index+0] = Math.round(Math.random() * 20); // r
			imageData.data[index+1] += 0.01; // g
			imageData.data[index+2] += 0.01; // b
		}
	}
};

var dist = function(x1, y1, x2, y2) {
	return Math.hypot(x2-x1, y2-y1);
};

var bumpy1 = function(imageData) {
	for (var y = 0; y < imageData.height; y++) { 
		for (var x = 0; x < imageData.width; x++) { 
			var index = (x + y * imageData.width) * 4;
			var center_x = imageData.width / 2;
			var center_y = imageData.height / 2;
			var radius = imageData.width / 2;

			if (imageData.width > imageData.height) {
				radius = imageData.height / 2;
			}
			var d = dist(center_x, center_y, x, y);
			var r = imageData.data[index+0];

			if (d < radius) {
				var normalized_distance = d / radius; // 0 - 1
				imageData.data[index+0] =  255 - Math.round(normalized_distance * 255);
				imageData.data[index+1] = 0;
				imageData.data[index+2] = 0;
			}	
		}
	}
};

var bumpy2 = function(imageData) {
	for (var y = 0; y < imageData.height; y++) { 
		for (var x = 0; x < imageData.width; x++) { 
			var index = (x + y * imageData.width) * 4;
			var center_x = imageData.width / 2;
			var center_y = imageData.height / 2;
			var radius = imageData.width / 2;

			if (imageData.width > imageData.height) {
				radius = imageData.height / 2;
			}
			var d = dist(center_x, center_y, x, y);
			var r = imageData.data[index+0];

			if (d < radius) {
				var normalized_distance = d / radius; // 0 - 1
				imageData.data[index+0] =  255 - Math.round(Math.random() * normalized_distance * 25);
				imageData.data[index+1] = 0;
				imageData.data[index+2] = 75;
			}	
		}
	}
};

var redden = function(imageData) {
	for (var y = 0; y < imageData.height; y++) { 
		for (var x = 0; x < imageData.width; x++) { 
			var index = (x + y * imageData.width) * 4;
			imageData.data[index+0] = Math.round(Math.random() * 2000); // r
			imageData.data[index+1] += 0.01; // g
			imageData.data[index+2] = 0.01; // b
		}
	}
};

var greenie = function(imageData) {
	for (var y = 0; y < imageData.height; y++) { 
		for (var x = 0; x < imageData.width; x++) { 
			var index = (x + y * imageData.width) * 4;
			imageData.data[index+0] = Math.round(Math.random() * 20); // r
			imageData.data[index+1] += 0.01; // g
			imageData.data[index+2] += 0.01; // b
		}
	}
};

var dist = function(x1, y1, x2, y2) {
	return Math.hypot(x2-x1, y2-y1);
};

var bumpy = function(imageData) {
	img.globalCompositeOperation = "multiply";

	for (var y = 0; y < imageData.height; y++) { 
		for (var x = 0; x < imageData.width; x++) { 
			var index = (x + y * imageData.width) * 400;
			var center_x = imageData.width / 100;
			var center_y = imageData.height / 100;
			var radius = imageData.width / 10;

			if (imageData.width > imageData.height) {
				radius = imageData.height / 2;
			}
			var d = dist(center_x, center_y, x, y);
			var r = imageData.data[index+0];

			if (d < radius) {
				var normalized_distance = radius / d*radius ; // 0 - 1
				imageData.data[index+0] = Math.round(Math.random() / normalized_distance * 120);
				imageData.data[index+1] = 0;
				imageData.data[index+2] = 0;
			}	
		}
	}
};

var bumpPink = function(imageData) {
	for (var y = 0; y < imageData.height; y++) { 
		for (var x = 0; x < imageData.width; x++) { 
			var index = (x + y * imageData.width) * 4;
			var center_x = imageData.width / 2;
			var center_y = imageData.height / 2;
			var radius = imageData.width / 2;

			if (imageData.width > imageData.height) {
				radius = imageData.height / 2;
			}
			var d = dist(center_x, center_y, x, y);
			var r = imageData.data[index+0];

			if (d < radius) {
				var normalized_distance = d / radius; // 0 - 1
				imageData.data[index+0] =  255 - Math.round(Math.random() * normalized_distance * 25);
				imageData.data[index+1] += 0.1;
				imageData.data[index+2] += 75 * 40;
			}	
		}
	}
};

var wow = function(imageData) {
	for (var y = 0; y < imageData.height; y++) { 
		for (var x = 0; x < imageData.width; x++) { 
			var index = (x + y * imageData.width) * 4;
			var center_x = imageData.width / 2;
			var center_y = imageData.height / 2;
			var radius = imageData.width / 2;

			if (imageData.width > imageData.height) {
				radius = imageData.height / 2;
			}
			var d = dist(center_x, center_y, x, y);
			var r = imageData.data[index+0];

			if (d < radius) {
				var normalized_distance = d / radius; // 0 - 1
				imageData.data[index+0] = 20  * 0.1;
				imageData.data[index+1] += 0 - Math.round(Math.random(40));
				imageData.data[index+2] = 75;
			}	
		}
	}
};

var eater = function(imageData) {
	for(var y = 0; y < imageData.height; y++){
		for (var x = 0; x < imageData.width; x++) { 
			var index = (x + y * imageData.width) * 4;
			imageData.data[index+3] = 1;
		}
	}
}

fills = [redden1, bumpy1, greenie1, redden, bumpPink, bumpy, bumpy2, greenie];