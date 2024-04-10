let quantidade
let preco = 1.99

do {
    quantidade = parseInt(prompt('Digite a quantidade de itens'))
    for (let c = 1; c < quantidade; c++) {
        preco += 1.99
    }
    console.log(preco)
} while (preco < quantidade)