const mainheading = document.querySelector('#main-heading');
mainheading.style.textAlign = 'right';

const basketheading = document.querySelector('#basket-heading');
basketheading.style.color = 'brown';

const fruits = document.querySelector('.fruits');
fruits.style.backgroundColor = 'gray';
fruits.style.padding = '30px';
fruits.style.margin = '30px';
fruits.style.width = '50%';
fruits.style.borderRadius = '5px';
fruits.style.listStyleType = 'None';

const fruit = document.querySelectorAll('.fruit');
for (let i = 0; i < fruit.length; i++){
    fruit[i].style.backgroundColor = 'white';
    fruit[i].style.padding = '10px';
    fruit[i].style.margin = '10px';
    fruit[i].style.borderRadius = '5px';
}

const evenfruit = document.querySelectorAll('.fruit:nth-child(even)');
for (let i = 0; i < evenfruit.length; i++){
    evenfruit[i].style.backgroundColor = 'brown';
    evenfruit[i].style.color = 'white';

}