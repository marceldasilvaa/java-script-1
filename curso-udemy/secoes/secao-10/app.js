let nome = "Manuel"
let sobrenome = "Silva"
let idade = 26
let valorEmprestimo
let taxaDeJuros
let numAnos
let juros
let montante

/*
    18 - 25 anos -> 9%
    26 - 35 anos -> 8%
    36 - 50 anos -> 7%
    51 ou mais   -> 6%
*/

if (idade >= 18 && idade <= 25) {
    taxaDeJuros = 0.09
} else if (idade >= 26 && idade <= 35) {
    taxaDeJuros = 0.08
} else if (idade >= 36 && idade <= 50) {
    taxaDeJuros = 0.07
} else {
    taxaDeJuros = 0.06
}
/*
while (valorEmprestimo != 0) {
    valorEmprestimo = parseInt(prompt('Insira o valor do emprestimo'))
    numAnos = parseInt(prompt('Insira o numero de anos'))
    juros = valorEmprestimo * taxaDeJuros * numAnos
    montante = valorEmprestimo + juros
    console.log(montante)
}
*/

do {
    valorEmprestimo = parseInt(prompt('Insira o valor do emprestimo'))
    numAnos = parseInt(prompt('Insira o numero de anos'))
    juros = valorEmprestimo * taxaDeJuros * numAnos
    montante = valorEmprestimo + juros
    console.log(montante)
} while (valorEmprestimo != 0)