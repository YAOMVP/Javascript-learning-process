// canvas variables
const breakOut = document.querySelector("#breakOut");
const ctx = breakOut.getContext("2d");
const breakOutWidth = breakOut.width; //400
const breakOutHeight = breakOut.height; //500


// paddle variables
const paddleWidth = 100;
const paddleHeight = 20;
const paddleMarginBottom = 50;

//paddle
const paddle = {
    x: breakOutWidth / 2 - paddleWidth / 2,
    y: breakOutHeight - paddleMarginBottom - paddleHeight,
    width: paddleWidth,
    height: paddleHeight,
    dx: 5 //Amount of pixels the paddle will move to the right or left.
};

const ballRadius = 10;
//Create the ball:
const ball = {
    x: breakOutWidth / 2,
    y: paddle.y - ballRadius,
    radius: ballRadius,
    speed: 3,
    dx: 3, //总是一个方向 后边会改
    dy: -3
}

//Move paddle left and right
let leftArrow = false;
let rightArrow = false;

let life = 3; //Player has 3 lives.


window.addEventListener("keydown", keyPressed);
window.addEventListener("keyup", keyEnter);




function keyPressed(e) {
    if (e.keyCode == 37) {
        leftArrow = true;
    } else if (e.keyCode == 39) {
        rightArrow = true;
    }
};


//Stop moving when user release the key
function keyEnter(e) {
    if (e.keyCode == 37) {
        leftArrow = false;
    } else if (e.keyCode == 39) {
        rightArrow = false;
    }
}


function drawPaddle() {
    ctx.fillStyle = "#607EAA";
    ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height);
    ctx.lineWidth = 3; //border of the paddle
    ctx.strokeStyle = "#1C3879";
    ctx.strokeRect(paddle.x, paddle.y, paddle.width, paddle.height);

};


function drawBall() {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "#FFF9CA";
    ctx.stroke();
    ctx.fillStyle = "#5A8F7B";
    ctx.fill();
    ctx.closePath();
}

function drawItem() {
    drawPaddle();
    drawBall();
}

//Move the paddle and do not let paddle out of bounds.
function movePaddle() {
    if (leftArrow && paddle.x > 0) {
        paddle.x = paddle.x - paddle.dx; //paddle.x -=paddle.dx;
    } else if (rightArrow && paddle.x + paddle.width < breakOutWidth) {
        paddle.x = paddle.x + paddle.dx; //paddle.x +=paddle.dx;
    }
};

function moveBall() {
    ball.x = ball.x + ball.dx; //dx:3
    ball.y = ball.y + ball.dy; //dy；-3

}


function movementUpdate() {
    movePaddle();
    moveBall();
    ballWallCollision();
};

// Ball and wall collision detection
function ballWallCollision() {
    if (ball.x + ball.radius > breakOutWidth || ball.x - ball.radius < 0) {
        ball.dx = -ball.dx;
    } else if (ball.y - ball.radius < 0) {
        ball.dy = -ball.dy;
    } else if (ball.y + ball.radius > breakOutHeight) {
        life--;
        resetBall();
    }
};


function resetBall() {
    ball.x = breakOutWidth / 2;
    ball.y = paddle.y - ballRadius;
    ball.dx = 3 * (Math.random() * 2 - 1) //0-2 , -1 至 1 再*3， -3 至3
    ball.dy = -3;
}


function paddleControl() {
    ctx.drawImage(backgroundImg, 0, 0);
    drawItem();
    movementUpdate();

    requestAnimationFrame(paddleControl); //可以让浏览器优化并行的动画动作，更流畅。
};
paddleControl();