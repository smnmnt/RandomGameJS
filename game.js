'use strict' 
const isNumber = function(num) {
    return !isNaN(parseFloat(num)) && isFinite(num) && num !=0;
};
const body = function() {
    let step = 10;
    const random = Math.round(Math.random()*100);
    console.log(random);
    const innerBody = function(){ 
        let question = prompt('Угадай число от 1 до 100');
        step--;
        if (question == random) {
            const oneMore = confirm('Поздравляю, Вы угадали!!!');
            if (oneMore) {
                body();
            } else {
                alert('Вы проиграли')
            }
        } else if (step < 1) {
            const oneMore = confirm('У Вас кончились попытки');
            if (oneMore) {
                body();
            } else {
                return
            }
        } else if (question === null) {
            alert('Игра окончена');
        } else if (!isNumber(question)) {
            alert('Введите число!');
            innerBody();
        } else if (question < random) {
            alert('Загаданное число больше, осталось ' + step + ' попыток');
            innerBody();
        } else if (question > random) {
            alert('Загаданное число меньше, осталось ' + step + ' попыток');
            innerBody();
        }
    }
    innerBody();
}
body();