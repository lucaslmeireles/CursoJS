function aleatorio(min=1, max=3){
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

//codigo mais verboso
// esperaAi('Fase1', aleatorio(1,3))
//     .then((val) => {
//         console.log(val);
//         return esperaAi('Fase 2', aleatorio());
//     })
//     .then(fase => {
//         console.log(fase);
//         esperaAi('Fase 3',aleatorio())
//     })
//     .then(fase => console.log(fase))
//     .catch(e => e);

async function executa (){
    try {
        const fase1 = await esperaAi('Fase 1', aleatorio(1,3));
        console.log(fase1);
        const fase2 = await esperaAi('Fase 2', aleatorio());
        console.log(fase2);
        const fase3 = await esperaAi('Fase 3', aleatorio());
        console.log(fase3);
        console.log('Terminamos na fase:', fase3);
    } catch (e) {
        console.log(e);
    }
}

esperaAi('frase1', aleatorio(1,3))
    .then(async resposta => {
        console.log(resposta);
        const resposta_1 = await esperaAi(123456, aleatorio(1, 3));
        console.log(resposta_1);
        const resposta_2 = await esperaAi('Frase3', aleatorio(1, 3));
        console.log(resposta_2);
    })
    .catch(e => {
        console.log('ERRO', e);
    });

executa();