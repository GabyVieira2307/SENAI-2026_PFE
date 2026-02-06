let prompt = require('prompt-sync')();
let nota1 = Number(prompt('Digite a primeira nota: '));
let nota2 = Number(prompt('Digite a segunda nota: '));;
let nota3 = Number(prompt('Digite a terceira nota: '));;
const media = function(){
    console.log('A média dos números é ' + (nota1+nota2+nota3)/3);
}
media()