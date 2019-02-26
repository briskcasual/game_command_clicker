// Game
var Game = (function(){
	// public api
	var api = {
	    w: 10,
		h: 7,
	    cells: [],
		ship: {},
		shipIndex: -1
	};
	
	// DISPOBJ - display object base Class
	var CellObj = function(){
	};
	// default objType is none
	CellObj.prototype.objType = 'none';
	
	// PLAYEROBJ
	var PlayerCellObj = function(){
		this.objType = 'player';
		this.heading = 3;
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
		this.ship = new PlayerCellObj();
		this.shipIndex = 15;
		this.cells[this.shipIndex].contents = this.ship;		
	};
	
	api.moveShip = function(){
	
		var cell = this.cells[this.shipIndex],
			obj = cell.contents,
			nx = Math.round(cell.x+Math.cos(obj.heading/8*(Math.PI*2))),
			ny = Math.round(cell.y+Math.sin(obj.heading/8*(Math.PI*2)));
		
		console.log(cell.x,cell.y);
		console.log(nx,ny);
		
	};
	
	// to be called each frame
	api.update = function(){
	
	};
	
	// initial setup
	api.setup();
	
	api.moveShip();
	
	// return public api to Game
	return api;
}());