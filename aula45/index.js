//retorno de função return
function soma(a,b){
    return a+b
}
function criarPessoa(nome,sobenome){
    return {nome, sobenome};
}

const p1 = criarPessoa('Luiz', 'carlos');

function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' +  resto;
    }
    return falaResto;
}
const fala = falaFrase('Ola');
const resto = fala('mundo');
console.log(resto);

function multiplica(n){
    function quanto(m){
        return n * m;
    }
    return quanto;
}

const multiplicador = multiplica(6);
const quanto = multiplicador(3);
console.log(quanto);