'use strict';


const gameElements = document.getElementById('my_game').children;

const title = gameElements[0]; // = document.getElementById('game_header');
const userTask = gameElements[1];
const userAnswer = gameElements[2];
const btnGame = gameElements[3]; // = document.querySelector('#my_game>button');

const game_img = document.getElementById('game_image');

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
    const symbol = (Math.random() > 0.5) ? '+' : '-';
    const task = `${getRandomNumIntRange(0, 100)} ${symbol} ${getRandomNumIntRange(0, 100)}`;
    gameState['rightAnswer'] = eval(task);
    return task;
}


const play_game = (event) => {
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
}

const answer_key = (event) => {
    if (event.keyCode === 13){
        play_game();
    }
    else if (event.key === 'Escape') {
        event.target.blur();
    }


}

btnGame.addEventListener('click', play_game);
userAnswer.addEventListener('keydown', answer_key);

const chosed_block = document.querySelector('div.chosed_block');
const blocks_counter = chosed_block.querySelector('p>span');
const blocks_container = chosed_block.children[2];
const blocks = blocks_container.querySelectorAll('div');


const choosedState = {
    'countElements': 0,
    'changeCount': (value=0) => {
        this['countElements'] += value;
        blocks_counter.innerText = this['countElements'];
    },
    'setCount': (value=0) => {
        this['countElements'] = value;
        blocks_counter.innerText = this['countElements'];
    }
}


function getActiveBlocksNum() {
    let counter = 0;
    for (let element of blocks) {
        if (element.classList.contains('chosen')) {
            counter ++;
        }
    }
    return counter;
}

function getActiveBlocksValue() {
    let sum = 0;
    for (let element of blocks) {
        if (element.classList.contains('chosen')) {
            sum += Number.parseInt(element.innerText);
        }
    }
    return sum;
}

function block_container_click(event) {
    if (event.target != event.source) {
        console.log(event.target.innerText);
        event.target.classList.toggle('chosen');
    }
}

function block_click (event) {
    console.log(blocks_counter.innerText);
    event.target.classList.toggle('chosen');
    choosedState.setCount(getActiveBlocksValue());
}





blocks.forEach((element, index, array) => {    
    element.addEventListener('click', block_click);
});



console.log(getRandomLessTen());

function getRandomLessTen() {
    const num = 0;
    num += (Math.random * 10).toFixed();
    return num;
}