const gameBoard = document.querySelector("#gameBoard");
const ctx = gameBoard.getContext("2d"); //绘制2d画板，也可以说是拿到2d画板的权限，才能进行下一步的操作。
const startBtn = document.querySelector("#startBtn");
const endBtn = document.querySelector("#endBtn");
const gameWidth = gameBoard.width;
const gameHeight = gameBoard.height; // initially we assign the canvas wifth and height inline in HTML.