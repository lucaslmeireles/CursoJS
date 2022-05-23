// IEEE 754-2008
/*
let num1 = 1;
let num2 = 1.25;
let num3  = 10.65324156454;

console.log(num1.toString() + num2);
console.log(num2.toFixed(2));
console.log(Number.isInteger(num1));
let temp = num1 + 'Ola';
console.log(Number.isNaN(temp));*/

let num1 = 0.7;
let num2 = 0.1;
num1 += num2;
num1 += num2;
num1 += num2;

// num1 = ((num1 *100) + (num2 *100))/100;
console.log(num1.toFixed(2));  //nao conserta
console.log(parseFloat(num1.toFixed(2)));
console.log(Number(num1.toFixed(2)));
console.log(Number.isInteger(num1));