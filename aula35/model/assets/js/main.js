const div = document.querySelector('.paragrafos');
const paragrafos = div.querySelectorAll('p');
const estiloBody = getComputedStyle(document.body);
const backgroundColor = estiloBody.backgroundColor;
for (let p of paragrafos){
    p.style.backgroundColor = backgroundColor;
    p.style.color = '#FFF'
}