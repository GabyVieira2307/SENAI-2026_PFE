class Bicicleta{
    #modelo;//atributo privado
    #marca;//atributo privado
    #cor;//atributo privado
    #velmax;//atributo privado

    //métodos getters e setters
    setModelo(valor){
        this.#modelo = valor;
    }
    getModelo(){
        return this.#modelo;
    }

     setMarca(valor){
        this.#marca = valor;
    }
    getMarca(){
        return this.#marca;
    }

    setCor(valor){
        this.#cor = valor;
    }
    getCor(){
        return this.#cor;
    }

    setVelmax(valor){
          if (valor > 35) {
            console.log("Erro: A velocidade máxima não pode ser superior a 35 km/h.");
        } else {
            this.#velmax = valor;
        }
    }
    getVelmax(){
        return this.#velmax;
    }

}

const atributos = new Bicicleta();
atributos.setModelo('Mountain Bike (MTB)');
console.log(atributos.getModelo());
atributos.setMarca('Trek');
console.log(atributos.getMarca());
atributos.setCor('Roxa');
console.log(atributos.getCor());
atributos.setVelmax(40);
console.log(atributos.getVelmax());

console.log(atributos);