##### folder structure

		suite project
		|	index.html
		|	js
		|	|	suite.js
		|	|	tool1.js
		|	|	tool2.js

##### start with a blank workspace

	when start, cursor = current shape
	when drag, make 'stroke'
	change pixel "identity" matrix to filter "transformation" matrix 

##### sidesections

	dropzones
		use p5.js DOM example in github

	image upload 
		replace that dropzone with the image
		(fill width + height, its ok if stretched) 
		upload to canvas 100vh
		get pixels of image 
		replace filter library thumbnails with image in each filter
		(fill w + h)

	current settings (global for each filter)
		current filter name
		var current_tool inside global variable
		current shape/filter 
		create array of shapes
		if current clicked, cycle through array
		size slider
		max size = entire image	

	filter library
		every tool uses start/drag/end commands
		every tool that a user selects will adhere/implement to a common interface for all tools.
		common interface made up of functions for each action/effect. (see: 'create filters')

		

