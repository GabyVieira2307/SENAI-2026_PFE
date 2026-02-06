const prompt = require('prompt-sync')();
let numerodecimal = Number(prompt("Digite um número com casas decimais:"));

let arredondado = Math.round(numerodecimal);
console.log("Número arredondado:", arredondado);