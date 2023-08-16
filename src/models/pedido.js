import { PedidoItem } from "./pedidoItem";

export class Pedido {
  constructor(itens, cardapio) {
    if (itens.length === 0) {
      throw new Error("Não há itens no carrinho de compra!");
    }

    this.itens = itens.map((item) => {
      const [codigo, quantidade] = item.split(",");
      const pedidoItem = new PedidoItem(codigo, parseInt(quantidade));
      if (pedidoItem.codigo === "queijo" || pedidoItem.codigo === "chantily") {
        this.validandoItemExtra(codigo, itens);
      }
      return pedidoItem;
    });
    this.cardapio = cardapio;
  }

  calcularValorTotal() {
    let valorTotalPedido = 0;
    this.itens.forEach((item) => {
      const itemCardapio = this.cardapio.buscarItem(item.codigo);
      valorTotalPedido += itemCardapio.valor * item.quantidade;
    });
    return valorTotalPedido;
  }

  validandoItemExtra(item, itens) {
    let itemPrincipalEncontrado;
    const primeirosValores = itens.map((cod) => {
      const splitValues = cod.split(",");
      return splitValues[0];
    });
    if (item === "queijo") {
      itemPrincipalEncontrado = primeirosValores.find(
        (cod) => cod === "sanduiche"
      );
    }
    if (item === "chantily") {
      itemPrincipalEncontrado = primeirosValores.find((cod) => cod === "cafe");
    }
    if (!itemPrincipalEncontrado) {
      throw new Error("Item extra não pode ser pedido sem o principal");
    }
  }
}
