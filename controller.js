// liga o model e a view
const model = require("./model");
const view = require("./view");

function calcular(capital, taxa, meses) {
  const juros = model.calcularJuros(capital, taxa, meses);
  view.mostrar(juros);
}

module.exports = { calcular };