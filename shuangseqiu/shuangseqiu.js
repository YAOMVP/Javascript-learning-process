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
let szb = document.querySelector(".szb");
let random = 0;
let num = 0;
let array = [];


//Define a random number function for the red ball and blue ball.
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
};


/* for (let h = 1; h < 7; h++) {
    for (let j = h - 1; j < 6; j++) {
        if (array[j] !== array[h]) {
            array.push(random)
        } else {
            num = getRandom(1, 33);
            array.push(num);

            console.log(array);
        };
    };
}; */


// random = getRandom(1, 33);
// array.push(random);
// num = getRandom(1, 33);

/* for (let i = 0; i < 6; i++) {
    random = getRandom(1, 33);
    num = getRandom(1, 33);

    array.push(random);
    array[i] = random
        // num = getRandom(1, 33);
    while (random !== num) {
        array[i] = random
        break
    }
}
console.log(array); */

// for (let i = 0; i < 6; i++) {
//     random = getRandom(1, 33);
//     num = getRandom(1, 33);
//     while (random !== num) {
//         array[i] = random
//         break
//     }
// };
// array.push(random)

// console.log(array)
function getArray() {
    array = []; //初始化数组
    for (var i = 0; i < 6; i++) {
        do {

            var random = getRandom(1, 33);

        } while (array.includes(random)) //产生随机数，如果是之前没有产生过的，则存入数组array中，如果存在过，则继续循环产生随机数，直到产生新的数， 把这个新的随机数赋值给random
        array.push(random); //把random 存进数组中
    }

    // 利用选择排序把生成的数组排序
    for (var j = 0; j < 5; j++) {
        for (var k = j + 1; k < 6; k++) {
            if (array[j] > array[k]) {
                var t = array[j];
                array[j] = array[k];
                array[k] = t;
            }

        }
    }
    // 利用循环，把array数组中的每一个元素依次赋值给 DOM 的 .szs的innerHTML中
    for (var l = 0; l < 6; l++) {
        szs[l].innerHTML = array[l];
    }

    //直接产生篮球随机数
    szb.innerHTML = getRandom(1, 16);
}

//构建按钮事件调用getArray函数
start.addEventListener("click", getArray);


//Add click function for the button.
// start.addEventListener("click", function() {
//     //Loop each red ball 
//     for (let i = 0; i < szs.length; i++) {
//         //Call the function,Give a range of values(1-33), assign this random number to the random.


//         //Red ball[index] 's content is num1.
//         szs[i].innerHTML = random; // rs.textContent = num1;


//         //Call the function again,Give a range of values(1-16), assign this random number to the random.
//         random = getRandom(1, 16);
//         //Blue ball's content is the random number.
//         szb.innerHTML = random;
//     }
// })