const prompt = require('prompt-sync')();
let anodenascimento = Number(prompt("Qual seu ano de nascimento:"));
let dataatual = new Date();

let idade = dataatual.getFullYear() - anodenascimento;
console.log("Idade:", idade);