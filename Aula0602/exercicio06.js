let date = new Date();
let anoNovo = new Date(2026, 11, 31);

let diasFaltando = ((anoNovo - date) / (1000 * 60 * 60 * 24));


console.log("Faltam " + diasFaltando.toFixed(0) + " dias para o ano novo!");