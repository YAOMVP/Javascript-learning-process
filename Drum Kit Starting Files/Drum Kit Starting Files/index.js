let btns = document.querySelectorAll(".drum");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        // this.style.color = "#fff";
        playSound(this.innerHTML);
        buttonAnimation(this.innerHTML)

        this.addEventListener("keyup", function(e) {
            playSound(e.key);
            console.log(e.key);
            buttonAnimation(e.key);
        })
    })
}

//只有key的值和case的值相等才会执行switch里边的代码

function playSound(key) {
    switch (key) {
        case "w":
            let tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;

        case "a":
            let tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            let tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            let tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            let snare = new Audio("./sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            let crash = new Audio("./sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            let kick = new Audio("./sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            alert("Please type: w a s d j k l");
            break;
    }
}

function buttonAnimation(k) {
    let activeButton = document.querySelector(`.${k}`);
    activeButton.classList.add("pressed");
    activeButton.style.color = "#fff";
    setTimeout(function() {
        activeButton.classList.remove("pressed");
        activeButton.style.color = "#DA0463";
    }, 100);

}