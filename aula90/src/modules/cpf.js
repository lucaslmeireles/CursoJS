export default class CPF {
    constructor (cpfEnviado){
       this.cpfLimpo = cpfEnviado.replace(/\D+/g, '')
    }
    isSequencia(){
        return this.cpfLimpo.charAt(0).repeat(this.cpfLimpo.length) === this.cpfLimpo;
    }
    geraNovoCpf(){
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = CPF.criaDigito(cpfParcial);
        const digito2 = CPF.criaDigito(cpfParcial + digito1);
        const novoCpf = cpfParcial + digito1 + digito2;
        
        return novoCpf === this.cpfLimpo;
    }
    valida(){
        if(typeof this.cpfLimpo === 'undefined') return false;
        if(this.cpfLimpo.length !== 11) return false;
        if(this.isSequencia()) return false;
        if(!geraNovoCpf()) return false;

        return geraNovoCpf();
           
    }
    static criaDigito (cpfParcial){
        const cpfArray = Array.from(cpfParcial);
        let regresivo = cpfArray.length + 1;
        const total =cpfArray.reduce((ac, val) => {
            ac += (Number(val) * regresivo);
            regresivo--;
            return ac;
        },0)
        const digito = 11 - (total % 11);
        return digito > 9 ? '0' : String(digito);
    }
}

