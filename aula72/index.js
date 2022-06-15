function criaPessoa(nome,sobrenome){
    const falar = {falar() {
        console.log('uh');
    }};
    const comer = {comer () {
        console.log('frio');
    }};
    const beber = {beber (){
        console.log('UI');
    }};

    const pessoaPrototype =Object.assign({...falar});
    return Object.create(pessoaPrototype, {
        nome: {value: nome},
        sobrenome: {value: sobrenome}
    });
}

const p1 = criaPessoa('Meu', 'Dedo');
console.log(p1);