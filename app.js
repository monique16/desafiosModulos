const { calculaIdade, calculaIMC } = require('./funcoes.js');

const anoNascimento = process.argv[2];
const peso = process.argv[3];
const altura = process.argv[4];

const idade = calculaIdade(anoNascimento);
const imc = calculaIMC(peso,altura);

console.log(calculaIdade(anoNascimento));
console.log(calculaIdade(peso,altura));
