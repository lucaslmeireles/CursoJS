import CPF from './cpf'

export default class GeraCPF {
    rand(min = 100000000 , max = 999999999){
        return String(Math.floor(Math.random() * (max - min) + min));
    }
    geraNovoCPF(){
        const cpfSemDigito = this.rand();
        const digito1 = CPF.criaDigito(cpfSemDigito);
        const digito2 = CPF.criaDigito(cpfSemDigito + digito1);
        const cpfCompleto = cpfSemDigito + digito1 + digito2;
        return this.formatado(cpfCompleto);
    }
    formatado(cpf){
        cpf.slice(0,3) + '.';
        cpf.slice(3,6) + '.';
        cpf.slice(6,9) + '-';
        return cpf;
    }
}
