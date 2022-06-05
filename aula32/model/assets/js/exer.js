const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];
const container = document.querySelector('.container')
const div = document.createElement('div');

function recebeElementos(elemento){
    for (let i= 0; i < elemento.length; i++){
        const tag = elemento[i];
        tagETexto(tag);
    }
    container.appendChild(div);
};
function tagETexto(tag){
    const {tag: tg, texto: text} = tag;
    console.log(tg, text);
    const criaTag = document.createElement(tg);
    criaTag.innerText = text;
    div.appendChild(criaTag);
};

recebeElementos(elementos);