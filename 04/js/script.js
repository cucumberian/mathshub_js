'use strict';


const gameElements = document.getElementById('my_game').children;

const title = gameElements[0]; // = document.getElementById('game_header');
const userTask = gameElements[1];
const userAnswer = gameElements[2];
const btnGame = gameElements[3]; // = document.querySelector('#my_game>button');

const game_img = document.getElementById('game_image');

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
    title.innerText = "Игра NumFu";
    btnGame.innerText = "Начать игру";
    userAnswer.hidden = true; // делаем неактивным элемент ввода ответа
    cleanGameImage();   
    game_img.classList.add('start_pic');
};

function cleanGameImage () {
    game_img.classList = [];
    game_img.classList.add('game_pic');
}

function setGameImage () {
    if (gameState['taskInProcess']) {
        game_img.classList.add('question_pic');
    }
}

const gameState = {
    'taskInProcess': false,
    'rightAnswer': null
}

const toggleGameState = () => {
    gameState['taskInProcess'] = !gameState['taskInProcess'];
}

const getRandomNumIntRange = (min=0, max=100) => {
    const randomNum = Math.round(Math.random() * (max-min) + min);    // генерация
    return randomNum;
}


initGame();


const getTask = () => {
    // const randomNum1 = getRandomNumIntRange(0, 100);
    // const randomNum2 = getRandomNumIntRange(0, 100);

    // let symbol;
    // if (Math.random() > 0.5) {
    //     symbol = '+';
    // } 
    // else {
    //     symbol = '-';
    // }

    const symbol = (Math.random() > 0.5) ? '+' : '-';
    const task = `${getRandomNumIntRange(0, 100)} ${symbol} ${getRandomNumIntRange(0, 100)}`;
    gameState['rightAnswer'] = eval(task);
    return task;
}




btnGame.addEventListener('click', () => {
    let new_img_class = 'question_pic';
    if (!gameState.taskInProcess) {
        title.innerText = "Посчитайте";
        // генерация задачи и ответ
        // const task = getTask();
        //  показываю задачу пользователю
        userTask.innerText = getTask();
        userAnswer.hidden = false;
        userAnswer.placeholder = "ваш ответ";
        // меняю кнопку 
        btnGame.innerText = "проверить";
    }
    else {
        // сравнить ответ пользователя с правильным
        const isRight = +gameState['rightAnswer'] === +userAnswer.value; // нестрогое сравнение т.к. строка
        // Вывести правильное значение и результат
        userTask.innerText = `${userTask.innerText} = ${gameState['rightAnswer']}`;
        title.innerText = (isRight) ? "Правильно" : "Неверно";
        // смнеить название кнопки
        btnGame.innerText = "Еще раз";
        // очищение строки ввода
        userAnswer.placeholder = userAnswer.value;
        userAnswer.value = '';
        // изменяем картинку
        new_img_class = (isRight) ? 'win_pic' : 'lose_pic';
    }
    // меняю состояние
    toggleGameState();
    // изменение картинки
    cleanGameImage();
    game_img.classList.add(new_img_class)
});

function roll_dice() {
    gameState['rand1'] = Math.round(Math.random() * 10);
    gameState['rand2'] = Math.round(Math.random() * 10);
    gameState['operation'] = Math.random() > 0.5;
    gameState['rightAnswer'] = (gameState['operation']) ? gameState['rand1'] + gameState['rand2'] : gameState['rand1'] - gameState['rand2']
}

for(let i = 10; i < 35; i += 5) {

    console.log(i);

}