// Game
var Game = (function(){
	// public api
	var api = {
	    w: 10,
		h: 7,
	    cells: [],
		ship: {}
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
		this.cells[15].contents = this.ship;		
	};
	
	// initial setup
	api.setup();
	
	// return public api to Game
	return api;
}());