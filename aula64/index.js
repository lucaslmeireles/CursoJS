function Product( nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;

    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        value: estoque, // valor
        writable: false, //pode aletarar o valor
        configurable: false, // configuravel
    });

    Object.defineProperties(this, {
        nome: {
            enumerable: true,
            value: nome,
            writable: true
        },
        preco:{
            enumerable: true,
            value: preco,
            writable:true,
        },
    });
}

const p1  = new Product('Camiseta', 20, 5);
console.log(Object.keys(p1));