let game_board  = document.getElementById("game_board");
let player = 1;

board_game = Array(5);
for(var i = 0; i<board_game.length; i++){
	board_game[i] = Array(5).fill(0)
}

function freeNode(node){
	for(var i = 0; i<node.children.length;i++){
		node.children[i].remove();
	}
}

function drawGrid(context, board){
	var table = document.createElement('table');
	let nb_tile_x = board[0].length
	let nb_tile_y = board.length

	for(var i = 0; i<board.length;i++){
    	let tr_tmp = document.createElement('tr');
    	for(var j = 0; j<board[i].length;j++){
    		let button = document.createElement('button');
    		const i_= i;
    		const j_ = j;
    		button.onclick = function(){
    			playAt(i_,j_);
  				};
  			button.classList.add("player"+board[i][j]);
  			button.classList.add("tile");
  			let td_tmp = document.createElement("td");
        	td_tmp.appendChild(button);
        	tr_tmp.appendChild(td_tmp);
    	}           
    	table.appendChild(tr_tmp);
	}
	freeNode(context);
	context.appendChild(table);

}

function updateGame(){
	drawGrid(game_board, board_game);
}


function playAt(x,y){
	console.log(x);
	console.log(y)
	board_game[x][y] = player;
	player = player%2 + 1;
	updateGame();
}



drawGrid(game_board, board_game);