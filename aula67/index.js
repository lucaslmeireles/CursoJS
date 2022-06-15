function Pessoa(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
} 

Pessoa.prototype.nomeCompleto = () => this.nome + ' ' + this.sobrenome;

const p1 = new Pessoa('Lucas', 'Lucio');
const p2 = new Pessoa('Lais', 'Carla');

console.log(p1.nomeCompleto());