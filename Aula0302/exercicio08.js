let prompt = require('prompt-sync')();
let nota = Number(prompt('Digite a nota (0 a 100): '));
let conceito;

if (nota >= 90) conceito = 'A';
else if (nota >= 80) conceito = 'B';
else if (nota >= 70) conceito = 'C';
else if (nota >= 60) conceito = 'D';
else conceito = 'F';

console.log('Conceito: ' + conceito);