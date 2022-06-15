//Reduce
const numeros = [5, 50, 80, 1, 2, 3, 5, 9, 7, 11, 15, 22, 27];
const total = numeros.reduce(function (acumulador, valor){
    acumulador.push(valor * 2 );
    return acumulador;
}, []);

console.log(total);

const pessoas = [
    {nome: 'Lucas', idade: 56}, // quem for mais velho vira o acumulador
    {nome: 'Carlos', idade: 87},
    {nome: 'Milena', idade: 45},
    {nome: 'Mia', idade: 32},
    {nome: 'Pedro', idade: 43},
    {nome: 'Denis', idade: 12},
];

const maisVelha = pessoas.reduce(function (acumulador, valor){
    if (acumulador.idade > valor.idade) return acumulador;
    return valor;
});

console.log(maisVelha);