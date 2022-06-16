//Herança em classes

class DispositivoEletronico {
    constructor(nome){
        this.nome = nome;
        this.ligado = false;
    }
    ligar(){
        if (this.ligado) {
            console.log(`${this.nome} está ligado`);
            return;
        }
        this.ligado = true;
    }
    desligar(){
        if (!this.ligado) {
            console.log(`${this.nome} está desligado`);
            return; 
        }
        this.ligado = false;
    }
}

class Smartphone extends DispositivoEletronico {
    constructor(nome,cor, modelo) {
        super(nome);
        this.cor = cor;
        this.modelo = modelo;
    }
}

class Tablet extends DispositivoEletronico{
    constructor (nome, temWifi){
        super(nome);
        this.temWifi = temWifi;
    }
    ligar(){
        console.log('VOce alterou LIGAR');
    }
}
const d1 = new Smartphone('Iphone', 'Preto', '13');
const d2 = new Tablet('Multilaser', 'sim');
d1.ligar();
console.log(d1);
console.log(d2);