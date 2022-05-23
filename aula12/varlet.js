let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A
const varCTemp = 'C';

[varA, varB, varC] = [varB, varC, varA] //maneira com array

varC = varA; //varC = a
varA = varB; // varA = b
varB = varCTemp; // varB = a

console.log(varA, varB,varC);

