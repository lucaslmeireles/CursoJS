// funcções fabricas  this.

function criaPessoa(nome, sobrenome,a ,p){
    return {
        nome,
        sobrenome,
        fala (assunto){
            return `${this.nome} esta falando sobre ${assunto}`;
        },
        //getter
        get imc(){
            const indice = this.peso / (this.altura **2 );
            return indice.toFixed(2);
        },
        altura : a,
        peso : p,
        get nomeCompleto(){
            return `${this.nome} ${this.sobronome}`
        },
        //Setter
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome= valor.join(' ');
        }
        };
}

const p1 =  criaPessoa('lucas', 'lucio', 1.32, 45);
console.log(p1.fala('metodos'));
p1.nomeCompleto = `Lucas Lucio`;
console.log(p1.imc);
console.log();
