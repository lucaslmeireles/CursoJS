// Map altera valores do array
const numeros = [5,50,80,1,2,3,4,5,9,7,11,15,22,27];
//Dobras os numeros do array
const numerosEmDobro = numeros.map(valor => valor * 2 );

console.log(numerosEmDobro);




const pessoas = [
    {nome: 'Lucas', idade: 56},
    {nome: 'Carlos', idade: 87},
    {nome: 'Milena', idade: 45},
    {nome: 'Mia', idade: 32},
    {nome: 'Pedro', idade: 43},
    {nome: 'Denis', idade: 12},
];

const nomes = pessoas.map(valor => valor.nome);
const idades = pessoas.map(valor => ({idade: valor.idade}));
const id = pessoas.map((valor, indice) => {
    const newObj = {...valor}
    newObj.id = (indice+1);
    return newObj;
});
console.log(nomes);
console.log(idades);
console.log(id);
console.log(pessoas);