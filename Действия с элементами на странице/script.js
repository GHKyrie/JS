let box = document.getElementById('box'),
    btn = document.getElementsByTagName('button');
    circle = document.getElementsByClassName('circle');
    heart = document.querySelectorAll('.heart');
    oneHeart = document.querySelector('.heart');
    wrapper = document.querySelector('.wrapper');

box.style.width = "100px";
box.style.height = "100px";
box.style.length = "100px";
box.style.backgroundColor = "red";

for (let i = 0; i < circle.length; i++){
    circle[i].style.width = "75px";
    circle[i].style.height = "75px";
    circle[i].style.borderRadius = "100%";
}

btn[1].style.borderRadius = "100%";

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

heart.forEach(function(item, i, hearts) {
    item.style.width = "40px";
    item.style.height = "25px";
    item.style.borderRadius = "65%";
    item.style.backgroundColor = "black";
});

let div = document.createElement('div');
    text = document.createTextNode('Тут был я');

div.classList.add('black');
div.style.width = "100px";
div.style.height = "100px";
div.style.backgroundColor = 'yellow';

// document.body.appendChild(div);
// wrapper.appendChild(div);

// div.innerHTML = '<h1>Hello World!</h1>';

div.textContent = 'Hello World!';

document.body.insertBefore(div, circle[0]);
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]);

console.log(div);