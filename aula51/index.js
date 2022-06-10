//funções construtoras  -> objetos
//Construtora funcçao se inicia com letra maiuscula 

function Pessoa(nome, sobrenome){
    //atributos privados
    const ID = 123456;
    const metodoInterno = function(){

    };

    // atributos e metodos publicos
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo =  () =>{
        console.log('Sou um metodo');
    }
}

const p1 = new Pessoa('Lucas', 'Lucio');
const p2 = new Pessoa('Lucio', 'Meireles');

p1.metodo();