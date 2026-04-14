class Cidade {
    quantidade_habitante=175.042;
    estado='Goiás';
    nome='Senador Canedo';

    mostrar(){
        console.log(' A cidade de ' +  this.nome + ' está localizada no estado de ' +  this.estado + ' e tem aproximadamente ' +  this.quantidade_habitante + ' habitantes');
        //console.log(this.quantidade_habitante); // chamada de atributo
        //console.log(this.estado);
        //console.log(this.nome);
    }
}

const cidade= new Cidade();
cidade.mostrar();
