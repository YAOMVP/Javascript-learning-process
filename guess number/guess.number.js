//方法1：开节流阀  先声明一个变量isCorrect = false
while (true) {
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let random = getRandom(1, 3);
    alert('我手里有一个1-3之间的数字，请您猜一猜。答对有奖励哦！请输入您猜的数字，您一共有3次机会：');

    let i = 0;
    let isCorrect = false;


    while (i < 3) {
        i++;
        let num = +prompt(`这是您的第${i}次机会，请输入一个数字`);
        if (random > num && i != 3) {
            alert('猜小了，再猜');
        } else if (random < num && i != 3) {
            alert('猜大了，再猜');
        } else if (random === num) {
            alert('恭喜你，答对了');
            isCorrect = true;
            // 答对了要退出 break
            // i === 3
            break;
        }
    }
    if (isCorrect === false) {
        alert("不好意思，您没答对，答案是：" + random);
    }
}


/* //方法2： 猜了2次机会，第3次还没有答对 
while (true) {
    function getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    let random = getRandom(1, 3);
    alert('我手里有一个1-3之间的数字，请您猜一猜。答对有奖励哦！请输入您猜的数字，您一共有3次机会：');

    let i = 0;

    while (i < 3) {
        i++;
        let num = +prompt(`这是您的第${i}次机会，请输入一个数字`);
        if (random > num && i != 3) {
            alert('猜小了，再猜');
        } else if (random < num && i != 3) {
            alert('猜大了，再猜');
        } else if (random === num) {
            alert('恭喜你，答对了');
            break;
        } else {
            alert("不好意思，您没答对，答案是：" + random);
            break;
        }


    }
} */