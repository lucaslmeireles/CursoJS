function meuEscopo(){
    const form = document.querySelector('#form')
    const resultado = document.querySelector('#resultado');

    function calculaIMC(evento){
        const peso = document.querySelector('#peso');
        const altura = document.querySelector('#altura');
        const alturaEmMetros = Number(altura.value) /100
        evento.preventDefault();
        const imc = Number(peso.value)  / Math.pow(alturaEmMetros, 2);
        if (imc < 18.5){
           resultado.innerHTML = 'Magreza';
           resultado.style.background= 'blue';
        }
        else if (imc >= 18.45 && imc <= 24.9 ){
            resultado.innerHTML = 'Normal';
            resultado.style.background= 'green';
        } else if (imc >= 25  && imc <= 29.9 ){
            resultado.innerHTML = 'SOBREPESO	I';
            resultado.style.background= 'yellow';
        } else if (imc >= 30 && imc <= 39.9 ){
            resultado.innerHTML = 'OBESIDADE	II';
            resultado.style.background= 'orange';
        } else if (imc >= 40 ){
            resultado.innerHTML ='OBESIDADE GRAVE	III';
            resultado.style.background= 'red';
        } else{
            resultado.innerHTML = 'Não foi possivel calcular, verifique novamente'
        }
        
    }
    form.addEventListener('submit', calculaIMC);
    
    
}
meuEscopo();

/*

MENOR QUE 18,5	MAGREZA	0
ENTRE 18,5 E 24,9	NORMAL	0
ENTRE 25,0 E 29,9	SOBREPESO	I
ENTRE 30,0 E 39,9	OBESIDADE	II
MAIOR QUE 40,0	OBESIDADE GRAVE	III
*/