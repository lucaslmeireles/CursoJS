/*11705726771
1*10 + 1*9 + 7*8 + 0*7+ 5*6 + 7*5 +2*4 +6*3 + 7*2 = total 
11 - (total % 11) = primeiro digito se > 9 e igual a 0

1*11 + 10*1 + 7*9 + ... + primeirodigito * 2 = total
11 (total % 11) = segundo digito

expressão regular
reduce
*/


function limpaCpf(){
    const cpfLimpo = cpf.value.replace(/\D+/g, '');
    return cpfLimpo;
}

function cpfEmArray() {
    const cpfLimpo = limpaCpf()
    const cpfArray = Array.from(cpfLimpo);
    cpfArray.splice(-2,2);
    const cpfMultiplicado = cpfArray.map(function(valor, index, array){
        return valor = Number(valor) * (wichDigit(array) - index);
    });
    let regressivo = cpfArray.length + 1
    const soma = cpfMultiplicado.reduce((ac, valor) => {
    ac += Number(valor) * regressivo }, 0)

    return console.log(cpfMultiplicado, soma);


}

function verificaCpf(){
    limpaCpf();
    cpfEmArray();
}

verificaCpf();


