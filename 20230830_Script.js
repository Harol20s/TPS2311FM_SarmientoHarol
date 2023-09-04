console.log("Hola patico")
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('parrafito');
const pid = document.querySelector('pid');
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
img.setAttribute('src', 'https://cdn-images-1.medium.com/max/1600/1*rrRcaZKZsjerUveQqTSx7A.png');
console.log(img);
p.innerHTML = img;
// pid.append(img);