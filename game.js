
// SETUP CANVAS
var canvas = document.createElement('canvas'),
	ctx = canvas.getContext('2d'),
	container = document.getElementById('gamearea') || document.body;
canvas.width = 320;
canvas.height = 240;
ctx.fillStyle = 'black';
ctx.fillRect(0,0,canvas.width,canvas.height);
container.appendChild(canvas);

// Game
var Game = (function(){
	// public api
	var api = {
	    w: 5,
		h: 5,
	    cells: []
	};
	
	// DISPOBJ - display object base Class
	var CellObj = function(){
	};
	// default objType is none
	CellObj.prototype.objType = 'none';
	
	// PLAYEROBJ
	var PlayerCellObj = function(){
		this.objType = 'player';
	};
	PlayerCellObj.prototype = Object.create(CellObj.prototype);

	// set up the game
	api.setup = function(){
		var i = this.w * this.h,cell;
		// create cells
		this.cells = [];
		while(i--){
		    cell = this.cells[i] = {};
			cell.y = Math.floor(i / this.w);
			cell.x = i % this.w;
			cell.i = i;
			cell.contents = {};
		}	
		this.createShip();
	};
	
	// create player ship
	api.createShip = function(){
	
		var ship = new PlayerCellObj();
		this.cells[0].contents = ship;
		
	}
	
	// initial setup
	api.setup();
	// return public api to Game
	return api;
}());
console.log(Game);