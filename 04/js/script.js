'use strict';


const gameElements = document.getElementById('my_game').children;

const title = gameElements[0]; // = document.getElementById('game_header');
const userTask = gameElements[1];
const userAnswer = gameElements[2];
const btnGame = gameElements[3]; // = document.querySelector('#my_game>button');


let random1 = Math.round(Math.random() * 10);    // генерация
let random2 = Math.round(Math.random() * 10);



/* 
ИГРА
Нажав на кнопку начать игра запускается.
Генерируется задача.
Пользователь может ввести ответ

Пишется вопрос и кнопка Начать принимает вид "Проверить"
Появляется возможность вводить ответ

Когда пользователь нажал кнопку проверить мы сравниваем ввод ползователя с ответом
Надо вывести результат и правильное значение. Также сменить кнопку на "начать заново"
*/

const initGame = () => {
    title.innerText = "Игра";
    btnGame.innerText = "Начать игру";
    userAnswer.disabled = true; // делаем неактивным элемент ввода ответа
};

initGame();


const gameState = {
    'taskInProcess': false,
    'rightAnswer': null,
    'rand1': null,
    'rand2': null,
    'operation': null
}

btnGame.addEventListener('click', () => {
    gameState['taskInProcess'] = !gameState['taskInProcess'];

    if (gameState['taskInProcess']) { // если игра началась
        roll_dice();
        let operation_text = (gameState['operation']) ? '+' : '-';
        let game_task = `Сколько будет ${gameState['rand1']} ${operation_text} ${gameState['rand2']} ?`;
        btnGame.innerText = "Ответить";
        title.innerText = game_task;
        userAnswer.disabled = false;    // активируем поле ввода
    }
    else { // если игра уже запущен и надо проверить ответ
        let answer = Number.parseInt(userAnswer.value);
        title.innerText = 'Неверно!';
        if (answer === gameState['rightAnswer']) {
            title.innerText = "Правильно!";
        }
        userAnswer.value = '';
        userAnswer.disabled = true;
        btnGame.innerText = 'Начать заного';

    }
});

function roll_dice() {
    gameState['rand1'] = Math.round(Math.random() * 10);
    gameState['rand2'] = Math.round(Math.random() * 10);
    gameState['operation'] = Math.random() > 0.5;
    gameState['rightAnswer'] = (gameState['operation']) ? gameState['rand1'] + gameState['rand2'] : gameState['rand1'] - gameState['rand2']
}