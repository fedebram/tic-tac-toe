const gameBoard = [];
const game = document.querySelector(".game-board");

function Cell(value, check, row, column) {
    this.value = value;
    this.check = check;
}
let row = 3;
let column = 3;
let playerCount = 1;

for (let i = 0; i < row; i++) {
    gameBoard[i] = [];
    for (let j = 0; j < column; j++) {
        gameBoard[i][j] = new Cell("", false);
        gameBoard[i][j] = document.createElement("div");
        game.appendChild(gameBoard[i][j]);
        gameBoard[i][j].id = `cell${i}-${j}`;
        gameBoard[i][j].addEventListener("click", playGame);
    }
}

function checkRow() {
    let countX = 0;
    let countO = 0;
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            if (gameBoard[i][j].value === "X") countX++;
            else if (gameBoard[i][j].value === "O") countO++;
            if (countX === 3) console.log("X win");
            if (countO === 3) console.log("O win");
        }
        countX = 0;
        countO = 0;
    }
}

function checkColumn() {
    let countX = 0;
    let countO = 0;
    for (let j = 0; j < column; j++) {
        for (let i = 0; i < row; i++) {
            if (gameBoard[i][j].value === "X") countX++;
            else if (gameBoard[i][j].value === "O") countO++;
            if (countX === 3) console.log("X win");
            if (countO === 3) console.log("O win");
        }
        countX = 0;
        countO = 0;
    }
}


function checkDiagonals() {
    if ((gameBoard[0][0].value === "X") && (gameBoard[1][1].value === "X") && (gameBoard[2][2].value === "X")) console.log("X win");
    if ((gameBoard[0][0].value === "O") && (gameBoard[1][1].value === "O") && (gameBoard[2][2].value === "O")) console.log("O win");

    if ((gameBoard[0][2].value === "X") && (gameBoard[1][1].value === "X") && (gameBoard[2][0].value === "X")) console.log("X win");
    if ((gameBoard[0][2].value === "O") && (gameBoard[1][1].value === "O") && (gameBoard[2][0].value === "O")) console.log("O win");
}

function playGame() {
    if ((playerCount % 2) !== 0) {
        if (player1 === "X") {
            this.value = "X";
            this.textContent = "X";
        }
        else if (player1 === "O") {
            this.value = "O";
            this.textContent = "O";
        }
    }
    else if ((playerCount % 2) === 0) {
        if (player2 === "X") {
            this.value = "X";
            this.textContent = "X";
        }
        else if (player2 === "O") {
            this.value = "O";
            this.textContent = "O";
        }
    }
    checkRow();
    checkDiagonals();
    checkColumn();
    playerCount++;
}

let buttonX = document.getElementById("X");
let buttonO = document.getElementById("O");
//function playerChoice () {
buttonX.addEventListener("click", () => {
    player1 = "X";
    player2 = "O";
    buttonX.disabled = true;
    buttonO.disabled = true;
});

buttonO.addEventListener("click", () => {
    player1 = "O";
    player2 = "X";
    buttonX.disabled = true;
    buttonO.disabled = true;
});



let player1 = "";
let player2 = "";





