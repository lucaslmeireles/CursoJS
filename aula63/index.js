const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Lucio',
    idade: 13,
};

const pessoa2 = new Object();
pessoa2.nome = 'Teste';
pessoa2.sobrenome ='Testinho';
pessoa2.idade =19;

console.log(pessoa.nome, pessoa.sobrenome, pessoa['nome']);
console.log(pessoa2.nome, pessoa2.sobrenome, pessoa2['nome']);

pessoa2.falarNome = function() {
    console.log(`${this.nome} está falando`);
};

pessoa2.getDataNascimento = () => {
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade};

console.log(pessoa2.getDataNascimento());

function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        }
    };
}
const p1 = criaPessoa('Lucas', "Lucio");
console.log(p1.nomeCompleto)

function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
   
}

const p2 = new Pessoa('Lucas', 'Lucio');
console.log(p2);