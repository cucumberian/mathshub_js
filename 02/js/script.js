// string

const str1 = 'Greetings';
const str2 = "Text";
const str3 = `Reverse`;

console.log(str1, typeof(str1));
console.log(str2, typeof(str2));
console.log(str3, typeof(str3));

// number
console.log(80 + '10'); //8010
console.log(80 - '10'); // 70

//если чтрока ско=ладывается  числом, то она складывается как строка
console.log(7 + 8 + "5"); // 155, см приоритет операция 7 + 8 сначала, потом 15 + "5"

console.log(15 * 'a'); // NaN - приводится к типу числа и получается NaN
console.log(17 / 0); // Infinity - 
// от (2**53 - 1)  до (2**53 + 1)


//BIGINT - большое целое число
// 
const bigint = 12312412n;   // обозанчение большого числа
console.log(99999999999999999);
console.log(99999999999999999n);

// boolean
// true / false

// NULL
let empty = null;
console.log(typeof(empty)); // ошибка которая уже принята .. object


// undefined
let box;
console.log('box:', box, typeof(box));
box = undefined; // аналогично
console.log('box:', box, typeof(box));


// symbol
// нечто уникальное, созданы чтобы быть уникальными
const uniq = Symbol('id'); // обхявление символа id
const uniq2 = Symbol('id');
console.log('symbol:', uniq, uniq === uniq2);

// Object
const obj = {
    "name": "Sasha",
    'age': 23,
    'isHappy': true,

};
console.log('object:', obj);
console.log(obj.name);
console.log(obj['name']);

obj['job'] = "Google";
console.log(obj);


// array
const arr = ["Аня", 24, true];
console.log(arr);
arr[3] = 'facebook';
console.log(arr);
console.log(arr[1], arr[0]);