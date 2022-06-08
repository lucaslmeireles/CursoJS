// declaração de função Fuction Hoisting
// Functions sao First Class Objects

function falaOi(){
    console.log('Oi!');
};

const souUmDado = function (){
    console.log('Dado');
};
souUmDado();

function executaFuncao(funcao){
    funcao();
}

executaFuncao(falaOi);

//Arrow function
const arrowFunction = (x,y) => x + y;
const obj = {
    falar(){
        console.log('Falar');
    }
}

obj.falar();
console.log(arrowFunction(2,3));