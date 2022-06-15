const objA = {
    chaveA: 'a',
    //__proto__: Object.prototype
};

const objB = {
    chaveB: 'B',
    //__proto__: objA;
};

Object.setPrototypeOf(objB, objA); 
// esta função faz com q o proto de B seja redirecionado para A, ou seja, 
//o objB vira herdeiro de a
console.log(objB.chaveA);


function Produto(nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100));
}
const p1 = new Produto('Camisa', 50);
p1.desconto(30);

console.log(p1)

const p2 = {
    nome:"caneca",
    preco: 40,
};

Object.setPrototypeOf(p2, Produto.prototype);
// colocou o proto do produto no objeto p2
p2.desconto(34);
console.log(p2);

const p3 = Object.create(Produto.prototype, {
    tamanho: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 43
    }
});
p3.preco = 45;
p3.desconto(32);
console.log(p3);
