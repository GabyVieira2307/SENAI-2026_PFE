class Animal{
    especie;
    #genero;
    #qtdIndividuos;
    #nome;

    constructor(especie,genero,qtdIndividuos,nome){
        this.especie = especie;
        this.#genero = genero;
        this.#qtdIndividuos = qtdIndividuos;
        this.#nome = nome;
       
    }
    mostrar(){
        console.log(' A raposa ' + this.#nome +  ' é do gênero -> ' +  this.#genero + ' e possui -> ' +  this.#qtdIndividuos + ' de indivíduos ');
    }
}

const raposa = new Animal('Mamíferos','Macho', 4,'Vanilla');
console.log(raposa);
raposa.mostrar();