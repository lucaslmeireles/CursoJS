 // XMLHttpRequest faz requisao de qualquer tipo de dado

const request = (obj) => {
    return new Promise((resolve, reject)=>{
        const xhr = new XMLHttpRequest();
        xhr.open(obj.get, obj.url , true); // metodo html GET, POST , url , função assicrona ou sincrona
        xhr.send();
    
        xhr.addEventListener('load', () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.responseText);
            } else{
                reject({
                    code: xhr.status,
                    msg: xhr.statusText,
                })
            }
        });
        })
};

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
    try {
    const response = await request({
        method:'GET',
        url: href,
    });
    carregaResultado(response);
    } catch(e){
        console.log(e);
    }
}

function carregaResultado(response){
    const resultado = document.querySeletor('.resultado');
    resultado.innerHTML = response;
}