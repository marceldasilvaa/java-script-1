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
    
}

console.log(validaNome('Marcel'));
console.log(validaIdade(19));
console.log(validaSalario(3000));