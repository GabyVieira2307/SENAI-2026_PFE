let prompt = require('prompt-sync')();

function calcular(numer1, numer2, operacao) {
    let resultado;

    if (operacao === '+') {
        resultado = numer1 + numer2;
    } else if (operacao === '-') {
        resultado = numer1 - numer2;
    } else if (operacao === '*') {
        resultado = numer1 * numer2;
    } else if (operacao === '/') {
        if (numer2 !== 0) {
            resultado = numer1 / numer2;
        } else {
            return 'Erro: divisão por zero';
        }
    } else {
        return 'Operação inválida';
    }

    return resultado;
}

let numer1 = Number(prompt('Digite um número: '));
let numer2 = Number(prompt('Digite outro número: '));
let operacao = prompt('Digite a operação (+, -, *, /): ');

let resultado = calcular(numer1, numer2, operacao);

console.log('Resultado:', resultado);
