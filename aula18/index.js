//Objetos

const array = [1,2,3];
array.push(4);
array[0] = 'Luiz';
console.log(array);
//array = 'Teste'; //nao da certo pois ele é uma constante e nao pode ser alterado o seu valor
/*
    Muito dificil
const nome01 = 'Lucas';
const sobrenomenome01 = 'Lucio';
const idade01 = 19;
const nome02 = 'Maria';
const sobrenomenome02 = 'Lucia';
const idade02 = 18;
*/
/*
//Array começa com []  e um obejto com {}
const pessoa01 = {
    nome:'Lucas',
    sobrenome : 'Lucio',
    idade: 19

};

const pessoa02 = {
    nome:'Mia',
    sobrenome : 'Fernandes',
    idade: 19

};
//acesar esse atributo com o ponto
console.log(pessoa01.idade);
console.log(pessoa01.nome);
console.log(pessoa02.nome);
console.log(pessoa02.idade);
*/

//função factory
function criaPessoa(nome, sobrenome, idade){ //parametros iguais nao precisam colocar a chave
    return {nome, sobrenome, idade};
}   

const pessoa1 = criaPessoa('Lucas', 'Lucio', 19);
const pessoa2 = criaPessoa('Milena', 'Carla', 22);
const pessoa3 = criaPessoa('Arthur', 'Fernandes', 25);
console.log(pessoa1.nome, pessoa2.nome, pessoa3.nome);

const pessoa = {
    nome: 'lucas',
    sobrenome : 'lucio',
    idade : 19,

    fala() {
        console.log(`${this.nome} ${this.sobrenome} está falando oi e tenho ${this.idade} `)
    },

    incrementaIdade() {
        ++this.idade;
    }
};

pessoa.fala();
pessoa.incrementaIdade();
pessoa.fala();