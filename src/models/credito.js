import MetodoDePagamento from "./metodo-de-pagamento";

export class Credito extends MetodoDePagamento {
  calcularValor(valorTotalPedido) {
    const acrescimo = (valorTotalPedido * 3) / 100;
    const valorComAcrescimo = valorTotalPedido + acrescimo;
    const valorArredondado = valorComAcrescimo.toFixed(2);
    return parseFloat(valorArredondado);
  }
}
