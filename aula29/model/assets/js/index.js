const h1 = document.querySelector('#h1horario');
const data = new Date();
const opcoes = {
    dateStyle:'full',
    timeStyle: 'short',
};

h1.innerHTML = data.toLocaleDateString('pt-BR', opcoes);