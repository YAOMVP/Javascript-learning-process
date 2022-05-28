// let start = document.querySelector('.start');
// // let divs = document.querySelectorAll('div')



// start.addEventListener('click', function() {



//     function getrandomblue() {
//         return Math.floor(Math.random() * 16 + 1)
//     }
//     let num2 = getrandomblue()

//     rs.innerHTML = 'num1';

// });









//Button, red ball, and blue ball gets the event.
let start = document.querySelector(".start");
let szs = document.querySelectorAll(".sz");
let szb = document.querySelector(".szb")

//Define a random number function for the red ball and blue ball.
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
};




//Add click function for the button.
start.addEventListener("click", function() {
    //Loop each red ball 
    for (let i = 0; i < szs.length; i++) {
        //Call the function,Give a range of values(1-33), assign this random number to the random.
        let random = getRandom(1, 33);
        //Red ball[index] 's content is num1.
        szs[i].innerHTML = random; // rs.textContent = num1;

        //Call the function again,Give a range of values(1-16), assign this random number to the random.
        let num2 = getRandom(1, 16);
        //Blue ball's content is the random number.
        szb.innerHTML = random;
    }
})