const rand = (min, max) => Math.floor(Math.random() * (max -min) + min);
const gMa = () => String.fromCharCode(rand(65,91));
const gMi = () => String.fromCharCode(rand(97,123));
const gnu = () => String.fromCharCode(rand(48,58));
const sim = '.,><;:/^][{}+=-_)(*%$#@!';
const gsim = () => sim[rand(0, sim.length)];

export default function gePass(qtd, ma, mi, nu, sim){
    const passArray = [];
    qtd = Number(qtd);

    for (let i=0; i < qtd;i++){
        ma && passArray.push(gMa());
        mi && passArray.push(gMi());
        nu && passArray.push(gnu());
        sim && passArray.push(gsim());
    }

    return passArray.join(''.slice(0,qtd));
}
