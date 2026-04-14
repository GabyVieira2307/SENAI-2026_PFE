class Produto {
    #nome;
    #preco;
    #estoque;

    constructor(nome, preco, estoque) {
        if (preco < 0 || estoque < 0) {
            console.log("Erro: preço e estoque devem ser maiores ou iguais a zero.");
            return;
        }

        this.#nome = nome;
        this.#preco = preco;
        this.#estoque = estoque;
    }

    getNome() {
        return this.#nome;
    }

    getPreco() {
        return this.#preco;
    }

    getEstoque() {
        return this.#estoque;
    }

    aplicarDesconto(percentual) {
        if (percentual < 0) {
            console.log("Percentual inválido!");
            return;
        }

        this.#preco -= this.#preco * (percentual / 100);
        return this.#preco;
    }

    valorEmEstoque() {
        return this.#preco * this.#estoque;
    }

    mostrar() {
        return `Produto: ${this.#nome}  Preço: R$ ${this.#preco.toFixed(2)}  Estoque: ${this.#estoque}`;
    }
}

const produto1 = new Produto("Ipad", 4500, 5);
const produto2 = new Produto("Celular", 12000, 20);

produto1.aplicarDesconto(10);

console.log(produto1.mostrar());
console.log("Valor total em estoque:", produto1.valorEmEstoque());

console.log(produto2.mostrar());
console.log("Valor total em estoque:", produto2.valorEmEstoque());

if (produto1.valorEmEstoque() > produto2.valorEmEstoque()) {
    console.log("Produto 1 tem maior valor em estoque.");
} else {
    console.log("Produto 2 tem maior valor em estoque.");
}
