const prompt = require('prompt-sync')();
let idade = Number(prompt('Digite sua idade: '))
if(idade>=16||idade>18){
   console.log('Você poderá pegar livros!');
}else{
   console.log('Você não pode pegar livros!');
}

//operadores logicos - && and - || ou - ! not