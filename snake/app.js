const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d"); //绘制2d画板，也可以说是拿到2d画板的权限，才能进行下一步的操作。
const startBtn = document.querySelector("#startBtn");
const endBtn = document.querySelector("#endBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height; // initially we assign the canvas width and height inline in HTML.
const boardBackground = "pink";
const snakeColor = "green";
const snakeBoarder = "black";
const foodColor = "red";
const unitSize = 25;
let running = false;
let xVelocity = unitSize; //x轴移动25px， +向右移动 -向左移动
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
]

function createFood(min, max) {
    const randomNumber = Math.floor((Math.random() * (max - min + 1) + min) / unitSize) * unitSize;
    return randomNumber;
}
foodX = createFood(0, gameWidth - unitSize);
foodY = createFood(0, gameWidth - unitSize);
console.log(foodX);
console.log(foodY);

function drawFood() {
    ctx.fillStyle = foodColor;
    ctx.fillRect(foodX, foodY, unitSize, unitSize); //Fill a rectangle (a pair of coordinates, width,height)
}
drawFood();