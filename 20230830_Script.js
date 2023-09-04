console.log("Hola patico")
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('parrafito');
const pid = document.getElementsByClassName('pid');
const input = document.querySelector('input');

console.log(input.value)

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})

h1.innerHTML = 'patito <br> brr';
h1.innerText = 'patito <br> brr';
//console.log(h1.getAttribute('class'));
//h1.setAttribute('class', 'rojo');

h1.classList.add('azul');
h1.classList.remove('azul');

input.value = 'C.C';

const img = document.createElement('img');  
img.setAttribute('src', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FIMG_%2528company%2529&psig=AOvVaw3OjxL8O1V38--1_0FR5m7L&ust=1693933210371000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCIDH3Yy3kYEDFQAAAAAdAAAAABAD');
console.log(img);

pid.append(img);