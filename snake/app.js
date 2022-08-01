const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d"); //绘制2d画板，也可以说是拿到2d画板的权限，才能进行下一步的操作。
const scoreText = document.querySelector("#scoreText");
const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height; // initially we assign the canvas width and height inline in HTML.
const boardBackground = "pink";
const snakeColor = "green";
const snakeBoarder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize; //x轴移动25px， +向右移动 -向左移动 how far we move on the x-axis every single gameTick
let yVelocity = 0; //刚开始先不移动，如果想向上移动 -unitSize 向下移动+unitSize
let foodX; //x轴坐标
let foodY;
let score = 0;

//Straight brackets is an array, we will create an object, an object for each body part,
//Each body part has an x and an y cooredinate
//Begin with the tail, the tail will be set in the top left corner.{x:0,y:0}
//Create 5 body parts to the snake, after eating food it will be increased by 1.
let snake = [
    { x: unitSize * 4, y: 0 },
    { x: unitSize * 3, y: 0 },
    { x: unitSize * 2, y: 0 },
    { x: unitSize, y: 0 },
    { x: 0, y: 0 }
];


startBtn.addEventListener("click", startGame);


window.addEventListener("keydown", changeDirection);


resetBtn.addEventListener("click", resetGame);



function startGame() {
    running = true;
    scoreText.textContent = score;
    createFood();
    drawFood();
    nextTick();
};



function createFood() {
    function randomFood(min, max) {
        const randomNumber = Math.floor((Math.random() * (max - min + 1) + min) / unitSize) * unitSize;
        return randomNumber;
    }
    foodX = randomFood(0, gameWidth - unitSize);
    foodY = randomFood(0, gameWidth - unitSize);
    console.log(foodX);
    console.log(foodY);
};





function drawFood() {
    //Paint the food color in the coordinate.
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize); //Fill a rectangle (a pair of coordinates, width,height)
};



function clearBoard() {
    //initilize the boardBackground Color and the board width && height.
    ctx.fillStyle = boardBackground;
    ctx.fillRect(0, 0, gameWidth, gameHeight);
};



function nextTick() {
    if (running) {
        setTimeout(() => {
            clearBoard();
            drawFood();
            drawSnake();
            moveSnake();
            checkGameOver();
            nextTick(); //必须要自己先调用，不用等着click再调用
        }, 150)
    } else {
        displayGameOver();
    }
};



function drawSnake() {
    //Paint the snake color and the border of the snake.
    ctx.fillStyle = snakeColor;
    ctx.strokeStyle = snakeBoarder;
    //😊We want to paint the whole part of the snake, and snake is an array object, we need to use forEach.
    snake.forEach(snakePart => {
        ctx.fillRect(snakePart.x, snakePart.y, unitSize, unitSize);
        ctx.strokeRect(snakePart.x, snakePart.y, unitSize, unitSize);
    })
};



function moveSnake() {
    //Find the head and the direction of the moving, and also eliminate the tail.
    //How far are we moving on the x-axis.
    const head = { x: snake[0].x + xVelocity, y: snake[0].y + yVelocity }
    snake.unshift(head);

    //if food is eaten
    if (snake[0].x === foodX && snake[0].y === foodY) {
        score++;
        scoreText.textContent = score;
        createFood();
        console.log(foodX);
        console.log(foodY);
    } else {
        snake.pop();
    }
};



function changeDirection(e) {
    // console.log(e.keyCode);
    const keyPressed = e.keyCode
    const left = 37;
    const up = 38;
    const right = 39;
    const down = 40;

    const goingUp = (yVelocity === -unitSize);
    const goingDown = (yVelocity === unitSize);
    const goingLeft = (xVelocity === -unitSize);
    const goingRight = (xVelocity === unitSize);

    //We will examine true against many matching cases.
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
            yVelocity = -unitSize;
            break;
        case (keyPressed == down && !goingUp):
            xVelocity = 0;
            yVelocity = unitSize;
            break;
    }
};



function checkGameOver() {
    //1.Out-of-bounds running = false 
    switch (true) {
        case (snake[0].x >= gameWidth):
            running = false;
            break;
        case (snake[0].x < 0):
            running = false;
            break;
        case (snake[0].y >= gameHeight):
            running = false;
            break;
        case (snake[0].y < 0):
            running = false;
            break;
    }
    //2.snake whole parts overlap to each other. 已经判断过头出界了否，所以从1开始
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x == snake[0].x && snake[i].y == snake[0].y) {
            running = false;
        }
    }
};



function displayGameOver() {
    ctx.font = "60px Georgia";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.fillText("GAME OVER!", gameWidth / 2, gameHeight / 2);
    running = false;

};



function resetGame() {
    score = 0;
    scoreText.textContent = score;
    xVelocity = unitSize;
    yVelocity = 0;
    snake = [
        { x: unitSize * 4, y: 0 },
        { x: unitSize * 3, y: 0 },
        { x: unitSize * 2, y: 0 },
        { x: unitSize, y: 0 },
        { x: 0, y: 0 }
    ];
    startGame();
};