//primeiro tipo de funçao padrao
function saudacao(nome,sobrenome){
    console.log('Oii, genteee!!!'+ nome + '' + sobrenome);
}

saudacao(' Maria ', 'Eduarda');

// () significa parametros, o que eu quero saber mais

// funcao anonima 
const somar = function(num1, num2){
    console.log('A soma dos números é ' + (num1+num2));
}
somar(10,10)

// terceiro tipo - arrow function 
const subtrair = (num1, num2) => {
    console.log('A subtração dos números é ' + (num1-num2));
}
subtrair(10,5);

// terceiro tipo - arrow function com retorno
const subtrairComRetorno = (num1, num2) => {
    return num1-num2;
}
console.log('A subtração dos números é = ' + subtrairComRetorno(10,5));

