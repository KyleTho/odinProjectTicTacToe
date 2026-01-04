function GameBoard() {
    
    const row = 3;
    const column = 3;
    const board = [];

    for (let i=0; i < row; i++) {
        board[i] = [];
        for (let j=0; j < column; j++) {
            board[i][j] = Square();
        }
    }

    const getBoard = () => board;

    const printBoard = () => {
        console.log("=BOARD=");
        console.log(`[${board[0][0].getValue()}] [${board[0][1].getValue()}] [${board[0][2].getValue()}]`);
        console.log("-----------");
        console.log(`[${board[1][0].getValue()}] [${board[1][1].getValue()}] [${board[1][2].getValue()}]`);
        console.log("-----------");
        console.log(`[${board[2][0].getValue()}] [${board[2][1].getValue()}] [${board[2][2].getValue()}]`);
    };

    return { getBoard, printBoard };
    
}

function Square () {

    let value = "";

    const addToken = (playerShape) => {
        value = playerShape;
    };

    const getValue = () => value || " ";

    return { getValue, addToken }
    
}

function Player(shape) {
    
    const playerShape = shape;
}

function GameState() {

    const board = GameBoard();
    /*const players = [
        {
            playerName: playerOne,
            shape: "X"
        },
        {
            playerName: playerTwo,
            shape: "X"
        }
    ]
   
    const currentPlayer = players[0];

    const alternatePlayers = () => {
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];}

    const getCurrentPlayer = () => currentPlayer;

    const printTurn = () => {
        board.printBoard();
    };
    */
    const playTurn = (position, playerShape) => {
        const row = Math.floor(position / 3);
        const column = position % 3;

        board.getBoard()[row][column].addToken(playerShape);
        board.printBoard();
    };
    
    return { playTurn }

}

game = GameState();
game.playTurn(0, "X");
