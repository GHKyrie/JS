//Существует семь типов данных
var number = 5; //число
var string = "Hello";//строка
var sym = Symbol(); //символ
var boolean = true; //логическое значение
null; //null
undefined; //undefined
var obj = {}; //объект

console.log(4/0);
console.log('string'*9);

let smth;
console.log(smth);

let person = {
    name: "John",
    age: 25,
    isMarries: false
};

console.log(person["name"]);

let arr = ['plum.png','orange.jpg','apple.bmp'];

console.log(arr[0]);

//alert('Jello');

//let answer = confirm("Are you sure?");

//console.log(answer);

let answer = prompt("Are you 18?", "Yes"); 
//вся информация от пользователя ВСЕГДА строка
console.log(typeof(null));

