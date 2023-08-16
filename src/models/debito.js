import MetodoDePagamento from "./metodo-de-pagamento";

export class Debito extends MetodoDePagamento {
  calcularValor(valorTotalPedido) {
    return valorTotalPedido;
  }
}
