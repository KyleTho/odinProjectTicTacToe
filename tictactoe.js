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

    const printBoard = () => {
        console.log("=BOARD=");
        console.log(`[${board[0][0].getValue()}] [${board[0][1].getValue()}] [${board[0][2].getValue()}]`);
        console.log("-----------");
        console.log(`[${board[1][0].getValue()}] [${board[1][1].getValue()}] [${board[1][2].getValue()}]`);
        console.log("-----------");
        console.log(`[${board[2][0].getValue()}] [${board[2][1].getValue()}] [${board[2][2].getValue()}]`);
    };

    const getBoard = () => board();

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
    
}

const game = GameBoard();
game.printBoard();