// const tresHoras = 60 * 3 * 60 * 1000
// const umDia = 60*60*24*1000
// const data = new Date(0 + tresHoras + umDia); // 10/10/1970  Timestamp Unix
// const data = new Date(2022, 5, 2, 15, 55, 54); // ano, mes -1 , dia, hora ,min , seg , mili
// const data = new Date('2022-06-2 08:25:14');
// const data = new Date(1654196698293);
// console.log(data.toString());
// console.log('Dia', data.getDate());
// console.log('Mes', data.getMonth() + 1); //mes começa no 0
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Minutos', data.getMinutes());
// console.log('Dia da semana', data.getDay()); // 0 domingo a 6 sabado
// console.log(Date.now());

function zeroAEsquerda(num){
    return num >= 10 ? num : `0${num}`
}
function formataDate(data){
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() +1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    return `${dia}/${mes}/${ano} ${hora}:${min}`
}

const data = new Date();
const dataBrasil = formataDate(data);
console.log(dataBrasil)