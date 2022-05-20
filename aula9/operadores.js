/* Operadores aritmeticos
    + - / * 
    ** potencia
    % resto de divisao

    ++ incremento 
    -- decremento

    += adiciona um valor 
    -= subrai um valor
    *= multiplica por um valor
    /= divide por um valor
    **= potencia


    NaN - not a number  parseInt() - numero inteiro parseFloat() - numero ponto flutuante Number- os dois tipos
*/

const num1 = 10;
const num2 = 5;
console.log(num1 + num2 );
console.log(num1 / num2 );
console.log(num1 + num2 * num2);
let contador = 2;
contador++; // adiciona 1
++contador;// adiciona 1
--contador;// tira 1
contador--;// tira 1
console.log(contador);
const passo = 2;
contador = contador + passo;
contador += passo;
contador *= 3; //contador vezes 3
contador **= 3; //contador elevado 3
console.log(contador);

const num3 = 10;
const num4 = parseInt('5'); //converte de string para number
console.log(num3 ** num4);