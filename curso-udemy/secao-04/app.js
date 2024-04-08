let nome = "Manuel"
let sobrenome = "Silva"
let idade = 24
let valorEmprestimo
let taxaDeJuros
let juros
let numAnos
let montante

/*  Calcular montante = valorEmprestimo + juros
    juros = valorEmprestimo * taxaDeJuros * numAnos
*/

for (let c = 0; c < 3; c++) {
    valorEmprestimo = parseInt(prompt("Digite o valor do emprestimo"))
    numAnos = parseInt(prompt("Digite o numero de anos"))
    juros = valorEmprestimo * taxaDeJuros * numAnos
    montante = valorEmprestimo + juros
    console.log(montante)
}