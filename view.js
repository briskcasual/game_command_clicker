// CANVAS POWERED VIEW FOR Command Idle
// SETUP CANVAS
var canvas = document.createElement('canvas'),
	ctx = canvas.getContext('2d'),
	container = document.getElementById('gamearea') || document.body;
canvas.width = 320;
canvas.height = 224;


container.appendChild(canvas);

// render obj type methods
var renderType = {
	player: function(cell){
		var x = cell.x*32,
			y = cell.y*32,
			ship = cell.contents;
		ctx.strokeStyle = '#00ff8a';
		
		ctx.save();
		ctx.translate(x+16,y+16);
		ctx.rotate(ship.heading/8 * (Math.PI * 2))
		ctx.beginPath();
		ctx.moveTo(28-16, 16-16);
		ctx.lineTo(4-16,4-16);
		ctx.lineTo(4-16,28-16);
		ctx.closePath();
		ctx.stroke();
		ctx.restore();
	},
	circle: function(cell){
	    var x = cell.x*32,
		y = cell.y*32,
		ship = cell.contents;
		
		ctx.fillStyle = '#ff00ff';
		ctx.beginPath();
		ctx.arc(x+16,y+16,5,0,Math.PI*2);
		ctx.fill();
		//ctx.fillRect(x,y,5,5);
		
	}
};

var renderCells = function(){
	
	ctx.fillStyle = 'white';
    ctx.fillRect(0,0,canvas.width,canvas.height);
	
	var i = Game.cells.length,cell;
	while(i--){
        cell = Game.cells[i];
		ctx.strokeStyle = '#008aff';
		ctx.lineWidth = 3;
	    ctx.strokeRect(cell.x*32,cell.y*32,32,32);
		
		if(cell.contents.objType){	
			renderType[cell.contents.objType](cell);
		}
		
	}
	
};

//renderCells();
