let quantidade = 1
let preco = 0

/*
do {
    quantidade = parseInt(prompt('Digite a quantidade de itens'))
    for (let c = 1; c < quantidade; c++) {
        preco += 1.99
    }
    console.log(preco)
} while (preco < quantidade)
*/

for (let c = 50; quantidade <= c; quantidade++) {
    preco += 1.99
    console.log(quantidade)
    console.log(preco)
}

// Resolução da aula

console.log('LOJA QUASE DOIS - TABELA DE PREÇOS')
for (let i = 1; i <= 50; i++) {
    console.log(`${i} - R$ ${i * 1.99}`)
}