// Game
var Game = (function(){
	
	var modulo = function(x, m) {
        return (x % m + m) % m;
    };
	
	// public api
	var api = {
	    w: 5,
		h: 5,
	    cells: [],
		ship: {},
		shipIndex: -1,
		totals: {
		    circle:0
		}
	};
	
	// DISPOBJ - display object base Class
	var CellObj = function(){
	};
	// default objType is none
	CellObj.prototype.objType = 'none';
	
	// PLAYEROBJ
	var PlayerCellObj = function(){
		this.objType = 'player';
		this.heading = 0;
	};
	PlayerCellObj.prototype = Object.create(CellObj.prototype);
	
	// Circles
	var CircleCellObj = function(){
	    this.objType = 'circle';
		this.value = 1;
	};
	CircleCellObj.prototype = Object.create(CellObj.prototype);

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
			cell.contents = new CircleCellObj();
		}	
		this.createShip();
	};
	
	// get a Cell by X and Y
	api.getCellXY = function(x,y){
		return this.cells[this.w * y + x];
	};
	
	// create player ship
	api.createShip = function(){
		this.ship = new PlayerCellObj();
		this.shipIndex = 12;
		this.cells[this.shipIndex].contents = this.ship;		
	};
	
	// move the player ship to a new cell
	api.moveShip = function(){
	
		var cell = this.cells[this.shipIndex],
			obj = cell.contents,
			nx = (cell.x+Math.cos(obj.heading/8*(Math.PI*2))),
			ny = (cell.y+Math.sin(obj.heading/8*(Math.PI*2))),
			newCell;
		
		// using math modulo
		nx = Math.round(modulo(nx,this.w));
		ny = Math.round(modulo(ny,this.h));		
		if(nx === this.w){nx = 0;}
		if(ny === this.h){ny = 0;}

		// get new cell
		newCell = this.getCellXY(nx,ny);
		
		// if the new cell the ship is moving to has something
		if(newCell.contents.objType){
		   //console.log(newCell.contents.value);
			api.totals[newCell.contents.objType] += newCell.contents.value;
			console.log(api.totals);
		}
		
		// update ship index, clear old cell and update new cell
		this.shipIndex = newCell.i;
		newCell.contents = this.ship;
		cell.contents = {};
	};
	
	// to be called each frame
	api.update = function(){
		this.moveShip();		
	};
	
	// initial setup
	api.setup();
	
	// return public api to Game
	return api;
}());