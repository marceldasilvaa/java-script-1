/*
function validaCadastro(nomeCliente, idade, salario, sexo, estadoCivil) {
    
}
*/

function validaNome(nomeCliente) {
    for (const letra of nomeCliente) {
        if (nomeCliente.length > 3) {
            return nomeCliente;
        } else {
            return 'Cadastro invalido.';
        }
    }
}

function validaIdade(idadeCliente) {
    if (idadeCliente < 0 && idadeCliente > 150) {
        return 'Cadastro invalido.'
    } else {
        return idadeCliente;
    }
}

function validaSalario(salarioCliente) {
    if (salarioCliente < 0) {
        return 'Informacao invalida.';
    } else {
        return salarioCliente;
    }
}

function validaSexo(sexoCliente) {
    if (sexoCliente === 'masculino') {
        return 'M';
    } else if (sexoCliente === 'feminino') {
        return 'F';
    } else {
        return 'Sexo nao informado.'
    }
}

function validaEstadoCivil(estadoCivil) {
    if (estadoCivil === 'solteiro') {
        return 'S';
    } else if (estadoCivil === 'casado') {
        return 'C';
    } else if (estadoCivil === 'viuvo') {
        return 'V';
    } else if (estadoCivil === 'divorciado') {
        return 'D';
    } else {
        return 'Cadastro invalido.';
    }
}

console.log(validaNome('Marcel'));
console.log(validaIdade(19));
console.log(validaSalario(3000));
console.log(validaSexo('masculino'));
console.log(validaEstadoCivil('divorciado'));