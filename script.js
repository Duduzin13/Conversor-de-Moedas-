function Converter() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = (valorEmDolarNumerico / 5.45).toFixed(2);
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Dolar é $ " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}
function Converter1() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);

  var valorEmReal = (valorEmDolarNumerico / 7.76).toFixed(2);
  console.log(valorEmReal);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var valorConvertido = "O resultado em Euro é € " + valorEmReal;
  elementoValorConvertido.innerHTML = valorConvertido;
}