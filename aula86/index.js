class Pessoa{
    constructor (nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    }
    falar(){
        console.log('Oi');
    }
}

const p1 = new Pessoa;
p1.falar()