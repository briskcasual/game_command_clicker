// CANVAS POWERED VIEW FOR Command Idle
// SETUP CANVAS
var canvas = document.createElement('canvas'),
	ctx = canvas.getContext('2d'),
	container = document.getElementById('gamearea') || document.body;
canvas.width = 320;
canvas.height = 224;


container.appendChild(canvas);

var renderCells = function(){
	
	ctx.fillStyle = 'black';
    ctx.fillRect(0,0,canvas.width,canvas.height);
	
	ctx.strokeStyle = 'white';
	var i = Game.cells.length,cell;
	while(i--){
       cell = Game.cells[i];
	   ctx.strokeRect(cell.x*32,cell.y*32,32,32);
	}
	
};

renderCells();
