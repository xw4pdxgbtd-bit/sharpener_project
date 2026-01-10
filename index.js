const para = document.createElement('p');
const paraText = document.createTextNode('Total Fruits:4');
para.appendChild(paraText);
const divs = document.getElementsByTagName('div');
const secondDiv = divs[1];
secondDiv.appendChild(para);
const fruits = document.querySelector('.fruits');
secondDiv.insertBefore(para, fruits);

const head = document.createElement('h3');
const heading = document.createTextNode('Buy high quality organic fruits online');
head.style.fontStyle = 'italic';
head.appendChild(heading);
const firstDiv = divs[0];
firstDiv.appendChild(head);
para.id = 'fruits-total';