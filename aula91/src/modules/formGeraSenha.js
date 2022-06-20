import geraPass from './geradora';

const pass = document.querySelector('.senha-gerada');
const qtdCaracter = document.querySelector('.qtd-caracter');
const chkMa = document.querySelector('.chk-maiusculas');
const chkMi = document.querySelector('.chk-minusculas');
const chkSi = document.querySelector('.chk-numeros');
const chku = document.querySelector('.chk-simbolos');
const gPass = document.querySelector('.gera-pass')
export default () => {
    gPass.addEventListener('click', (e) =>{
        e.preventDefault();
        gPass.innerHTML =  gera();
    })
}

function gera(){
    const senha = geraPass(
        qtdCaracter.value,
        chkMa.checked,
        chkMi.checked,
        chku.checked,
        chkSi.checked);

    return senha;
}