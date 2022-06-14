const produto = {nome:'Caneca', preco: 1.54};
const caneca = Object.assign({}, produto, {material: 'Porcelana'}); //copia os dados do objeto
const outraCoisa = {...produto,
    material:"algodao",    
}; // dessa maneira o objeto é COPIADO e nao referenciado
console.log(Object.keys); //mostra as chaves do objeto
Object.freeze(produto); //trava o objeto

console.log(Object.getOwnPropertyDescriptor(produto, 'nome')); // trabalho junto com a define proprety
console.log(Object.keys); //mostra as chaves do objeto
console.log(Object.values(produto)); // mostra os valores
console.log(Object.entries(produto)); //mostra os dois ^ ^

