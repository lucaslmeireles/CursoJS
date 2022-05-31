/*
Avaliação de circuito
&& -> false && true -> false 'o valor mesmo'
|| -> 

Falsy
false
0
'', "", ``
null/ undefined
NaN

True
Qualquer coisa diferente do Falsy
*/
// console.log('Luiz' && 'Maria');

function falaOi() {
    return 'Oi';
}

const vaiExecutar = false;
console.log(vaiExecutar && falaOi())
/*na avaliação de circuito quando ele 
encontra o primeiro valor falso ele para 
a execução e retorna o valor no &&
*/

console.log(0 || false || null || 'Lucas' || true);
/* nessa avaliação ele retorna o primeiro valor verdadeiro
e para a execução*/

const corUsuario = null;
const corPadrao = corUsuario || 'red';
console.log(corPadrao);
