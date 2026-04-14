const prompt = require('prompt-sync')();
let permissao1cracha = (prompt('Você possui crachá? (s/n) '))
let permissao2uniforme = (prompt('Você está de uniforme? (s/n) '))
let permissao3monitor = (prompt('Você é monitor? (s/n) '))
let permissao4cadastro = (prompt('Você possui cadastro? (s/n) '))

if (permissao1cracha == "s") {
    permissao1cracha = true;
} else if (permissao1cracha == "n") {
    permissao1cracha = false;
} if (permissao2uniforme == "s") {
    permissao2uniforme = true;
} else if (permissao2uniforme == "n") {
    permissao2uniforme = false;
} if (permissao3monitor == "s") {
    permissao3monitor = true;
} else if (permissao3monitor == "n") {
    permissao3monitor = false;
} if (permissao4cadastro == "s") {
    permissao4cadastro = true;
} else if (permissao4cadastro == "n") {
    permissao4cadastro = false;
}

if (permissao1cracha == true && permissao2uniforme == true || permissao3monitor == true){
    if (permissao4cadastro == true){
        console.log("Entrada Permitida");
    } else {
        console.log("Entrada Negada");
    }
} else {
    console.log("Entrada Negada");
};


//if(permissao1cracha == 'sim' && permissao2uniforme == 'sim' && permissao4cadastro == 'sim'){
//  console.log('Acesso permitido!');
//}else if(permissao3monitor == 'sim' && permissao4cadastro == 'sim'){ 

//}else{
//   console.log('Acesso negado!');
//}