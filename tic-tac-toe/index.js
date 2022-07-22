//Put the tiles in a array.
// const tiles = Array.from(document.querySelectorAll(".tile"));
const tiles = document.querySelectorAll(".tile");
const playerDisplay = document.querySelector(".display-player");
const resetButton = document.querySelector("#reset");
const announcer = document.querySelector(".announcer");
let xStart = false;
let winningCondition = [];
let clickNumerber = 0;
let newArray = [];
// let winningConditionIndex = [];

//😊 startGame function:check all of the tile is empty or not, if all is clear then the user can start the game.
function startGame(index) {
    if (tiles[index].innerHTML === "") {
        return true;
    } else {
        return false;
    }
}


//😊 Click event.
for (let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener("click", function() {
        // console.log(i);  Get the index
        let index = i;
        if (startGame(index)) {
            this.innerHTML = getPlayer();
            checkUsrIndex(index);
            clickNumerber++;
            this.classList.add(`player${this.innerHTML}`);
            changePlayer();

        } else {

        }

    })
}


//😊1.Everytime playerX needs to start first.
//2.The result is odd return "X" otherwise return "O";
function getPlayer() {
    if (xStart) {
        if (clickNumerber % 2 === 1) {
            return "O";
        } else {
            return "X";
        }
    } else {
        xStart = true;
        return "X"
    }
}


//😊Display which player is next turn.
function changePlayer() {
    if (playerDisplay.innerHTML === "X") {
        playerDisplay.innerHTML = "O";
        playerDisplay.classList.remove("playerx");
        playerDisplay.classList.add("playero");
    } else {
        playerDisplay.innerHTML = "X";
        playerDisplay.classList.add("playerx");
    }

}


/* 
board:       
0 1 2 
3 4 5 
6 7 8


winningConditionIndex:
00,01,02
10,11,12
20,21,22
30,31,32
40,41,42
50,51,52
60,61,62
70,71,72
*/

// function checkTheWinner() {
//     // console.log(winningCondition[6][1]);//4   Get each value of the  winningCondition array.
//     // console.log(winningCondition[6][1] === winningCondition[7][1]); true
// }
// checkTheWinner();

function checkUsrIndex(index) {
    winningCondition = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]

    newArray = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ]
    switch (index) {
        case 0:
            winningCondition[0][0] = winningCondition[3][0] = winningCondition[6][0] = checkTheWinner(clickNumerber);
            var winner = checkTheWinner(clickNumerber);
            newArray.push(newArray[0][0] = newArray[3][0] = newArray[6][0] = winner);
            break;

        case 1:
            winningCondition[0][1] = winningCondition[4][0] = checkTheWinner(clickNumerber);
            var winner = checkTheWinner(clickNumerber);
            newArray.push(newArray[0][1] = newArray[4][0] = winner);
            break;
        case 2:
            winningCondition[0][2] = winningCondition[5][0] = winningCondition[7][0] = checkTheWinner(clickNumerber);

            break;
        case 3:
            winningCondition[1][0] = winningCondition[3][1] = checkTheWinner(clickNumerber);

            break;
        case 4:
            winningCondition[1][1] = winningCondition[4][1] = winningCondition[6][1] = winningCondition[7][1] = checkTheWinner(clickNumerber);

            break;
        case 5:
            winningCondition[1][2] = winningCondition[5][1] = checkTheWinner(clickNumerber);

            break;
        case 6:
            winningCondition[2][0] = winningCondition[3][2] = winningCondition[7][2] = checkTheWinner(clickNumerber);

            break;
        case 7:
            winningCondition[2][1] = winningCondition[4][2] = checkTheWinner(clickNumerber);

            break;
        case 8:
            winningCondition[2][2] = winningCondition[5][2] = winningCondition[6][2] = checkTheWinner(clickNumerber);

            break;
        default:
            break;
    }
    console.log(winningCondition);
    console.log(newArray);
}

function checkTheWinner(clickNumerber) {
    if (clickNumerber % 2 === 1) {
        return "0"
    } else {
        return "X"
    }
}