function hello() {
    console.log('Hello!');
}

hello();

function hi() {
    console.log('Hi!');
}

hi();

let arr = [1,15,4,20,50],
    i = arr.sort(compareNum); //сравнивает как строки

function compareNum(a,b) {
    return a-b;
}
console.log(arr);