var redden = function(imageData) {
	for (var y = 0; y < can.height; y++) { 
		for (var x = 0; x < can.width; x++) { 
			var index = (x + y * imageData.width) * 4;
			imageData.data[index+0] = Math.round(Math.random() * 2000); // r
			imageData.data[index+1] += 0.01; // g
			imageData.data[index+2] += 0.01; // b
		}
	}
};

var greenie = function(imageData) {
	for (var y = 0; y < can.height; y++) { 
		for (var x = 0; x < can.width; x++) { 
			var index = (x + y * imageData.width) * 4;
			imageData.data[index+0] = Math.round(Math.random() * 20); // r
			imageData.data[index+1] += 0.01; // g
			imageData.data[index+2] += 0.01; // b
		}
	}
};

var blurrie = function(imageData) {
	for (var y = 0; y < can.height; y++) { 
		for (var x = 0; x < can.width; x++) { 
			var index = (x + y * imageData.width) * 4;
			imageData.data[index+0] = 1; // r
			imageData.data[index+1] += 1; // g
			imageData.data[index+2] += 1; // b
		}
	}
};


