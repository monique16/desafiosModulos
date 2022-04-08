function calculaIdade(anoNascimento) {
  return 2022 - anoNascimento;
}
module.exports.calculaIdade = calculaIdade;

function calculaIMC(peso, altura) {
    return peso / (altura * altura)
  }
module.exports.calculaIMC = calculaIMC;
