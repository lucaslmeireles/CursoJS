function meuEscopo(){
    const horarioh1 = document.querySelector('#h1horario');
    const horah1 = document.querySelector('#hora');
    const data = new Date()
    function zeroAEsquerda(num){
        return num >= 10 ? num : `0${num}`
    }
    function retornaDataBr(data){
        const dia = data.getDate();
        const mes = getMesTexto(data.getMonth());
        const ano = data.getFullYear();
        const hora = zeroAEsquerda(data.getHours());
        const min = zeroAEsquerda(data.getMinutes());
        const diaSemana = getDiaSemanaTexto(data.getDay());
        horarioh1.innerHTML = `${diaSemana}, ${dia} de ${mes} de ${ano}.`
        horah1.innerHTML = `${hora}:${min}`
    }
    function getDiaSemanaTexto(diaSemana){
        let diaSemanaTexto;
        switch (diaSemana) {
        case 0: 
            diaSemanaTexto = 'Domingo';
            return diaSemanaTexto;
        case 1:
            diaSemanaTexto = 'Segunda-Feira';
            return diaSemanaTexto
        case 2:
            diaSemanaTexto = 'Terça-Feira';
            return diaSemanaTexto
        case 3:
            diaSemanaTexto = 'Quarta-Feira';
            return diaSemanaTexto
        case 4:
            diaSemanaTexto = 'Quinta-Feira';
            return diaSemanaTexto
        case 5:
            diaSemanaTexto = 'Sexta-Feira';
            return diaSemanaTexto
        case 6:
            diaSemanaTexto = 'Sábado';
            return diaSemanaTexto
        default:
            diaSemanaTexto = '';
            return diaSemanaTexto
        }
    }
    function getMesTexto(mes){
        let mesTexto;
        switch (mes) {
        case 0: 
            mesTexto = 'Janeiro';
            return mesTexto;
        case 1:
            mesTexto = 'Fevereiro';
            return mesTexto
        case 2:
            mesTexto = 'Março';
            return mesTexto
        case 3:
            mesTexto = 'Abril';
            return mesTexto
        case 4:
            mesTexto = 'Maio';
            return mesTexto
        case 5:
            mesTexto = 'Junho';
            return mesTexto
        case 6:
            mesTexto = 'Julho';
            return mesTexto
        case 7:
            mesTexto = 'Agosto';
            return mesTexto
        case 8:
            mesTexto = 'Setembro';
            return mesTexto
        case 9:
            mesTexto = 'Outubro';
            return mesTexto
        case 10:
            mesTexto = 'Novembro';
            return mesTexto
        case 11:
            mesTexto = 'Dezembro';
            return mesTexto

        }
    }
    retornaDataBr(data)

}
meuEscopo();


