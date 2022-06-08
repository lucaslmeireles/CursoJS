function criaOutraFuncao(nome){
    return function (){
        return nome;
    };
}

const funcao  = criaOutraFuncao('Lucas');
const funcao2  = criaOutraFuncao('Outro ome');
console.dir(funcao);
console.dir(funcao2);