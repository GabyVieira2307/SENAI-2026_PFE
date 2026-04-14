class Jogador{ 
    #nome;
    #numero;

    constructor(nome,numero){
        this.#nome = nome;
        this.#numero = numero;
    }

    getNome(){
        return this.#nome;
    }

    getNumero(){
        return this.#numero;
    }
}

class JogadorFutebol extends Jogador{ 
     peDominante;
     qtdGols;

     constructor(nome,numero,peDominante,qtdGols){
        super(nome,numero);
        this.peDominante = peDominante;
        this.qtdGols = qtdGols;
     }

     fazerGol(qtd){
        return this.qtdGols += qtd;
     }

     mostrar(){
         return `O jogador ${super.getNome()} camisa número ${super.getNumero()} tem o pé dominante ${this.peDominante} e tem ${this.qtdGols} gols.`;
     }
}

const arrascaeta = new JogadorFutebol('Arrascaeta',10,'esquerda',10);
console.log(arrascaeta.mostrar());