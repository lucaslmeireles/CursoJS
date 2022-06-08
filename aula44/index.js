// arguments local que armazena os argumentos que foram mandados para a função
function funcao(a, b = 2, c = 4) {
    console.log(a + b + c);
}
funcao(2, undefined, 20); // parar assumir o vaor padrao apenas com o uso do undefined

function desetruturacao({ nome, sobrenome, idade }) {
    console.log(nome, sobrenome, idade);
}

desetruturacao({ nome: 'Lucas', sobrenome: 'Luso', idade: 32 });

function conta(operador, acumulador, ...numeros) {
    for (let numero of numeros) {
        if (operador === '+') acumulador += numero;
        if (operador === '-') acumulador -= numero;
        if (operador === '*') acumulador *= numero;
        if (operador === '/') acumulador /= numero;
    }
    return console.log(acumulador);
}
conta('/', 2, 10, 20, 30, 50);