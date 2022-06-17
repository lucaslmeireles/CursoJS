// Como trabalhar com apis
function aleatorio(min, max){
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max-min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if(typeof msg !== 'string'){
            reject('Bad Value');
        }
        setTimeout(() => {
            resolve(msg);
        }, tempo);    
    });
}

esperaAi('frase1', aleatorio(1,3))
    .then(resposta => {
        console.log(resposta);
        return esperaAi(123456, aleatorio(1,3))
        .then((resposta) => {
        console.log(resposta);
        return esperaAi('Frase3', aleatorio(1,3)).then(
                resposta => {
                    console.log(resposta)
                }
            )
        })
    })
    .catch(e => {
        console.log('ERRO', e);
    });



//Metodo antigo
// esperaAi('Msg legal', aleatorio(1,3), function{
//     esperaAi('Msg legal2', aleatorio(1,3), function{
//         esperaAi('Msg legal3', aleatorio(1,3))
//     })
// })