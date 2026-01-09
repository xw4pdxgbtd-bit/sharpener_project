const mainheading = document.getElementById('main-heading');
mainheading.textContent = 'Fruit World';
mainheading.style.color = 'orange';
const header = document.getElementById('header');
header.style.backgroundColor = 'green';
header.style.borderBottom = '3px solid orange'
const basketheading = document.getElementById('basket-heading');
basketheading.style.color = 'green';
const thanks = document.getElementById('thanks');
thanks.innerHTML = '<p>Please visit us again</p>';

const fruit = document.getElementsByClassName('fruit');
fruit[2].style.backgroundColor = 'yellow';

for (let i = 0; i < fruit.length; i++){
    fruit[i].style.fontWeight = 'bold';
}

const listitems = document.getElementsByTagName('li');

listitems[4].style.color = 'red';

for (let i = 0; i < listitems.length; i++){
    listitems[i].style.fontStyle = 'italic';
}