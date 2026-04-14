let prompt = require('prompt-sync')();
let peso = Number(prompt('Digite o peso (kg): '));
let altura = Number(prompt('Digite a altura (m): '));

let imc = peso / (altura * altura);
let classificacao;

if (imc < 18.5) classificacao = 'Abaixo do peso';
else if (imc < 25) classificacao = 'Normal';
else if (imc < 30) classificacao = 'Sobrepeso';
else classificacao = 'Obesidade';

console.log('IMC: ' + imc.toFixed(2));
console.log('Classificação: ' + classificacao);