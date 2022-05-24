//Arrays Coleção de coisas
/*
    arrays sao indexados automaticamente 
    ['luiz','maria'] 
       0       1
    type of é um objeto 
*/
const alunos = ['Luiz','Maria', 'Joao'];
alunos[3] = 'Eduardo'; ///acresenta elementos
alunos[0] =  'Luiza'; //modifica elementos
alunos[alunos.length] = 'Felipe'; // coloca na ultima posição
alunos.push('Fabio');// coloca na ultima posição
alunos.push('Carla');// coloca na ultima posição
alunos.unshift('Carlos'); //adiciona no começo
alunos.pop(); //remover do final
const removidos = alunos.shift(); //remove o primeiro indice 
//delete alunos[1] deleta o elemento porem cria um elemento vazio(undefined)
//consle.log(alunos[50]) mostra um valor undefined se buscar um indice fora do range da lista 
console.log(alunos,removidos);
console.log(alunos.slice(0,3));
console.log(alunos instanceof Array); //pergunta se o objeto trabalhado é um array
alunos = 123
console.log(alunos instanceof Array); //pergunta se o objeto trabalhado é um array
