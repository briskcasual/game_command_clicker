
// SETUP CANVAS
var canvas = document.createElement('canvas'),
	ctx = canvas.getContext('2d'),
	container = document.getElementById('gamearea') || document.body;
canvas.width = 320;
canvas.height = 240;
ctx.fillStyle = 'black';
ctx.fillRect(0,0,canvas.width,canvas.height);
container.appendChild(canvas);

// GRID

var Grid = (function(){

	// public api returned to grid
	var api = {
	    w: 5,
		h: 5,
	    cells: []
	};
	
	// set up the grid
	api.setup = function(){
		var i = this.w * this.h,cell;
		this.cells = [];
		while(i--){
		    cell = this.cells[i] = {};
			cell.y = Math.floor(i / this.w);
			cell.x = i % this.w;
			cell.i = i;
			cell.contents = {};
		}
	};
	
	// initial setup
	api.setup();
	
	// return public api to Grid
	return api;

}());

console.log(Grid);