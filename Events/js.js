let btn = document.querySelectorAll('button'),
    link = document.querySelector('a');
// btn[0].onclick = function() {
// alert('You pressed 1st button');
// };

// btn[0].onclick = function() {
//  alert('You pressed 1st button again');
// };
//     

// btn[0].addEventListener('click', function(event) {
//     console.log('Произошел троллинг: ' + event.type + ' на элементе ' + event.target);
// });

// link.addEventListener('click', function(event) {
//     event.preventDefault();
//     console.log('Произошел троллинг: ' + event.type + ' на элементе ' + event.target);
// });

btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log("Вышли");
    });
});

// btn[0].addEventListener('mouseenter', function() {
//     alert('Вы навели на первую кнопку');
// });