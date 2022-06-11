//                0          1        2
const nomes = ['Eduardo', 'Maira', 'Joana'];
nomes[2] = 'Joao';
const novo = [...nomes];  //spread é igual ao rest mudase o contexto rest é o resto spread pega tudo dentro do array novo
novo.pop();  // dessa forma apenas novo é aletarado e deixa de ser uma referencia na memoria do nomes
novo.shift(); // remove do começo
nomes.push('Helio'); // adiciona no final
nomes.unshift('Começo'); //adiciona no começo
nomes.slice(0,3);
delete nomes[2];
console.log(nomes);

const nome = 'Lucas Ludio de Meireles';
const nomess = nome.split(' ');
const nom = nomess.join(' ');
console.log(nom);