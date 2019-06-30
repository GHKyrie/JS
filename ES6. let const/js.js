let name = "Ivan",
    age = 19,
    mail = 'ex@mail.ru';

document.write(`Пользователю ${name} ${age} лет. Его почтовый адрес: ${mail}`);

function makeArray() {
    var items = [];

    for (let i = 0; i < 10; i++){
        var item = function() {
            console.log(i);
        };
        items.push(item);
    }

    return items;
}

var arr = makeArray();

arr[1]();
arr[3]();
arr[7]();