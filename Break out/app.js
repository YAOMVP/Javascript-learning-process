// canvas variables
const breakOut = document.querySelector("#breakOut");
const ctx = breakOut.getContext("2d");
const breakOutWidth = breakOut.width; //400
const breakOutHeight = breakOut.height; //500

// paddle variables
const paddleWidth = 100;
const paddleHeight = 20;
const paddleMarginBottom = 50;

const paddle = {
    x: breakOutWidth / 2 - paddleWidth / 2,
    y: breakOutHeight - paddleMarginBottom - paddleHeight,
    width: paddleWidth,
    height: paddleHeight,
    dx: 5 //
}