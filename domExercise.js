// DOM Exercise

// 1
const portillos = document.getElementById('portillos');

// 2
const images = document.getElementsByTagName('img');

// 3
const center = document.getElementsByClassName('center');

// 4
const ginosEast = document.querySelector('#ginos');

// 5
document.querySelectorAll('p');

// 6a
const h1 = document.querySelector('h1');

// 6b
document.innerText("Matt's Favorite Places to Eat in Sweet Home Chicago!")

// 7a
const others = document.querySelector('#others')

// 7b
others.innerHTML = `<h3> Other Favorites </h3>`;

// 8a
const aTag = document.querySelector('a');

// 8b
aTag.href = `https://www.chicagofoodplanet.com/chicago-food/`;

// 9
h1.classList.add('background', 'text-color');

// 10
h1.classList.remove('background');

// 11a
document.createElement('h4');

// 11b
document.innerText('CHICAGO: a great place to eat');

// 11c
const body = document.querySelector('body');
body.prepend(h4);

// 12a
document.createElement('h5');

// 12b
h5.innerText = "See you in the Windy City Sometime!";

// 12c
aTag.insertAdjacentElement('afterend', h5);

// 13
const jaysBeef = document.querySelector('li');
jaysBeef.remove();