let prompt = require('prompt-sync')();

let n1 = Number(prompt('Digite um número: '));
let n2 = Number(prompt('Digite outro número: '));

let soma = n1+n2;
console.log("A soma dos números escolhidos é = " + (soma));
let subtracao = n1-n2;
console.log("A subtração dos números escolhidos é = " + (subtracao));
let multiplicacao = n1*n2;
console.log("A multiplicação dos números escolhidos é = " + (multiplicacao));
let divisao = n1/n2;
console.log("A divisão dos números escolhidos é = " + (divisao));
