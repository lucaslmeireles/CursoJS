// Atribuição via desestruturação

const num = [100,200,300,400,500,600,700,800,900];
const [um, ,tres, , cinco, , sete, ...resto] = num ;
console.log(um, tres, cinco, sete);