//Put the tiles in a array.
// const tiles = Array.from(document.querySelectorAll(".tile"));
const tiles = document.querySelectorAll(".tile");
const playerDisplay = document.querySelector(".display-player");
const resetButton = document.querySelector("#reset");
const announcer = document.querySelector(".announcer");
let currentPlayer = 1;

const winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],

]

// tiles.forEach((value, index) => {
//     value.addEventListener("click", () => {
//         console.log(value, index); //Get the div and index number.
//         value.innHTML = currentPlayer;
//         this.classList.add("playerX");
//     })
// })

for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener("click", function() {
        // console.log(i);  Get the index
        this.innerHTML = getPlayer();
        this.classList.add(`player${this.innerHTML}`);
        whoseNextTurn();
    })
}

//😊The result is odd return "X" otherwise return "O";
function getPlayer() {
    if (currentPlayer % 2 === 1) {
        currentPlayer++;
        return "X";
    } else {
        currentPlayer++;
        return "O";
    }
}

function whoseNextTurn() {
    playerDisplay.innerHTML = "O";
}

for (let i = 0; i < winningCondition.length; i++) {
    console.log(winningCondition[i]);
    for (let j = 0; j < winningCondition[i].length; j++) {
        console.log(winningCondition[i][j]);
    }
}