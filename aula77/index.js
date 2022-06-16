//metodos de instancia e estaticos

class ControleRemoto {
    constructor (tv){
        this.tv = tv;
        this.volume= 0;
    }

    aumentarVolume(){
        this.volume += 2;
    }
    diminuirVolume(){
        this.volume -= 2;
    }
//metrodo estatico so usado com a classe 
    static trocaPilha(){
        console.log('Trocar a pilha');
    }
}
const controle1 = new ControleRemoto('LG');
controle1.aumentarVolume();
console.log(controle1);

ControleRemoto.trocaPilha();