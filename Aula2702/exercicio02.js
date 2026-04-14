class Tarefa {
    constructor(titulo, descricao) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.concluida = false;
    }

    concluir() {
        this.concluida = true;
    }

    reabrir() {
        this.concluida = false;
    }

    mostrar() {
        return `Título: ${this.titulo} Descrição: ${this.descricao} Status: ${this.concluida ? "Concluída" : "Pendente"}`;
    }
}

class ListaTarefas {
    constructor() {
        this.tarefas = [];
    }

    adicionar(tarefa) {
        this.tarefas.push(tarefa);
    }

    removerPorTitulo(titulo) {
        this.tarefas = this.tarefas.filter(t => t.titulo !== titulo);
    }

    listar(concluidas = null) {
        if (concluidas === null) {
            return this.tarefas;
        }

        return this.tarefas.filter(t => t.concluida === concluidas);
    }
}

const tarefa1 = new Tarefa("Estudar JS", "Revisar classes");
const tarefa2 = new Tarefa("Fazer exercício", "Resolver lista");
const tarefa3 = new Tarefa("Ler livro", "Capítulo 3");

const lista = new ListaTarefas();

lista.adicionar(tarefa1);
lista.adicionar(tarefa2);
lista.adicionar(tarefa3);

tarefa1.concluir();

lista.removerPorTitulo("Fazer exercício");

console.log("Todas:");
for (let tarefa of lista.listar()) {
    console.log(tarefa.mostrar());
}

console.log("\nConcluídas:");
for (let tarefa of lista.listar(true)) {
    console.log(tarefa.mostrar());
}

console.log("\nPendentes:");
for (let tarefa of lista.listar(false)) {
    console.log(tarefa.mostrar());
}
