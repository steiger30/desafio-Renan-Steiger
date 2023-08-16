import { Cardapio } from "./cardapio";

export class PedidoItem {
  constructor(codigo, quantidade) {
    this.validarQuantidade(quantidade);
    this.validarCodigo(codigo);
    this.codigo = codigo;
    this.quantidade = quantidade;
  }

  validarQuantidade(quantidade) {
    if (quantidade <= 0) {
      throw new Error("Quantidade inválida!");
    }
  }
  validarCodigo(codigo) {
    const cardapio = new Cardapio();
    cardapio.buscarItem(codigo);
  }
}
