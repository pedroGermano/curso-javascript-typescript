const nome = 'Pedro';
const sobrenome = 'Germano';
const idade = 32;
const peso = 84;
const altura = 1.8; // <-- NESTE LOCAL
let imc = peso / (altura * altura);
let anoNascimento;
anoNascimento = 2020 - idade;

console.log(
  `
   ${nome} ${sobrenome} tem ${idade} anos, pesa 
   ${peso} kg tem ${altura} e seu IMC é de 
   ${imc} ${nome} ${sobrenome} nasceu em ${anoNascimento}`
);
