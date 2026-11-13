//faz o cálculo
function calcularJuros(capital, taxa, meses) {
  return capital * (taxa / 100) * meses;
}

module.exports = { calcularJuros };