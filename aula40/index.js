function mostraHora(){
    let date = new Date();

    return date.toLocaleTimeString('pt-BR', {
            hour12:false
    });
}

function funcaoDoInterval(){
    console.log(mostraHora());
}
            // funcao a ser executada , intervalo de tempo em
const timer = setInterval(function() { console.log(mostraHora());}, 1000);
setTimeout( function () { clearInterval(timer);},3000);
setTimeout( function () { console.log('Ola Mundo');},4000);