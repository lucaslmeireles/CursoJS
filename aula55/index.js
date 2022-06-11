// funções geradoras lazy evaluation

function* geradora1() {
    //codigo 
    yield 'valor 1';
    //codigo 
    yield 'valor 2';
    //codigo 
    yield 'valor 3';
}
const g1 = geradora1();

function* geradora2() {
    let i = 0;
    while (true) {
        yield i;
        i++;
    }
}

function* geradora3() {
    yield 1;
    yield 2;
    yield 3;
}

function* geradora4(){
    yield* geradora3();
    yield 4;
    yield 5;
    yield 6;
}

const g4 =geradora4();

for (let f of g4){
    console.log(f)
}