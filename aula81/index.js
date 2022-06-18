function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            return reject('Bad Value');
        }
        setTimeout(() => {
            resolve(msg.toUpperCase());
        }, tempo);    
    });
}
// metodos para promises
const promises = [
    esperaAi('Promise 1',aleatorio(1,5)),
    esperaAi('Promise 2',aleatorio(1,5)),
    // esperaAi(2344,3000),
    esperaAi('Promise 3',aleatorio(1,5)),
];

// race
Promise.race(promises)
    .then((valor) => {
        console.log(valor)
    })
    .catch((e) => console.log(e));


//resolve todas as promises
Promise.all(promises)
.then((valor) => {
    console.log(valor);
})
.catch((e) => {
    console.log(e);
})

//.resolve
function baixaPag(){
    const emCache = false;

    if(emCache){
        return Promise.resolve('Pagina em cache');
    } else {
        return esperaAi('Baixei a pag', 3000);
    }
}

baixaPag()
.then(dadosPagina => console.log(dadosPagina))
.catch(e => console.log(e));