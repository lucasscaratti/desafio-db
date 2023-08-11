import prompts from "prompts";

class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        return "";
    }

    
}

console.log('teste');

(async () => {
    const response = await prompts({
      type: 'number',
      name: 'value',
      message: 'How old are you?',
      validate: value => value < 18 ? `Nightclub is 18+ only` : true
    });
  
    console.log(response); // => { value: 24 }
  })();
  
export { CaixaDaLanchonete };
