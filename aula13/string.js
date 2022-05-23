/*
    pode usar a \ para escapar um texto ex. \teste = este 
    string tem indices teste 01234  var[4] = e ou com .charAt(4) = e
    indexOf(caracter ou texto) retorna o indece que começa na string
*/
let umaString = 'Um texto';
console.log(umaString);
console.log(umaString.indexOf('o'));
console.log(umaString.indexOf('o', 4));
console.log(umaString.lastIndexOf('o', 4)); //começa do final
console.log(umaString.replace('o', 'O')); //troca a letra que precisa
console.log(umaString.length); //tamanho da string
console.log(umaString.slice(-2)); //divide a string
console.log(umaString.split(' ')); //divide a string em palavras determinadas
console.log(umaString.toUpperCase()); 
console.log(umaString.toLowerCase()); 
