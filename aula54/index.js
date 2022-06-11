// função recursiva se chama ela mesmo de volta

function recursiva(max){
    if (max >= 10) return;
    max++;
    console.log(max);
    recursiva(max);
}

recursiva(1);