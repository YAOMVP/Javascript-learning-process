let imgs = document.querySelectorAll(".imgShow li")
let img0 = document.querySelector(".img0");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let h1 = document.querySelector("h1");
let button = document.querySelector(".button");
let choose = document.querySelector(".choose");
let computer = document.querySelector(".computer");
let refresh = document.querySelector(".refresh");
let num;
let isStarted = false;

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function() {
        if (isStarted) {
            refreshGame();
        } else {
            startGame(i);
            showComputer();
            computer.addEventListener("click", function() {
                computer.style.display = "none";
                num = getRandom();
                img2.setAttribute("src", `./img/${num}.png`);
                console.log(num);
                img2.style.visibility = "visible";
                checkWinner(i, num);
                isStarted = true;
            })
        }
    })
}


function startGame(i) {
    isStarted = true;

    // p disappear
    choose.style.visibility = "hidden";
    // All the imgs disappear
    for (let j = 0; j < imgs.length; j++) {
        imgs[j].style.visibility = "hidden";
    }
    //Clicked imgs visible
    img0.setAttribute("src", `./img/${i}.png`);
    console.log(i);
    img0.style.visibility = "visible";
}

function getRandom() {
    return Math.floor(Math.random() * 3);
}

function showComputer() {
    computer.style.display = "block";

}


function checkWinner(i, num) {
    if (i === 0 && num === 0) {
        h1.innerHTML = "DRAW!"
    } else if (i === 0 && num === 1) {
        h1.innerHTML = "YOU LOSE!"
    } else if (i === 0 && num === 2) {
        h1.innerHTML = "YOU WIN!"
    } else if (i === 1 && num === 0) {
        h1.innerHTML = "YOU WIN!"
    } else if (i === 1 && num === 1) {
        h1.innerHTML = "DRAW!"
    } else if (i === 1 && num === 2) {
        h1.innerHTML = "YOU LOSE!"
    } else if (i === 2 && num === 0) {
        h1.innerHTML = "YOU LOSE!"
    } else if (i === 2 && num === 1) {
        h1.innerHTML = "YOU WIN!"
    } else {
        h1.innerHTML = "DRAW!"
    }

}

function refreshGame() {
    refresh.addEventListener("click", function() {
        location.reload();

    })
}
refreshGame();