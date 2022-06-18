// fetch('pessoas.json')
// .then(response => response.json())
// .then(json => mostraDados(json))
// .catch(e => console.log(e));

axios('pessoas.json')
.then(response => mostraDados(response.data));

function mostraDados(json){
    const table  =  document.createElement('table');
    for(let {nome, estado, sexo} of json){
        const tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.innerHTML = nome
        tr.appendChild(td1);

        let td2 = document.createElement('td');
        td2.innerHTML = estado
        tr.appendChild(td2);

        let td3 = document.createElement('td');
        td3.innerHTML = sexo;
        tr.appendChild(td3);

        table.appendChild(tr);
    }
    const resultado = document.querySelector('.resultado');
    resultado.appendChild(table);
}
