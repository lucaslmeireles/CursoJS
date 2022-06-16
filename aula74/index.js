class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    falar(){
        console.log(`${this.nome} está falando`);
    }
}

const p1 = new Pessoa('Lucas', 'Lucio');
const p2 = new Pessoa1('Joao', 'Laos');
const p3 = new Pessoa('Carlos', 'Lucio');
console.log(p1);
console.log(p2);
console.log(p3);
p1.falar();
p2.falar();

function Pessoa1(nome,sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome
}

Pessoa1.prototype.falar = function() {
    console.log(`${this.nome} está falando`);
}