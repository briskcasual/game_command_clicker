var stepHeading = function(){

	Game.ship.heading += 1;
	Game.ship.heading %= 8;
	renderCells();

};

var move = function(){
	Game.update();
	renderCells();
};

var loop = function(){

	setTimeout(loop,1000);
	
};

//loop();

canvas.addEventListener('click', move);
renderCells();
