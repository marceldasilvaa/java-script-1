let nome = "Manuel"
let sobrenome = "Silva"
let idade = 24
const numCliente = 294057

let valorEmprestimo = 150000
let taxaDeJuros = 0.10
let numAnos = 6
let ehBomPagador = true

/*  Calcular montante = valorEmprestimo + juros
    juros = valorEmprestimo * taxaDeJuros * numAnos
*/

let juros = valorEmprestimo * taxaDeJuros * numAnos
let montante = valorEmprestimo + juros

console.log(juros)
console.log(montante)
console.log(`Para o cliente ${nome} que pegou ${valorEmprestimo} emprestado, ao final de ${numAnos} anos pagando uma taxa de ${taxaDeJuros} ao ano, ele terá que desembolsar R$${montante}.`)