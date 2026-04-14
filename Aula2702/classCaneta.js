class Caneta{
    cor="Roxa";
    marca="Stabillo";
    ponta="Fina";
    qtdTinta= 10;
    tampa=true;

    escrever(){
        this.qtdTinta -= 1;
        return 'Comecei a escrever';
    }

    destampar(){
        return 'Destampada';
    }

    getqtdTinta(){
        return this.qtdTinta;
    }

    recarregar(valor){
         if((this.qtdTinta + valor) > 15){
            return 'A quantidade informada excede a quantidade permitida de 15ml';
         }
         this.qtdTinta += valor;
         return 'A quantidade de tinta depois da recarga é:  ' + this.qtdTinta();
        }


        getqtdTinta(){
    return this.qtdTinta;
}

}

const canetaPontaFina = new Caneta();
//canetaPontaFina.escrever();
//canetaPontaFina.escrever();
//canetaPontaFina.getqtdTinta();
//canetaPontaFina.destampar();
//console.log('A quantidade de tinta restante na caneta é ' + canetaPontaFina.getqtdTinta());
console.log(canetaPontaFina.recarregar(10));

//criar um metodo sublinhar, que recebe um parametro valor que vai apresentar a quantidade gasta de tinta ao sublinhar, desconte da quantidade de tinta e mostre a quantidade restante, porem nao permita que sejasubtraida se o valor for maior do que a quantidade de tinta da classe.