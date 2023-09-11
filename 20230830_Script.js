const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const formulario = document.querySelector('#tablita');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const presult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
 //console.log({event});
 event.preventDefault();   
 const sumainputs = input1.value + input2.value;
 presult.innerText = "resultado: " +sumainputs;
} 