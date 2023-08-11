import prompts from "prompts";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        return "";
    }    
}

console.log('teste');

(async () => {
const metodoDePagamento = await prompts({
      type: 'text',
      name: 'value',
      message: 'Qual a forma de pagamento?',
      validate: value => value == 'debito' || value == 'credito' || value == 'dinheiro' ? true : `Forma de pagamento inválida!`
    });
  
    console.log(metodoDePagamento);
  })();

export { CaixaDaLanchonete };
