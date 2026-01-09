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

    const placeShape = (position, playerShape) => {
        const row = Math.floor(position / 3);
        const column = position % 3;
        
        if (board[row][column].getValue() !== " ") {
            return false;
        }

        board[row][column].addToken(playerShape);
        return true;
    };

    const printBoard = () => {
        console.log("=BOARD=");
        console.log(`[${board[0][0].getValue()}] [${board[0][1].getValue()}] [${board[0][2].getValue()}]`);
        console.log("-----------");
        console.log(`[${board[1][0].getValue()}] [${board[1][1].getValue()}] [${board[1][2].getValue()}]`);
        console.log("-----------");
        console.log(`[${board[2][0].getValue()}] [${board[2][1].getValue()}] [${board[2][2].getValue()}]`);
    };

    return { getBoard, printBoard, placeShape };
    
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

function GameState(playerOneName = "Player One",
  playerTwoName = "Player Two") {

    const board = GameBoard();
    const players = [
        {
            playerName: playerOneName,
            shape: "X"
        },
        {
            playerName: playerTwoName,
            shape: "O"
        }
    ]
   
    let currentPlayer = players[0];

    const alternatePlayers = () => {
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];}

    const getCurrentPlayer = () => currentPlayer;

    const printTurn = () => {
        board.printBoard();
    };
    
    const playTurn = (position, playerShape) => {

        board.placeShape(position, playerShape);

        board.printBoard();
    };
    
    return { playTurn }

}

game = GameState();
game.playTurn(0, "X");
