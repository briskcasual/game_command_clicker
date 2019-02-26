var loop = function(){

	setTimeout(loop,1000);
	
	Game.update();
	
};

loop();