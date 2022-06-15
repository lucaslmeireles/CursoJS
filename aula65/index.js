// Geteter e Setter
function Product( nome, preco, estoque) {
    this.nome = nome;
    this.preco = preco;
    let estoquePrivado = estoque;
    Object.defineProperty(this, 'estoque', {
        enumerable: true, //mostra a chave
        configurable: true, // configuravel
        get: function(){
            return estoquePrivado;
        },
        set: function (valor){
            if (typeof valor !== 'number') return console.log('Bad Value;')
            estoquePrivado = valor;
        }
    });

}

const p1  = new Product('Camiseta', 20, 5);
console.log(p1);
p1.estoque = ' ewgjnolgijn';
console.log(p1.estoque);