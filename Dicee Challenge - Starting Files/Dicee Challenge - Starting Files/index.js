let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let h1 = document.querySelector("h1");
let btn = document.querySelector(".button");

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

let num1 = randomNumber(1, 6);
let num2 = randomNumber(1, 6);
console.log(num1, num2);

if (num1 === num2) {
    h1.innerHTML = " Draw!";
} else if (num1 > num2) {
    h1.innerHTML = " 🚩Player1 Win! ";
} else {
    h1.innerHTML = " Player2 Win!🚩";
}

img1.setAttribute("src", `./images/dice${num1}.png`);
img2.setAttribute("src", `./images/dice${num2}.png`);

btn.addEventListener("click", function() {
    window.location.href = window.location.href;
})