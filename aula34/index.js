const nome  = 'Lucas Lucio';
const nomes = ['Luiz', 'Carlos', 'Miguel']
for (let valor of nome){  //vem exatamente o valor
    console.log(valor);

}
for (let nome of nomes){
    console.log(nome);
}

nomes.forEach(function (elemento) {
    console.log(elemento);
})

