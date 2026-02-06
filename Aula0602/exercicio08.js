const prompt = require('prompt-sync')();
let numerodousuario = Number(prompt("Digite um número:"));
let numeroaleatoriogerado = Math.round(Math.random() * 10);

console.log("Número aleatório:", numeroaleatoriogerado);

if (numerodousuario === numeroaleatoriogerado) {
  console.log("Os números são iguais");
} else {
  console.log("Os números são diferentes");
}