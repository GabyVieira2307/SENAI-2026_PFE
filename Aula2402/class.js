class Veiculo {
    //atributos ou características - começo
    modelo='SU';
    marca='Honda - HRV';
    ano=2025;

    //metodos - função/ação
    dirigir(){
        console.log("Começou a se mover");
    }
    break(){
        console.log("Parouu!");
    }
}

//Class sempre com a inicial maiuscula
//Instanciar ou criar o objeto

const carro = new Veiculo();
carro.dirigir();
carro.break();

