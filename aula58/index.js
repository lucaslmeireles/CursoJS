//Filter array

const numeros = [5,50,80,1,2,3,4,5,9,7,11,15,22,27];

function callbackFilter(valor){
    return (valor > 10);
}
//                                        Função de callback 
const numeroFiltrados = numeros.filter( (valor, indice) => {
    console.log(indice, valor);
    return valor >10;
});

console.log(numeroFiltrados);


const pessoas = [
    {nome: 'Lucas', idade: 56},
    {nome: 'Carlos', idade: 87},
    {nome: 'Milena', idade: 45},
    {nome: 'Mia', idade: 32},
    {nome: 'Pedro', idade: 43},
    {nome: 'Denis', idade: 12},
];

const pessoasComNomeGrande = pessoas.filter(valor => valor.nome.length > 5);

const pessoasComMaisDe50 = pessoas.filter(valor => valor.idade > 50);
const pessoasComNomeTerminaA = pessoas.filter(valor => {
    return valor.nome.toLowerCase().endsWith('a');
});
console.log(pessoasComNomeGrande);
console.log(pessoasComMaisDe50);
console.log(pessoasComNomeTerminaA);