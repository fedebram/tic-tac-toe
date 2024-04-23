const gameBoard = [];

function Cell (value, check, row, column) {
    this.value = value;
    this.check = check;
}
let row = 3;
let column = 3;

for (let i = 0; i < row; i++) {
    gameBoard[i] = [];
    for (let j = 0; j < column; j++) {
        gameBoard[i][j] = new Cell("", false);
    }
}

function checkRow () {
count = 0;
for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
        if (gameBoard[i][j].value === "X") count ++;
        if (count !== 3) break;
    }
}
}

function checkColumn () {
    count = 0;
    for (let j = 0; j < column; j++) {
        for (let i = 0; i < row; i++) {
            if (gameBoard[i][j].value === "X") count ++;
            if (count !== 3) break;
        }
    }
}

function checkDiagonals () {
    count = 0;
    if ((gameBoard[0][0].value === "X") && (gameBoard[1][1].value === "X") && (gameBoard[2][2].value === "X")) ;
    //win
    if ((gameBoard[0][2].value === "X") && (gameBoard[1][1].value === "X") && (gameBoard[2][0].value === "X"));
    //win
}




const player1 = "x";
const player2 = "o";


/*function playGame () {
    //if (check) return;
    //eventlistener cell
    gameBoard[i].value = "x";
    gameBoard[i].check = true;
    //eventlistener cell
    gameBoard[i].value = "o";
    gameBoard[i].check = true;
    //eventlistner cell
    gameBoard[i].value = "x";
    gameBoard[i].check = true;
    //eventli
    gameBoard[i].value = "o";
    gameBoard[i].check = true;
    //
    gameBoard[i].value = "x";
    gameBoard[i].check = true;
}*/




