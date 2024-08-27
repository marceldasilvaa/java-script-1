import Carrinho from "./carrinho.js";


const carro2 = new Carrinho();
console.log(carro2.listaDeProdutos);
console.log(carro2.valorTotal);

const carro1 = new Carrinho();
carro1.adicionaProduto();
console.log(carro1.listaDeProdutos);
console.log(carro1.valorTotal);

const carro3 = new Carrinho();
console.log(carro3.listaDeProdutos);
console.log(carro3.valorTotal);