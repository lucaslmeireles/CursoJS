const verdadeira = true;
// diferença entre var e let
// let tem escopo de bloco
// var so tem escopo de funcao
//  rosting eleva a declaraçao das variaveis no topo do documento (apenas com var)
let nome  = 'Lucas';
var nome2 = 'Lucas';

if (verdadeira){
    var nome2 = 'Lucio';
    let nome = 'Lucio'
    console.log(nome, nome2);
    if (verdadeira){
        let nome = 'Outra coisa'
        console.log(nome, nome2);
        console.log('OK');
    }
}


