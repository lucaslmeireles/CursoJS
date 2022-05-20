const nome = 'Lucas'; 
const sobrenome = 'Meireles'; 
const idade = 19;
const peso = 84;
const altura = 1.72;
let imc;
let anoNascimento;
imc = peso/ (altura*altura);
anoNascimento = 2022 - idade;
console.log(nome + ' ' + sobrenome,'nasceu em', anoNascimento, 'pesa',peso,'kg,  tem IMC',imc, 'e mede ',altura,'m');
console.log(`${nome}  ${sobrenome} nasceu em ${anoNascimento}  pesa ${peso} kg  tem IMC ${imc}, e mede ${altura} m`);

