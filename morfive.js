let canvas  = document.querySelector('#canvas');
let main_context = canvas.getContext('2d');
let canvas_x = canvas.getAttribute('width');
let canvas_y = canvas.getAttribute('height');

board_game = Array(5).fill(Array(5).fill(0));

function drawGrid(context, board){
	context.strokeStyle="#181818";
	context.lineWidth=3;

	let nb_tile_x = board[0].length
	let nb_tile_y = board.length
	let tile_size_x = canvas_x/nb_tile_x;
	let tile_size_y = canvas_y/nb_tile_y;

	context.beginPath();
	for(var i = 0; i<=nb_tile_x;i++){
		context.moveTo(i*tile_size_x, 0);
		context.lineTo(i*tile_size_x, nb_tile_y*tile_size_y);
	}
	for(var i = 0; i<=nb_tile_y;i++){
		context.moveTo(0,i*tile_size_y);
		context.lineTo(nb_tile_x*tile_size_x,i*tile_size_y);
	}
	context.stroke();
}


drawGrid(main_context, board_game);


$("#canvas").click(function(e){
	var x = e.pageX - this.offsetLeft;
	var y = e.pageY - this.offsetTop;
	let tile_size_x = canvas_x/nb_tile_x;
	let tile_size_y = canvas_y/nb_tile_y;
	console.log(x,y);
});