function fizzBuzz(num1){
    if (typeof num1 !=='number') return num1;
    if (num1 % 3 === 0 && num1 % 5 === 0) return 'Fizz Buzz';
    if (num1 % 3 === 0) return 'Fizz';
    if (num1 % 5 === 0) return 'Buzz';
    return num1

}
function random(min, max){
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}

for (let i =0; i<=10;i++){
    const rand = random(0,100);
    console.log(rand, fizzBuzz(rand));
}

