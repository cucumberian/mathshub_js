# Ссылки
## от преподавателя
- [w3schools](https://www.w3schools.com/)
- [аналог w3school на русском](https://www.schoolsw3.com/)
- [карта развития](https://roadmap.sh/frontend)
- [learn.javascript.ru ](https://learn.javascript.ru/)
- [developer.mozilla.org](https://developer.mozilla.org/ru/)
- [codewars](https://www.codewars.com/)
- [codingame](https://www.codingame.com/start)
- [Выразительный JavaScript: Обработка событий](https://habr.com/ru/post/244041/)
- [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/)
## c discord
- [Интерактивные онлайн-курсы HTML Academy](https://htmlacademy.ru/)
- [codecademy](https://www.codecademy.com/)
- [htmlbook.ru - учебник по html, css, js, git](http://htmlbook.ru/)
- [shultais.education css3](https://shultais.education/lms/courses/html5-css3-intro)
- [shultais.education js](https://shultais.education/lms/courses/javascript)
- [flexbox froggy](http://flexboxfroggy.com/#ru)
- [Stepik: 1](https://stepik.org/course/38218/promo)
- [stepik: 2](https://stepik.org/course/52164/promo)
- [аналог википедии для js-разработчиков ](https://learn.javascript.ru/)
- [Freely available programming books. By EbookFoundation](https://github.com/EbookFoundation/free-programming-books/blob/main/books/free-programming-books-ru.md)
- [https://codepen.io/](https://codepen.io/)
- [Учебник: создаем и раскручиваем сайт самостоятельно](https://site-do.ru/css/)
- [Stepik: https://stepik.org/82108](https://stepik.org/82108)
- [Программирование начального уровня. JavaScript. https://stepik.org/70099](https://stepik.org/70099)
- [Хабр. Полное руководство по Flexbox](https://habr.com/ru/post/467049/)
- [Как работает CSS Flexbox: наглядное введение в систему компоновки](https://tproger.ru/translations/how-css-flexbox-works/)
- [Stepik: JavaScript для начинающих](https://stepik.org/course/2223/syllabus)
- [Если хочется пойти по академическому пути изучения JS, а также погрузиться в нюансы асинхронности, рекомендую видео-лекции на youtube Тимура Шемсединова. Основы программирования с примерами на JavaScript (1 часть)](https://youtube.com/playlist?list=PLHhi8ymDMrQZad6JDh6HRzY1Wz5WB34w0)
- (Чтобы поупражняться неплох https://www.freecodecamp.org/ Причем там не только фронтэнд, но и смежные темы (React, SQL и пр.))[https://www.freecodecamp.org/]

# Занятие 1
[youtube](https://www.youtube.com/watch?v=_p4YM2VykZg)

## HTML тэги
Тэг влияет не только на внешний вид элемента на странице, но ещё имеет и семантическое значение.
### h1
`<h1></h1>` - Это тэег заголовка первого уровня. Он определяет тему страницы. Поисковыми системами считывается только первый заголовок первого уровня, а остальные игнорируются.
### strong vs b
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

## Атрибуты
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


## CSS стили
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
```

### Способы назначения стилей 
Способы назначения стилей определенным слудующими элементам
1) с помощью тэга
2) с помощью `class`
3) через `id`

Можно сделать элемент блочным, задав ему свойство `display: block;`.
Или
Можно поместить другие тэги внутрь блочного тэга `<div></div>`

# Занятие 2. Типы данных в JS

## Семантика сайта и его структура
В мире где есть поиковые роботы очень важно чтобы вой сайт находили, поэтому его семантика очень важна.
- header
- main
- footer
- nav
- section
 
Блок `div` не несёт семантического смысла, он просто говорит что это отдельный блок кода.


# Занятие 3. Базовые и логические операторы. Циклы и функции.
[youtube](https://www.youtube.com/watch?v=KHLFTTA4KFc)

## Операторы
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


## Условный оператор `if`
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

## Цикл `while`
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

## Цикл for
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

## Тэг `input`
Важно изменять тип тэга инпут, на соотвествующий, т.к. анпример, на мобильном устройстве соответственно изменяется клавиатура.


# Занятие 4. Функции. `<button>`. Стилизация страницы.
## Функции
Это именованый кусок кода, который можно запускать сколько угодно раз по его имени.
Сначала надо описать функцию, т.е. её продекларировать. Есть несколько способов это сделать:

### Declaration
Обычное объявление функции. Функция может быть вызвана и до объявления
```javascript
functionName(2, 4);

function functionName(num1, num2) { // имя функции и её аргументы
    console.log("arg1 + arg2 =",arg1 + arg2);
    return arg1+arg2; // возвращаемое функцией занчение
}
```
### Expression
Создается аналогично переменной, но должна быть вызвана только после объявления.
```javascript
const functionName = (num1, num2) {
    // тело функции
};
```
### Arrow функции
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

# Занятие 5. 
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

# Занятие 6. Запросы на сервер. Обработка данных. Github Pages
Некоторые операции работают в асинхроном режиме.
## Асинхронный код
В javascript есть основной поток, в котором выполняется скрипт. Все асинхронные функции выпадают их этого потока и выполняются одновеменно с потоком. 
Особенность асинхронного кода в том, что он выполняется только после синхроного кода.

### `setTimeout(func, ms)`
Однократно запускает указанныую функцию через указанный интервал времени.
`...func`
### `setInterval(func, ms)`
Постояно запускает указанную `func` через указанный промежуток времени:
`...func...func...func...func... и т.д.`
Чтобы остановить интервал надо:
```javascript
const timeIsOut = () => {console.log('Время вышло!');}
const time_out = setInterval(timeIsOut, 3000); // запусе интервала
//
clearInterval(time_out); // остановка интервала
```

Из-за того, что асинхронный код запускается после обычного, в следующем кода сообщение ASYNC выведется только после того, как пользователь нажмет соответствующую кнопку.
```javascript
setTimeout(() => {console.log('ASYNC');}, 0); 

let isB = true;
while (isB) {
    isB = confirm('wait?');
    console.log('ok');
}
```
В javascript есть запросы к серверу fetch. Специальные сигналы CRUD, котоыре регулируют эти запросы.
Для теста есть сайт https://jsonplaceholder.typicode.com/
## json placeholder jsonplaceholder.typicode.com/

## `fetch` и `json()` метод
### chatgpt
Обычно, когда мы делаем запрос на сервер с помощью объекта fetch, сервер возвращает нам ответ в формате Response. Чтобы получить данные из этого ответа, мы используем методы объекта Response, такие как text(), blob(), arrayBuffer() и formData().

Однако, когда сервер возвращает нам данные в формате JSON, мы можем использовать метод .json(), чтобы получить эти данные в виде JavaScript-объекта.

Например, если мы хотим получить список пользователей в формате JSON, мы можем сделать следующий запрос:
```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    // Обрабатываем данные
  });
```
В этом примере мы отправляем запрос на сервер с помощью fetch(), получаем ответ в виде Response, затем вызываем метод .json() на этом объекте Response, чтобы получить данные в виде JavaScript-объекта. Затем мы обрабатываем эти данные в функции обратного вызова в методе .then().

Таким образом, метод .json() позволяет получить данные в формате JSON и использовать их в JavaScript-коде.

### `JSON.stringify(body)`
Можно использовать JSON.stringify(data) для обработки полученных даных и преобразования их в строку.
```javascript
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    // Обрабатываем данные
  });
```
#### chatgpt
JSON.stringify() - это метод JavaScript, который преобразует объекты JavaScript в формат JSON (JavaScript Object Notation), то есть в строку, которую можно передать по сети или сохранить в файл.

Метод JSON.stringify() принимает один обязательный аргумент - объект, который нужно преобразовать в формат JSON. Этот объект может содержать строки, числа, логические значения, массивы, объекты или null.

Метод JSON.stringify() также принимает второй необязательный аргумент, который может быть функцией или массивом. Этот аргумент называется replacer и позволяет выбирать только те свойства объекта, которые нужно преобразовать в формат JSON.
```javascript
const person = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown',
    state: 'CA'
  }
};

const json = JSON.stringify(person, ['name']);
console.log(json);
// {"name":"John"}
```
## `then`
### chatgpt
then() - это метод JavaScript, который применяется к промисам (Promise) и используется для обработки результатов асинхронных операций.

Когда мы вызываем асинхронную функцию, она возвращает промис, который представляет собой обещание о том, что результат будет получен в будущем. Метод then() позволяет нам обработать этот результат, когда он будет готов.

Метод then() принимает два аргумента: функцию обработки успешного результата (онеFulfilled) и функцию обработки ошибки (onRejected). Обе функции являются необязательными.

Когда промис выполняется успешно, функция обработки успешного результата (onFulfilled) вызывается с результатом выполнения промиса в качестве единственного аргумента. В противном случае, когда промис завершается с ошибкой, вызывается функция обработки ошибки (onRejected), которая принимает объект ошибки в качестве аргумента.

Вот пример использования метода then() с промисом:
```javascript
function getData() {
  return fetch('https://api.example.com/data')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
}
```
В этом примере мы вызываем асинхронную функцию fetch(), чтобы получить данные из API. Затем мы вызываем метод then(), чтобы обработать результаты. Если ответ от сервера не был успешным, мы генерируем ошибку, используя оператор throw. Если ответ был успешным, мы парсим его в формат JSON, используя метод response.json(), и выводим его содержимое в консоль.

В случае ошибки в любой точке цепочки обработки результатов, метод catch() позволяет обработать эту ошибку, используя функцию обработки ошибки (onRejected).

## CRUD
В методах create put и patch кроме url передаётся ее и объект в котором содержатся данные

## `get` vs `post`
по умолчанию оспользуется метод `get`
Запос на создание контента может выглядеть следующим образом:
```javascript
fetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
        method: 'post',
        body: JSON.stringify({
            title: 'foo title',
            body: 'foo text main body',
            userId: 1
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }
)
    .then(response => {return response.json()})
    .then(data => console.log(JSON.stringify(data)));
```
В результате возвращается сервером ответ, например ответ содержащий это тело и присвоенный посту id.

## GitHub Pages
Управление через настройки репозитория:
Settings -> Pages

## Позиционирование: `position`
По умолчанию `static`:
```css
postition: static;
```
позиционирование | описание
--|--
`absolute`| позиционируется относительно родиткельского элемента и нужно родительскому элементу дать `relative`
`fixed` | позиционируется относительно экрана 
`relative` | 
`static` | занимает пространство и другие элементы на него не залезают
`sticky` |

`absolute` и `fixed` имеют другую механику. Они могут налезать на другие элементы страницы.
Чтобы они не залезали надо дать маргины налезающим элементам.
Расположение можно регулировать с помо свойств `top` `left` `right` `bottom` определяюще отступы от соотвествующих элементов. В случае с `fixed` это края браузеного постранства в котором отображается страница.

# Hints
## Создание объектов
при создании объектов можно воспольщоваться более компактной формой записи, если переменные со значениями свойств совпадают с названиями полей:
```javascript
const body = {
    title: title,
    body: body,
    userId: userId,
};
```
можно заменить на
```javascript
const body = {
   title,
   body,
   userId, 
};
```
## Запятые в последней строчке объекта
При описании объекта ставьте запятие в последней строчке, чтобы при добавлении нового свойства в объект в гитхабе изменялась или мерджилось на 1 строчку меньше.

## Семантика сайта и его структура
В мире где есть поиковые роботы очень важно чтобы вой сайт находили, поэтому его семантика очень важна.
- header - хэдер
- main - блок с основной информацией
- footer - футер
- nav - блок с навигацией по сайту
- section - смысловой раздел сайта
Блок `div` не несёт семантического смысла, он просто говорит что это отдельный блок кода.
