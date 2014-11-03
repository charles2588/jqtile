//tiles 
(function($){
	$.fn.tile = function(options){
		// default options
		var defaultOptions = {
		numberOfTiles : 4,
		color : '#FF0000'
		};
		
		var allOptions = $.extend(defaultOptions,options);
		
		//alert("i am in tile"+ "tilecount :- "+ allOptions.numberOfTiles + "Color :-" + allOptions.color );
		
		//create Tiles
		//var ctx = $('#tilefloor').getContext("2d");
		var c = $('#tilefloor')[0];
		ctx = c.getContext("2d");
		
		var tilelength = 200, tilewidth = 200, spacing = 30;
		
		var tilesarea = ((tilelength * tilewidth) + spacing ) * allOptions.numberOfTiles; 
		
		//var avht = window.screen.availHeight;
		//var avwd = window.screen.availWidth;
		var avarea = c.width * c.height;
		
		// error out or trunc with message if canvas area is more than tiles area
		if(tilesarea > avarea)
		{
			console.log("Need to reduce number of tiles to fit in your canvas or increase the canvas size");
			alert("Need to reduce number of tiles to fit in your canvas or increase the canvas size");
		}
		
		var x = 20, y = 20;
		
		c.width = Math.sqrt(tilesarea);
		c.length = Math.sqrt(tilesarea);
		
				
		for( i=0; i < allOptions.numberOfTiles; i++)
		{		
			ctx.fillStyle = allOptions.color;
			ctx.fillRect(x, y, tilewidth, tilelength);
			//cal new x and y
			//x = x + tilewidth + spacing;
			y = y + tilelength + spacing;
			
			alert("box:- " + x + "  box:- " + y);
		}
		
		
		
		
		
/* 	function Shape(x, y, w, h, fill) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.fill = fill;
	}

	// get canvas element.
	var elem = c;

	// check if context exist
	if (elem.getContext) {

		var myRect = [];

		myRect.push(new Shape(10, 0, 25, 25, "#333"));
		myRect.push(new Shape(0, 40, 39, 25, "#333"));
		myRect.push(new Shape(0, 80, 100, 25, "#333"));

		context = elem.getContext('2d');
		for (var i in myRect) {
			oRec = myRect[i];
			context.fillStyle = oRec.fill;
			context.fillRect(oRec.x, oRec.y, oRec.w, oRec.h);

		}

	} */
		
		
		
	};

})(jQuery);