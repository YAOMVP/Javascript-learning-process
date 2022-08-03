const breakOut = document.querySelector("#breakOut");
const ctx = breakOut.getContext("2d");
const breakOutWeight = breakOut.width;
const breakOutHeight = breakOut.height;

function drawBlock() {
    ctx.fillStyle = "#81CACF";
    ctx.fillRect(150, 200, 100, 50) //(x-Axis,y-Axis, and blcokWidth, blockHeight);
}
drawBlock();

function drawRect(x, y) {
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 50, 50);
}
drawRect(150, 200);