const frutas = ['maça', 'pera', 'abobora'];

// for(let i = 0; i< frutas.length; i++){
//     console.log(frutas[i])
// }    FOR CLASSICO

for (let i in frutas){
    console.log(frutas[i]);
}

const pessoa = {
    nome: 'Lucas',
    sobrenome: ' Lucio',
    idade: 32,
};

for(let i in pessoa){
    console.log(i , pessoa[i]);
};