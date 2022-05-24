const numero = Number(prompt('Digite um numero :'));
const numeroTitulo = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');

numeroTitulo.innerHTML += numero;
texto.innerHTML += `Seu numero é: ${numero}<br />`;
texto.innerHTML += `A raiz é: ${Math.sqrt(numero)}<br />`;
texto.innerHTML +=  `${numero} é inteiro: ${Number.isInteger(numero)} <br />`;
texto.innerHTML +=  `É NaN: ${Number.isNaN(numero)}<br />`;
texto.innerHTML +=   `Arredondado para baixo ${Math.floor(numero)}<br />`;
texto.innerHTML += `Arredondado para cima ${Math.ceil(numero)}<br />`;
rexto.innerHTML += `Com duas casas decimais ${numero.toFixed(2)}<br />`;
 
