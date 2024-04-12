// Cadastrando clientes no exemplo do banco

let nome
let sobrenome
let idade
let valorEmprestimo
let taxaDeJuros
let numAnos
let ehBomPagador

function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, numAnosCliente, ehBomPagadorCliente) {
    nome = nomeCliente
    sobrenome = sobrenomeCliente
    idade = idadeCliente
    valorEmprestimo = valorEmprestimoCliente
    taxaDeJuros = taxaCliente(idadeCliente)
    numAnos = numAnosCliente
    ehBomPagador = ehBomPagadorCliente
}

function taxaCliente(idadeCliente) {
    if (idade >= 18 && idade <= 25) {
        return 0.09
    } else if (idade >= 26 && idade <= 35) {
        return 0.08
    } else if (idade >= 36 && idade <= 50) {
        return 0.07
    } else {
        return 0.06
    }
}

cadastraCliente('Manoel', 'Silva', 25, 150000, 2, true)
console.log(nome)
console.log(sobrenome)
console.log(idade)
console.log(valorEmprestimo)
console.log(numAnos)
console.log(ehBomPagador)
console.log(taxaDeJuros)