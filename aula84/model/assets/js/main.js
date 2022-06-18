 // XMLHttpRequest faz requisao de qualquer tipo de dado

document.addEventListener('click', e =>{
    const el = e.target;
    const tag = el.tagName.toLowerCase();
    
    if (tag === 'a'){
        e.preventDefault();
        carregaPag(el);
    }
});


async function carregaPag(el){
    const href = el.getAttribute('href');
    try{
    const response = await fetch(href);
    if(response.status !== 200) throw new Error('Erro Nosso');
    const html = await response.text();
    carregaResultado(html);
    } catch (e) {
        console.error(e);
    }

    /*
    metodo antigo
    fetch(href)
    .then(response => response.text())
    .then(html => carregaResultado(html))
    .catch (e => console.error(e))
    */

function carregaResultado(response){
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
}
}
