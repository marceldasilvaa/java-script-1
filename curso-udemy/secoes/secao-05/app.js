let nome = "Manuel"
let sobrenome = "Silva"
let idade = 24
const numCliente = 294057

let valorEmprestimo = 150000
let taxaDeJuros = 0.10
let ehBomPagador = false

/*
if (ehBomPagador) {
    console.log(`O cliente ${nome} é um bom pagador.`)
} else {
    console.log(`O cliente ${nome} não é um bom pagador.`)
}
*/

console.log(`O cliente ${nome}` + (ehBomPagador ? ' é um bom pagador.' : ' não é um bom pagador.'))
