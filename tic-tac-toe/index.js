//Put the tiles in a array.
// const tiles = Array.from(document.querySelectorAll(".tile"));
let background = document.querySelector(".background");
const tiles = document.querySelectorAll(".tile");
const display = document.querySelector(".display");
const playerDisplay = document.querySelector(".display-player");
const resetButton = document.querySelector("#reset");
const announcer = document.querySelector(".announcer");
let xStart = false;
let winningCondition = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
let clickNumerber = 0;


// let winningConditionIndex = [  ];

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
        // console.log(i);
        // Get the index
        let index = i;
        if (startGame(index)) {
            if (display.innerHTML === "player X's win!" || display.innerHTML === "player O's win!") {
                tiles[index].innerHTML === "   ";
                startGame(index); //false;
            } else {
                this.innerHTML = getPlayer();
                this.classList.add(`player${this.innerHTML}`);
                changePlayer();
                getValidatePlayer(index);
                getTheWinner(index);
                checkClickNumber();
            }



        } else {

        }
    })
}

resetButton.addEventListener("click", function() {
    location.reload();
});


function checkClickNumber() {
    clickNumerber++;
    if (clickNumerber === 9 && display.innerHTML !== "player X's win!") {
        display.innerHTML = "";
        display.innerHTML = "TIE!!!!!!";
        clickNumerber = 0;
    }
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


function getValidatePlayer(index) {
    switch (index) {
        case 0:
            winningCondition[0][0] = winningCondition[3][0] = winningCondition[6][0] = checkThePlayer(clickNumerber);

            break;

        case 1:
            winningCondition[0][1] = winningCondition[4][0] = checkThePlayer(clickNumerber);
            break;
        case 2:
            winningCondition[0][2] = winningCondition[5][0] = winningCondition[7][0] = checkThePlayer(clickNumerber);

            break;
        case 3:
            winningCondition[1][0] = winningCondition[3][1] = checkThePlayer(clickNumerber);

            break;
        case 4:
            winningCondition[1][1] = winningCondition[4][1] = winningCondition[6][1] = winningCondition[7][1] = checkThePlayer(clickNumerber);

            break;
        case 5:
            winningCondition[1][2] = winningCondition[5][1] = checkThePlayer(clickNumerber);

            break;
        case 6:
            winningCondition[2][0] = winningCondition[3][2] = winningCondition[7][2] = checkThePlayer(clickNumerber);

            break;
        case 7:
            winningCondition[2][1] = winningCondition[4][2] = checkThePlayer(clickNumerber);

            break;
        case 8:
            winningCondition[2][2] = winningCondition[5][2] = winningCondition[6][2] = checkThePlayer(clickNumerber);

            break;
        default:
            break;
    }
    console.log(winningCondition);
}


function checkThePlayer(clickNumerber) {
    if (clickNumerber % 2 === 1) {
        return "O"
    } else {
        return "X"
    }
}

function getTheWinner(index) {
    // if (
    //     // winningCondition[0][0] === "X" || winningCondition[0][0] === "O" && winningCondition[0][1] === "X" || winningCondition[0][1] === "O" && winningCondition[0][2] === "X" || winningCondition[0][2] === "O" && winningCondition[1][0] === "X" || winningCondition[1][0] === "O" && winningCondition[1][1] === "X" || winningCondition[1][1] === "O" && winningCondition[1][2] === "X" || winningCondition[1][2] === "O" && winningCondition[2][0] === "X" || winningCondition[2][0] === "O" && winningCondition[2][1] === "X" || winningCondition[2][1] === "O" && winningCondition[2][2] === "X" || winningCondition[2][2] === "O" && winningCondition[3][0] === "X" || winningCondition[3][0] === "O" && winningCondition[3][1] === "X" || winningCondition[3][1] === "O" && winningCondition[3][2] === "X" || winningCondition[3][2] === "O" && winningCondition[4][0] === "X" || winningCondition[4][0] === "O" && winningCondition[4][1] === "X" || winningCondition[4][1] === "O" && winningCondition[4][2] === "X" || winningCondition[4][2] === "O" && winningCondition[5][0] === "X" || winningCondition[5][0] === "O" && winningCondition[5][1] === "X" || winningCondition[5][1] === "O" && winningCondition[5][2] === "X" || winningCondition[5][2] === "O" && winningCondition[6][0] === "X" || winningCondition[6][0] === "O" && winningCondition[6][1] === "X" || winningCondition[6][1] === "O" && winningCondition[6][2] === "X" || winningCondition[6][2] === "O" && winningCondition[7][0] === "X" || winningCondition[7][0] === "O" && winningCondition[7][1] === "X" || winningCondition[7][1] === "O" && winningCondition[7][2] === "X" || winningCondition[7][2] === "O"
    // 非 startGame(index)
    // ) {
    //     tiles[0] === "X" || tiles[0] === "O" &&
    //         tiles[1] === "X" || tiles[1] === "O" &&
    //         tiles[2] === "X" || tiles[2] === "O" &&
    //         tiles[3] === "X" || tiles[3] === "O" &&
    //         tiles[4] === "X" || tiles[4] === "O" &&
    //         tiles[5] === "X" || tiles[5] === "O" &&
    //         tiles[6] === "X" || tiles[6] === "O" &&
    //         tiles[7] === "X" || tiles[7] === "O"
    //     display.innerHTML = "";
    //     display.innerHTML = "TIE!";
    // } else {

    // 0
    if (winningCondition[0][0] === "X" || winningCondition[0][0] === "O" && winningCondition[0][1] === "X" || winningCondition[0][1] === "O" && winningCondition[0][2] === "X" || winningCondition[0][2] === "O") {
        if (winningCondition[0][0] === "X" && winningCondition[0][1] === "X" && winningCondition[0][2] === "X") {
            display.innerHTML = "";
            display.innerHTML = "player X's win!";
            background.classList.add("win");
        } else if (winningCondition[0][0] === "O" && winningCondition[0][1] === "O" && winningCondition[0][2] === "O") {
            display.innerHTML = "";
            display.innerHTML = "player O's win!";
            background.classList.add("win");

        } else {

        }
    } else {

    }

    // 1
    if (winningCondition[1][0] === "X" || winningCondition[1][0] === "O" && winningCondition[1][1] === "X" || winningCondition[1][1] === "O" && winningCondition[1][2] === "X" || winningCondition[1][2] === "O") {
        if (winningCondition[1][0] === "X" && winningCondition[1][1] === "X" && winningCondition[1][2] === "X") {
            display.innerHTML = "";
            display.innerHTML = "player X's win!";
            background.classList.add("win");

        } else if (winningCondition[1][0] === "O" && winningCondition[1][1] === "O" && winningCondition[1][2] === "O") {
            display.innerHTML = "";
            display.innerHTML = "player O's win!";
            background.classList.add("win");

        } else {

        }
    } else {

    }

    //2
    if (winningCondition[2][0] === "X" || winningCondition[2][0] === "O" && winningCondition[2][1] === "X" || winningCondition[2][1] === "O" && winningCondition[2][2] === "X" || winningCondition[2][2] === "O") {
        if (winningCondition[2][0] === "X" && winningCondition[2][1] === "X" && winningCondition[2][2] === "X") {
            display.innerHTML = "";
            display.innerHTML = "player X's win!";
            background.classList.add("win");

        } else if (winningCondition[2][0] === "O" && winningCondition[2][1] === "O" && winningCondition[2][2] === "O") {
            display.innerHTML = "";
            display.innerHTML = "player O's win!";
            background.classList.add("win");

        } else {

        }
    } else {

    }

    //3
    if (winningCondition[3][0] === "X" || winningCondition[3][0] === "O" && winningCondition[3][1] === "X" || winningCondition[3][1] === "O" && winningCondition[3][2] === "X" || winningCondition[3][2] === "O") {
        if (winningCondition[3][0] === "X" && winningCondition[3][1] === "X" && winningCondition[3][2] === "X") {
            display.innerHTML = "";
            display.innerHTML = "player X's win!";
            background.classList.add("win");

        } else if (winningCondition[3][0] === "O" && winningCondition[3][1] === "O" && winningCondition[3][2] === "O") {
            display.innerHTML = "";
            display.innerHTML = "player O's win!";
            background.classList.add("win");

        } else {

        }
    } else {

    }

    //4
    if (winningCondition[4][0] === "X" || winningCondition[4][0] === "O" && winningCondition[4][1] === "X" || winningCondition[4][1] === "O" && winningCondition[4][2] === "X" || winningCondition[4][2] === "O") {
        if (winningCondition[4][0] === "X" && winningCondition[4][1] === "X" && winningCondition[4][2] === "X") {
            display.innerHTML = "";
            display.innerHTML = "player X's win!";
            background.classList.add("win");

        } else if (winningCondition[4][0] === "O" && winningCondition[4][1] === "O" && winningCondition[4][2] === "O") {
            display.innerHTML = "";
            display.innerHTML = "player O's win!";
            background.classList.add("win");

        } else {

        }
    } else {

    }

    //5
    if (winningCondition[5][0] === "X" || winningCondition[5][0] === "O" && winningCondition[5][1] === "X" || winningCondition[5][1] === "O" && winningCondition[5][2] === "X" || winningCondition[5][2] === "O") {


        if (winningCondition[5][0] === "X" && winningCondition[5][1] === "X" && winningCondition[5][2] === "X") {
            display.innerHTML = "";
            display.innerHTML = "player X's win!";
            background.classList.add("win");

        } else if (winningCondition[5][0] === "O" && winningCondition[5][1] === "O" && winningCondition[5][2] === "O") {
            display.innerHTML = "";
            display.innerHTML = "player O's win!";
            background.classList.add("win");

        } else {

        }
    } else {}

    //6
    if (winningCondition[6][0] === "X" || winningCondition[6][0] === "O" && winningCondition[6][1] === "X" || winningCondition[6][1] === "O" && winningCondition[6][2] === "X" || winningCondition[6][2] === "O") {
        if (winningCondition[6][0] === "X" && winningCondition[6][1] === "X" && winningCondition[6][2] === "X") {
            display.innerHTML = "";
            display.innerHTML = "player X's win!";
            background.classList.add("win");

        } else if (winningCondition[6][0] === "O" && winningCondition[6][1] === "O" && winningCondition[6][2] === "O") {
            display.innerHTML = "";
            display.innerHTML = "player O's win!";
            background.classList.add("win");

        } else {

        }
    } else {

    }

    //7
    if (winningCondition[7][0] === "X" || winningCondition[7][0] === "O" && winningCondition[7][1] === "X" || winningCondition[7][1] === "O" && winningCondition[7][2] === "X" || winningCondition[7][2] === "O") {


        if (winningCondition[7][0] === "X" && winningCondition[7][1] === "X" && winningCondition[7][2] === "X") {
            display.innerHTML = "";
            display.innerHTML = "player X's win!";
            background.classList.add("win");

        } else if (winningCondition[7][0] === "O" && winningCondition[7][1] === "O" && winningCondition[7][2] === "O") {
            display.innerHTML = "";
            display.innerHTML = "player O's win!";
            background.classList.add("win");

        } else {

        }
    } else {

    }

    // }

}


// }
// getTheWinner();