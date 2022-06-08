
const inputTarefa = document.querySelector('.nova-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
    const li = document.createElement('li');
    return li;
}

function criaTarefa(texto) {
    const li = criaLi();
    li.innerHTML = texto;
    tarefas.appendChild(li);
    limpaInput();
    criaBotaoApagar(li);
    salvarTarefa();
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function criaBotaoApagar(li) {
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.classList.add('delete');
    li.appendChild(botaoApagar);
}



inputTarefa.addEventListener('keypress', function (e) {
    if (!inputTarefa.value) return;
    if (e.keyCode === 13) {
        criaTarefa(inputTarefa.value)
    }
});

btnTarefa.addEventListener('click', function (e) {
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
});

document.addEventListener('click', function (e) {
    const el = e.target;
    if (el.classList.contains('delete')) {
        el.parentElement.remove();
    }
    salvarTarefa();
})

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefa = [];
    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaDeTarefa.push(tarefaTexto);
    }
    const tarefasJSON = JSON.stringify(listaDeTarefa);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefassalvas() {
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefa = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefa) {
        criaTarefa(tarefa);
    }
}
adicionaTarefassalvas();
