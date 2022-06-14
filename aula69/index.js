//Produto -> aumento e desconto
//Camiseta = cor , caneca = material
function Produto( nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.aumento = function(quantia) {
    this.preco += quantia;
}

Produto.prototype.desconto = function(quantia) {
    this.preco -= quantia;
}

function Camiseta( nome, preco , cor){
    Produto.call(this, nome, preco); // link camiseta a produto
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype); //linka os metodos de produto para  a camiseta
Camiseta.prototype.constructor = Camiseta; // define o contrutor de camiseta : Camiseta

function Caneca(nome, preco, material){
    Produto.call(this, nome, preco);
    this.material = material;
}

Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca;

const camiseta = new Camiseta('Regata', 7.5, 'Preta');
const caneca = new Caneca('Caneca', 56, 'Porcelana');
camiseta.aumento(33);
caneca.aumento(4);
console.log(camiseta, caneca);