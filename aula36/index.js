// while 
function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

const min = 1;
const max = 7;
let rand  = random(min, max);
console.log(rand);

while (rand !== 6){
    rand = random(min, max);
    console.log(rand);
}

do{  //executa sempre uma vez a condição
    rand = random(min, max);
    console.log(rand);
} while  (rand !== 6);

console.log('Achei');