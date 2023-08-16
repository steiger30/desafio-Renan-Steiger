import { Cardapio } from "./models/cardapio";
import { Credito } from "./models/credito";
import { Debito } from "./models/debito";
import { Dinheiro } from "./models/dinheiro";
import { Pedido } from "./models/pedido";

class CaixaDaLanchonete {
  calcularValorDaCompra(metodoDePagamento, itens) {
    try {
      const cardapio = new Cardapio();
   
      let metodo;
      switch (metodoDePagamento) {
        case "dinheiro":
          metodo = new Dinheiro();
          break;
        case "credito":
          metodo = new Credito();
          break;
        case "debito":
          metodo = new Debito();
          break;
        default:
          throw new Error("Forma de pagamento inválida!");
      }

      const pedido = new Pedido(itens, cardapio);
      const valorTotalPagar = metodo.calcularValor(pedido.calcularValorTotal());
      return valorTotalPagar.toLocaleString("pt-br", {
        style: "currency",
        currency: "BRL",
      });
    } catch (error) {
      return error.message;
    }
  }
}

export { CaixaDaLanchonete };
