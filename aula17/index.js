//Funçoes 

function sayHello(name){
    return `Hello ${name}`;
}
sayHello('Lucas');// é necessrio os paraentes para executar a função
const funcao = sayHello('Cesar');
console.log(funcao)

function soma(x,y){
    const resultado = x + y;
    return resultado;
}

console.log(soma(2,4));
console.log(soma(9,4));

const raiz = function (n){ //funcao anonima
    return Math.sqrt(n)
};
console.log(raiz(9));

const arrow = n => n * 0.5 //arrow function
console.log(arrow(9)) 