##
Ссылки
1) [https://habr.com/ru/post/244041/](https://habr.com/ru/post/244041/)
2) 
## Занятие 1
##### [youtube](https://www.youtube.com/watch?v=_p4YM2VykZg)

##### HTML тэги
Тэг влияет не только на внешний вид элемента на странице, но ещё имеет и семантическое значение.
###### h1
`<h1></h1>` - Это тэег заголовка первого уровня. Он определяет тему страницы. Поисковыми системами считывается только первый заголовок первого уровня, а остальные игнорируются.
###### strong vs b
`<strong></strong>` - это выделение текста жирным. Семантически это более важная информация, что будет учитываться поисковыми движками. И при поиске на вашей странице он будет просматриваться в первую очередь.
`<b></b>` - выделение екста жирным. Семантически текст не выбелается. Поэтому в большинстве случаем более лучшим вариантом будет использование тэна `strong`.

Тэги можно поделить на блочные и строчные. Блочные тэги занимают всю строку:
```html
<h4>Это блочный тэг заголовка уровня 4, он занимает целую строку</h4>
```
или
```html
<p>Это текст внутри тэга параграфа. Он тоже блочный и занимает целую строку.</p>
```
Строчные тэги занимают часть строки и в одной строке может быть несколько тегов:
```html
<span>Имя:</span> 
<span>Арфений</span>
```
В содержимое двух строчных тэгов `span` hразместится в одной строке.

###### Атрибуты
У тэгов могут быть свойства, которые являются их атрибутами.
Например у тэга картинки `<img>` должен быть атрибут 
- `src`, указывающий на то, откуда брать картинку:
```html
<img src="https://tinypng.com/images/social/website.jpg" alt="панда ест бамбук" title="высплывающая подсказка">
```
- `alt` - для задания текста, который будет отображен вместо картинки, если она не загрузилась (альтернативный текст)
- `title` - всплывающая подсказка, которая появляется при наведении курсора на картинку
- `width` - ширина элемента
Очень хорошие совства для ширины:
```css
div {
    width: max_content; /* штирина по длине всех элементов */
    width: min-content; /* ширина самого длинного слова */
    width: 50%; /* ширина по родительскому элементу */
    height: inherit; /* высота наследуется у родительского элемента */
}
```


#### CSS стили
Можно подключить тремя способами в html файл
1) внещнее - в теге `head` 
```html
<link rel="stylesheet" href="./css/style.css">
```
2) inline - самые приоритетные
```html
<img style="width: 100px; padding: 2em;" src="./img/1.jpg">
```
1) внутренние  - в тэге `head`  
```html
<style>
    img {
        width: 100px;
    }
</style>
````
##### Способы назначения стилей определенным элементам
1) с помощью тэга
2) с помощью `class`
3) через `id`

Можно сделать элемент блочным, задав ему свойство `display: block;`.
Или
Можно поместить другие тэги внутрь блочного тэга `<div></div>`


### Карта развития 
[https://roadmap.sh/frontend](https://roadmap.sh/frontend)
### W3school на русском
[https://www.schoolsw3.com/](https://www.schoolsw3.com/)


##### Тест 1
1) Где нельзя открыть файл .html?
- * в фотошопе
- в блокноте
- в VS Code
- в браузере
  
2) Какой тег обозначает параграф?
- * p
- q
- п
- span
  
3) Как принято называть корневой файл?
- * index.html
- address.html
- main.js
- html.index

4) Какой атрибут есть у тега img?
- * alt
- shift
- prt
- ctrl

5) Какого атрибута нет у тега img?
- * like
- class
- width
- title

6) Какого способа подключения CSS не существует?
- * exline
- inline
- external
- internal

7) Какой тег подключает внешний CSS файл?
- * link
- href
- meta
- style

8) Какой из этих тегов строчный?
- * span
- h3
- p
- h6

9) Какой атрибут тега script указывает путь к файлу?
- * src
- path
- href
- link

10) Что из этого вызывает модальное окно с сообщением?
- * alert
- alarm
- warning
- error



## 2. Типы данных в JS




### Типы данных

### Семантика сайта и его структура
В мире где есть поиковые роботы очень важно чтобы вой сайт находили, поэтому его семантика очень важна.
##### header
##### main
##### footer
##### nav
##### section
 
Блок `div` не несёт семантического смысла, он просто говорит что это отдельный блок кода.


### Тест 2

1) "342" + 12 ?
- * "34212"
- 354
- NaN
- error

2) 576 / "8" ?
- * 72
- NaN
- "72"
- "576/8"

3) В какой тег поместить основной контент сайта?

- main
- head
- header
- content


## Урок 3. Базовые и логические операторы. Циклы и функции.
### [youtube](https://www.youtube.com/watch?v=KHLFTTA4KFc)

`=` - оператор присваивания 
`==` - нестрогое сравнение с риведением типов. Приведение типов всегда идёт в сторону строк или булевых значений.
```js
console.log(5 == "5"); // true
```
`===` - строгое сравнение.
```js
console.log(5 === "5"); //false
```

```js
console.log("abc" > 15); // false, приводится к строке и символы сравниваются по коду
```

```js
console.log(null == 0); // false
console.log(null < 0);  // false
console.log(null > 0); // false
console.log(null >= 0); // true
console.log(null <= 0); //true
```

```js
console.log(undefined == false);    // false
console.log(undefined < 0);         // false
console.log(undefined == 0);        // false
console.log(undefined <= 0);        // false
```

```js
console.log(typeof("15"));
console.log(Number("15"));
console.log(String(15)); // перевод в строку
console.log(15 + ""); // перевод числа в строку
console.log(Boolean(15));   // true
console.log(Boolean(0));    // false
console.log(Boolean(-15));  // true
console.log(+"15"); // унарный оператор перевода строку в число
console.log(+"-15");
```

```js
console.log(Boolean("")); //false
console.log(Boolean(" ")); // true

console.log(Boolean(null)); // false
console.log(!!15);  // быстрый перевод в boolean
```

`||` - логическое ИЛИ - возвращает первое правдивое
`&&` - логическое И - возвращает первое ложное


#### Условный оператор `if`
```js
if (boolean_condition) {
    //
} 
else if (bool_condition) {
    //
} 
else {
    //
}
```

#### Цикл `while`
Цикл с предусловием
```js
while (condition) {
    // do while condition is true
}
```
Цикл с постусловием - выполняется хотя бы раз
```js
do {
    // run and checker for condition is true
} while (condition)
```

#### Цикл for
```js
for (let i = 0; loop_condition; loop_step) {
    // repeated while loop_condition is true
}
```

```js
let arr = [1, 3, 5, 7, 11];
for (let i in arr) {
    console.log(i); // в i хранится индекс массива
}

for (let i of arr) {
    console.log(i);    // в i хранится сам элемент массива
}
```
Проход по свойствам объекта
```js
const obj = {
    'name': 'Sasha', 
    'age': 25,
    'city': 'Voronej'
}

for (key in obj) {
    console.log(key, obj[key]);
}
```

#### Тэг `input`
Важно изменять тип тэга инпут, на соотвествующий, т.к. анпример, на мобильном устройстве соответственно изменяется клавиатура.

### Полезные ссылки
1) [codewars](https://www.codewars.com)
2) [codingame](https://www.codingame.com/start)

### Test 3

# Занятие 4. Функции. `<button>`. Стилизация страницы.
## Функции
Это именованый кусок кода, который можно запускать сколько угодно раз по его имени.
Сначала надо описать функцию, т.е. её продекларировать. Есть несколько способов это сделать:
### Объявление функции

#### Declaration
Обычное объявление функции. Функция может быть вызвана и до объявления
```javascript
functionName(2, 4);

function functionName(num1, num2) { // имя функции и её аргументы
    console.log("arg1 + arg2 =",arg1 + arg2);
    return arg1+arg2; // возвращаемое функцией занчение
}
```
#### Expression
Создается аналогично переменной, но должна быть вызвана только после объявления.
```javascript
const functionName = (num1, num2) {
    // тело функции
};
```
#### Arrow функции
Во многом идентичны expression, но не имеют ссылки на `this`.
```javascript
const functionName => (num1, num2) {
    //
};
```
### Вызов функции
Для вызова функции пишетя её имя с параметрами, указанными в скобках.
Возвращаемое функцией значение можно присвоить переменной или вывести в консоль.
```javascript
functionName(num1, num2);
let result = functionName(1, 2); // присваиваем возвраащемое функцией значение переменной result
```
По умолчанию, функция возвращает значение `undefined`.
Если мы хотим получить от функции какое-либо занчение, то можно попросить её вернуть значение.
Возвращаемое значение можно получить при помощи ключевого слова `return`.
```javascript
function sum_function(a, b) {
    return a + b;
}
console.log(sum_function(2, 3)); // вернёт 5
```
Функция завершает совю работу после того, как она вернет значение на операторе `return`

## Игра
В нашей игре будут состояния и их надо описать.
Для этого лучше создать объект, который представляет состояние в игре.
```javascript
const gameState = {
    'taskInProcess': false, // решает ли пользователь задачу
    'rightAnswer': null
}
```
## flexbox

container| item
--|--
flex-direction | align-self
flex-wrap | flex-grow
flex-flow | flex-shrink
gap | flex-basis
justify-content | flex
align-items | order
align-content | 

# 5.
## Объектная модель
window |||
--|--|--
**DOM** | **BOM** | **JavaScript**
document object model | browser object model |  Объекты
document | navigation | Массивы
|| history |Функции 
|| screen |
| | location |

К BOM также отнсоится объект `conform` `alert` и `prompt`.

## `console.dir`
Подходит для вывода объектов в виде иерархического дерева.
`console.log()` используется для вывода простой текстовой информации, а `console.dir()` - для более подробной информации об объектах.
## `querySelector` `querySelectorAll`
Выбор элемента аналогично CSS селектору
```javascript
const element = document.querySelector('.mygame div');
```
`querySelector` вовзращвет первый подходящий элемент или `null`
`querySelectorAll` возвращает коллекцию из элементов подходящих под селектор.   

## Обработчики событий
```javascript
element.addEventListener(event, func);
element.removeEventListener(event, func);
```
`click`
`mousedown`/`mouseup`
`mouseover`/`mouseout`
`keydown`/`keyup`

## Данные перчичны, отображение вторично.
Все что отображается на странице, должно основываться на внутреннем состоянии.

## tabindex
При нажитии tab мы фокус переключается по элементам имеюшим свойство ввода. Порядок переключения определяется свосвом tabindex

1) Какого тега не существует?

- `link`
- *`href`
- `script`
- `title`

2) Выберите существующий тег

- *`style`
- `bottom`
- `output`
- `image`

3) Как задать стиль тегу <div> с классом info и id = "choosed"

- choosed {...}
- * .info {...}
- .div {...}
- #info {...}

4) 155 / 'a'
- `undefined`
- `NaN`
- `Infinity`
- `error`

1) 5 ** '2'

- error
- 10
- NaN
- *25

6) Какой оператор прибавляет к числу единицу?

- `||`
- * `++`
- `&&`
- `--`

7) С какого слова начинается цикл?

- `for`
- * `do` - неверно
- `while`
- `if`

8) `document.getElementById(“p1”).innerText = “Привет!”`

- удаляет элемент в HTML
- ищет элемент в HTML и удаляет в нём текст
- * ищет элемент в HTML и меняет в нём текст
- ищет элемент в HTML

9) Какую функцию нужно использовать, чтобы пользователь мог ввести свой текст (ответ) в окошке?

- alert
- confirm
- * prompt
- console

10) Что выведет консоль?

`const userText = prompt("give me number!")`

// пользователь отменил ввод

`console.log(userText - "7")`

- null-7
- * -7
- error
- NaN

11) Какую функцию нудно использовать, чтобы получить от пользователя булевое значение?

- `alert`
- `prompt`
- `console`
- * `confirm`
  
12) Что выведет консоль?

```javascript
const num = 21
const result = (!null) ? (21 % 5) : ( 21 % 3)
console.log(result)
```
- 4.2
- * 1
- 7
- 0

13) Что выведет консоль?
```javascript
console.log(getArr());
function getArr() {
    const result = [];
    for (let i = 0; i < 3; i++) {
        result.push(i + 5);
    }
    return result;
}
```
- error
- * [5, 6, 7]
- undefined
- ['05', '15', '25']

14) 

Что выведет консоль?

console.log(getRandomLessTen())

function getRandomLessTen() {

    const num = 0

    num += (Math.random * 10).toFixed()

    return num

}

- undefined
- случайное число от 0 до 1
- случайное число от 0 до 10
- error

15) Что выведет консоль?
```javascript
const getRandomAnswer = (question) => {

    return (Math.random() > 0.5) ? "YES!" : "No("

}

console.log("Всё будет хорошо?")
```
- "Всё будет хорошо?"
- "YES!"
- "No("
- undefined
