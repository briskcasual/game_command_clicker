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
			y = cell.y*32;
		ctx.strokeStyle = 'green';
		ctx.lineWidth = 3;
		ctx.beginPath();
		ctx.moveTo(x + 28, y + 16);
		ctx.lineTo(x+4,y+4);
		ctx.lineTo(x+4,y+28);
		ctx.closePath();
		ctx.stroke();
		
		//ctx.fillRect(x,y,32,32);
	}
};

var renderCells = function(){
	
	ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.strokeStyle = 'white';
	var i = Game.cells.length,cell;
	while(i--){
        cell = Game.cells[i];
	    ctx.strokeRect(cell.x*32,cell.y*32,32,32);
		
		if(cell.contents.objType){	
			renderType[cell.contents.objType](cell);
		}
		
	}
	
};

renderCells();
