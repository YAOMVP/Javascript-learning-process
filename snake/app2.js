const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d");
const scoreText = document.querySelector("#scoreText");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height;
const boardBackground = "pink";
const snakeColor = "green";
const snakeBorder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
let score = 0;
let xVelocity = unitSize;
let yVelocity = 0;
//😊别忘了X和Y的食物坐标：
let foodX;
let foodY;
let snake = [
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 }
]

//😊3种监听事件;
window.addEventListener("keydown", changeDirection);

startBtn.addEventListener("click", startGame);

resetBtn.addEventListener("click", resetGame);

function createFood() {
    function randomFood(min, max) {
        return Math.floor(Math.random() * (max - min + 1) / unitSize) * unitSize;
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameWidth - unitSize);
    console.log(foodX, foodY);
};



function drawFood() {
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize);
};


function startGame() {
    startBtn.style.display = "none";
    resetBtn.style.display = "block";
    running = true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
};



function nextTick() {
    if (running) {
        setTimeout(() => {
            clearBoard();
            drawFood();
            drawSnake();
            moveSnake();
            checkGameOver();
            nextTick();
        }, 100)
    } else {
        displayGameOver();
    }
};




function clearBoard() {
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};



function drawSnake() {
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBorder;
    snake.forEach(snakePart => { //得到的是如下：每一个数组对象
        //{x: 50, y: 0}
        //{x: 25, y: 0}
        //{x: 0, y: 0}
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    })
};




function moveSnake() {
    const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity };
    snake.unshift(head);
    //if food is eaten 就不删除
    // console.log(head);  head是一直变化的 往右走的
    if (snake[0].x == foodX && snake[0].y == foodY) {
        playSoundsRight();
        score++;
        scoreText.textContent = score;
        createFood();
    } else {
        snake.pop();
    }
};




function changeDirection(e) {
    const keyPressed = e.keyCode;
    console.log(keyPressed);
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40

    const goingUp = (yVelocity == -unitSize);
    const goingDown = (yVelocity == unitSize);
    const goingLeft = (xVelocity == -unitSize);
    const goingRight = (xVelocity == unitSize);

    switch (true) {
        case (keyPressed == left && !goingRight):
            xVelocity = -unitSize;
            yVelocity = 0;
            break;
        case (keyPressed == right && !goingLeft):
            xVelocity = unitSize;
            yVelocity = 0;

            break;
        case (keyPressed == up && !goingDown):
            xVelocity = 0;
            yVelocity = -unitSize
            break;
        case (keyPressed == down && !goingUp):
            xVelocity = 0;
            yVelocity = unitSize
            break;
    }
};


function checkGameOver() {
    switch (true) {
        case (snake[0].x < 0):
            playSoundsWrong();
            running = false;
            break;
        case (snake[0].x >= gameWidth):
            playSoundsWrong();
            running = false;
            break;
        case (snake[0].y < 0):
            playSoundsWrong();
            running = false;
            break;
        case (snake[0].y >= gameHeight):
            playSoundsWrong();
            running = false;
            break;
    }
};

for (let i = 1; i < snake.length; i++) {
    if (snake[0].x == snake[i].x) {
        running = false;
    }
}


function displayGameOver() {
    ctx.font = "60px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "purple";
    ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);
};



function resetGame() {
    score = 0;
    scoreText.textContent = score;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        { x: unitSize * 2, y: 0 },
        { x: unitSize, y: 0 },
        { x: 0, y: 0 }
    ]
    running = false;
    startGame();
};

function playSoundsRight() {
    const audio = document.createElement("audio");
    audio.src = "./sounds/tom-1.mp3";
    audio.play();
};

function playSoundsWrong() {
    const audio = document.createElement("audio");
    audio.src = "./sounds/wrong.mp3";
    audio.play();
};