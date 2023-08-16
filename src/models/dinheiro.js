import MetodoDePagamento from "./metodo-de-pagamento";

export class Dinheiro extends MetodoDePagamento {
  calcularValor(valorTotalPedido) {
    const desconto = (valorTotalPedido * 5) / 100;
    return valorTotalPedido - desconto;
  }
}
