const form = document.querySelector('form')
const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const resultado = document.querySelector('#resultado');

function calculaIMC(evento){
    evento.preventDefault();
    const imc = Number(peso.value) / Math.sqrt(Number(altura.value));
    if (imc <= 18.45 && imc >= 24.9 ){
        resultado.innerHTML = 'Normal'
    }
    return resultado;
}
form.addEventListener('submit', calculaIMC);



/*

MENOR QUE 18,5	MAGREZA	0
ENTRE 18,5 E 24,9	NORMAL	0
ENTRE 25,0 E 29,9	SOBREPESO	I
ENTRE 30,0 E 39,9	OBESIDADE	II
MAIOR QUE 40,0	OBESIDADE GRAVE	III
*/