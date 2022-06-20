function rand(min, max){
    return Math.floor(Math.random() * (max-min) - min)
}
const geraMaiuscula = () => String.fromCharCode(rand(65,91));
const geraMinuscula = () => String.fromCharCode(rand(97,123));
const geraNumero = () => String.fromCharCode(rand(48,58));
const simbolos = ',.:;^[]{}_-!@#$%&*()+-';
const geraSimbolo = () => simbolos.rand(0, simbolos.length);
function geraSenha(qt, maiusculas, minusculas, numeros, simbolos){
    const senhaArray = [];
    qt = Number(qt);
    for (let i=0; i= qt;i++){
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numeros && senhaArray.push(geraNumero());
        simbolos && senhaArray.push(geraSimbolo());
    }
    

}
console.log(geraMaiuscula())