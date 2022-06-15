/*11705726771
1*10 + 1*9 + 7*8 + 0*7+ 5*6 + 7*5 +2*4 +6*3 + 7*2 = total 
11 - (total % 11) = primeiro digito se > 9 e igual a 0

1*11 + 10*1 + 7*9 + ... + primeirodigito * 2 = total
11 (total % 11) = segundo digito

expressão regular
reduce
*/

// const resultado = document.querySelector('#resultado');
// let cpfEnvi = document.querySelector('#cpf');


function ValidaCPF(cpfEnviado){
    
    Object.defineProperty(this, 'cpfLimpo', {
        get: function (){
            return cpfEnviado.replace(/\D+/g, '')
        }
    })

}

ValidaCPF.prototype.valida = function (){
    if(typeof this.cpfLimpo === 'undefined') return false;
    if(this.cpfLimpo.length !== 11) return false;
    if(this.isSequencia()) return false;
  
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial);
    const digito2 = this.criaDigito(cpfParcial + digito1);
  
    const novoCpf = cpfParcial + digito1 + digito2;
    return novoCpf === this.cpfLimpo;
}
ValidaCPF.prototype.criaDigito = function(cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let regresivo = cpfArray.length + 1;
    const total =cpfArray.reduce((ac, val) => {
        ac += (Number(val) * regresivo);
        regresivo--;
        return ac;
    },0)
    const digito = 11 - (total % 11);
    return digito > 9 ?'0' : String(digito);
}

ValidaCPF.prototype.isSequencia = function (){
    return this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
}
const cpf = new ValidaCPF('117.057.267-71');
console.log(cpf.valida());
