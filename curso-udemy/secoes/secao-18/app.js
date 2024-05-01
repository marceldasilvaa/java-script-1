// Cadastrando clientes no exemplo do banco

let nome
let sobrenome
let idade
let valorEmprestimo
let taxaDeJuros
let numAnos
let ehBomPagador
let avalistas

function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, numAnosCliente = 2, ehBomPagadorCliente = false, avalistasCliente) {
    nome = nomeCliente
    sobrenome = sobrenomeCliente
    idade = idadeCliente
    valorEmprestimo = valorEmprestimoCliente
    taxaDeJuros = taxaCliente(idadeCliente)
    numAnos = numAnosCliente
    ehBomPagador = ehBomPagadorCliente
    avalistas = avalistasCliente
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

cadastraCliente('Manoel', 'Silva', 25, 150000, 5, true, ['Manoel', 'Cauan', 'Thales'])

function adicionaAvalista(avalista) {
    avalistas.push(avalista);
}

function removeAvalista() {
    avalistas.pop();
}

function editaAvalista(indice, nomeAvalista) {
    avalistas[indice] = nomeAvalista;
}

function ordenaAvalista() {
    return avalistas.sort();
}

function exibeAvalista() {
    avalistas.forEach((avalista, indice) => {
        console.log(`O ${indice + 1}º avalista é: ${avalista}`)
    });
}

adicionaAvalista('Lucas');
adicionaAvalista('Conne');
adicionaAvalista('Amanda');
//console.log(avalistas);
//console.log(avalistas.length);

removeAvalista();
removeAvalista();
//console.log(avalistas);

editaAvalista(0, 'Manoel Silva');
//console.log(avalistas[0]);

//console.log(ordenaAvalista());

exibeAvalista()