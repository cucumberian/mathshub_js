'use strict';


const gameElements = document.getElementById('my_game').children;
const play_task = document.getElementById('play_task');
const input_number = document.querySelector(`#my_game>input[type="number"]`);
const play_button = document.querySelector('#my_game>input[type="button"]');
const game_answer = document.getElementById("game_answer");

play_task.innerText = "blablabla";

const random1 = Math.round(Math.random() * 10);    // генерация
const random2 = Math.round(Math.random() * 10);

const plus_or_minus = (Math.random() > 0.5);
let operation = (plus_or_minus) ? '+' : '-';

const task = `Сколько будет ${random1} ${operation} ${random2} ?`
play_task.innerText = task;


const playGame = (event) => {
    const input_value = input_number.value;
    if (input_value) {
        let correct_answer = (plus_or_minus) ? (random1 + random2) : (random1 - random2);
        if (correct_answer === Number(input_value)) {
            game_answer.textContent = "Правильно! " + `${random1} ${operation} ${random2} = ${input_value}`;
        }
        else {
            game_answer.textContent = "Неправильно! " + `${random1} ${operation} ${random2} /= ${input_value}`;
        }
    }
}
play_button.addEventListener('click', playGame);
