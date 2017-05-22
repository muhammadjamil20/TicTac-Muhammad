let currentTurn;
let counter;

function ticTocGame() {
    for (let i = 1; i <= 9; i++) {
        clearBox(i);
    }
    currentTurn = "X";
    counter=0;
    document.getElementById("message").innerText = "";
}

function updateCell(square) {
    if (square.innerText == "") {
        square.innerText = currentTurn;
        switchTurn();
        counter++;
        if(counter>=9)
        {
            gameOver();
        }
    } else {
        
    }
}
    
function switchTurn() {

    if (currentTurn == "X") {
        currentTurn = "O";
    } else {
        currentTurn = "X";
    }
}

function clearBox(number) {
    document.getElementById("cell" + number).innerText = "";
}

function gameOver(){
    document.getElementById("message").innerText = "Game Over";
}