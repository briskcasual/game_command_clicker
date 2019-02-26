var canvasclick = function(){

	console.log('click');
	
	Game.ship.heading += 1;
	Game.ship.heading %= 8;
	renderCells();

};

var loop = function(){

	setTimeout(loop,1000);
	
	Game.update();
	renderCells();
	
};

loop();

canvas.addEventListener('click', canvasclick);
renderCells();
