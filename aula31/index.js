// Atribuição via desestruturação
/*
const num = [100,200,300,400,500,600,700,800,900];
const [um, ,tres, , cinco, , sete, ...resto] = num ;
console.log(um, tres, cinco, sete);
*/

const pessoa= {
    nome: 'Luiz',
    sobrenome : 'Lucio',
    idade : 30,
    endereco : {
        rua: 'Av.Beira',
        numero: 1400
    }
};

const {nome: teste = 'Nao existe', idade, endereco: {rua, numero}, endereco} = pessoa;
console.log(teste, idade, rua, numero);