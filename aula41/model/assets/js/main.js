function meuEscopo(){
    const relogio = document.querySelector('.texto-relogio');
    const iniciar = document.querySelector('.iniciar');
    const pausar = document.querySelector('.pausar');
    const zerar = document.querySelector('.zerar');
    let i = 0;
    let timer;

    function criaHoraDosSegundos(segundos){
        const data = new Date(segundos * 1000)
        return data.toLocaleTimeString('pt-BR',{
            hour12: false,
            timeZone: 'GMT'
        })
    }
    function relogioTimer(){
        timer = setInterval(function() {  
            i++
            relogio.innerHTML = criaHoraDosSegundos(i);
         }, 1000);
    }

    document.addEventListener('click', function(e){
        const el = e.target;
        if (el.classList.contains('zerar')){
            clearInterval(timer);
            relogio.classList.remove('texto-relogio-pause');
            relogio.innerHTML = '00:00:00'
            i = 0    
        } 
        if (el.classList.contains('pausar')){
            relogio.classList.add('texto-relogio-pause');
            clearInterval(timer);    
        }
        if (el.classList.contains('iniciar')){
            clearInterval(timer);
            relogio.classList.remove('texto-relogio-pause');
            relogioTimer();    
        }
    })
    }
meuEscopo();

