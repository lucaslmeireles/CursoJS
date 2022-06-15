const nomes = ['Maria', 'Joao', 'Eduardo', ' Gabriel', ' Julia']

// nomes.splice(indice, delete, elem1, elem2, elem3);
// pop
const removidos = nomes.splice(-1, 1, 'Adicionar no indice 3', 'Teste');
console.log(nomes, removidos);

// Concatenando arrays
const a1 = [4,3,2];
const a2 = [4,5,6];
const a3 = a1.concat(a2);
console.log(a3)
