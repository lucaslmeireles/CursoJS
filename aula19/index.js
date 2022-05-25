/*
Primitivos - string, number, boolean, undefined. null, bigint, symboll



*/

let a  ='A';
let b = a; //copiando o valor
console.log(a,b);
a = 'Outra coisa';
console.log(a,b);

let arraya = [1,2,3];
let arrayb = arraya; // aponta para o mesmo lugar na memoria
console.log(arraya,arrayb);
arraya.push(4);
console.log(arraya,arrayb);
