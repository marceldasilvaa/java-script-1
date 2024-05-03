//Cadastrando clientes utilizando objetos!

function cadastraCliente(nomeCliente, sobrenomeCliente, idadeCliente, valorEmprestimoCliente, 
    numAnosCliente = 2, ehBomPagadorCliente = false, avalistasCliente) {
        cliente = {
            nome: nomeCliente,
            sobrenome: sobrenomeCliente,
            idade: idadeCliente,
            emprestimo: {
                valorEmprestimo: valorEmprestimoCliente,
                taxaDeJuros: taxaCliente(idadeCliente),
                numAnos: numAnosCliente,
                ehBomPagador: ehBomPagadorCliente,
                avalistas: avalistasCliente
            },
            adicionaAvalistas: function(nomeAvalista) {
                this.emprestimo.avalistas.push(nomeAvalista);
            },
            removeAvalista: function() {
                this.emprestimo.avalistas.pop();
            },
            editaAvalista: function(avalista, indiceAvalista) {
                this.emprestimo.avalistas[indiceAvalista] = avalista;
            },
            ordenaAvalista: function() {
                this.emprestimo.avalistas.sort();
            },
            exibeAvalista: function() {
                this.emprestimo.avalistas.forEach((avalista, indAvalista) => {
                    console.log(`O ${indAvalista + 1}° avalista é ${avalista}.`);
                });
            }
        }
        return cliente;
}

function taxaCliente(idadeCliente) {
    if (idadeCliente >= 18 && idadeCliente <= 25) {
        return 0.09
    } else if (idadeCliente >= 26 && idadeCliente <= 35) {
        return 0.08
    } else if (idadeCliente >= 36 && idadeCliente <= 50) {
        return 0.07
    } else {
        return 0.06
    }
}

const cliente1 = cadastraCliente('Mauricio', 'Silva', 27, 150000, 5, true, ['Alice', 'Cléber', 'Amanda'], );

/*
cliente1.adicionaAvalistas('Paula');
cliente1.adicionaAvalistas('Roberto');
cliente1.removeAvalista();
cliente1.removeAvalista();
cliente1.editaAvalista('Alice Alves', 0);
cliente1.ordenaAvalista();
cliente1.adicionaAvalistas('Daniel');
cliente1.exibeAvalista();
*/

function adicionaInfLogin(cliente, email, senha) {
    if(email.indexOf("@") !== -1 && senha.length > 5) {
        cliente.login = {
            email: email,
            senha: senha
        }
        return cliente;
    } else {
        return 'Credenciais inválidas';
    }
}

console.log(adicionaInfLogin(cliente1, "edval@gmail.com", "edv47638"));
console.log(adicionaInfLogin(cliente1, 'edval.com', 'edva4535'));
console.log(adicionaInfLogin(cliente1, 'edval@gmail.com', '4352'));