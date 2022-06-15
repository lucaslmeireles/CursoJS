//Supercalss - base
function Conta(agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor){
    if (this.saldo < valor) {
        console.log(`Saldo Insuficiente: R$${this.saldo.toFixed(2)}`)
        return;
    }
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function (valor){
    this.saldo += valor;
    this.verSaldo()
};
Conta.prototype.verSaldo = function (){
    console.log(`Ag/c: ${this.agencia}/ ${this.conta} | `+
    `Saldo R$${this.saldo.toFixed(2)}`);
};

function ContaCorrente(agencia, conta, saldo, limite){
    this.limite = limite;
    Conta.call(this,agencia, conta, saldo);
}
ContaCorrente.prototype =Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

ContaCorrente.prototype.sacar = function (valor){
    if (valor > (this.saldo + this.limite)){
        console.log(`Saldo Insuficiente: R$${this.saldo.toFixed(2)}`)
    }
    this.saldo -= valor;
    this.verSaldo();
}

function CP (agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo);
}

CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP
const cc1 = new ContaCorrente(112,234,50,100);
cc1.sacar(148);
