let box = document.querySelector('.box'),
    btn = document.querySelector('button');

let width = box.scrollWidth,
    height = box.scrollHeight;

console.log(width);
console.log(height);
console.log(box.getBoundingClientRect().left);

console.log(document.documentElement.clientWidth);
console.log(document.documentElement.clientHeight);
console.log(document.documentElement.scrollTop);


btn.addEventListener('click', function() {
    box.style.height = 300 + 'px';
    box.style.width = 250 + 'px';
});

scrollBy(0, 200);
scrollTo(0, 200);