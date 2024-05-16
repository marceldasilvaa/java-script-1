/*
try {
    let num = 1;
    console.log(num.toUpperCase());
} catch(erro) {
    if(erro instanceof TypeError) {
        console.log('TypeError');
    } else if(erro instanceof ReferenceError) {
        console.log('ReferenceError');
    }
}
*/

function validaCompra(mensagem) {
    this.nome = 'Dado inválido.';
    this.mensagem = mensagem;
}

function dadosCliente(nomeCliente, valorCompra, meioPagamento) {
    if(typeof nomeCliente !== 'string') {
        throw new validaCompra('O primeiro argumento deve ser uma letra.');
    } else if(typeof valorCompra !== 'number') {
        throw new validaCompra('O segundo argumento deve ser um número.');
    } else if(typeof meioPagamento !== 'string') {
        throw new validaCompra('O terceiro argumento deve ser uma letra.');
    } else {
        const cliente = {
            nome: nomeCliente,
            valor: valorCompra,
            pagamento: meioPagamento
        }
        return cliente;
    }
}

try {
    console.log(dadosCliente('Marcel', 500, 'Dinheiro'));
} catch(erro) {
    console.log(erro.nome);
    console.log(erro.mensagem);
} finally {
    console.log('Deseja realizar mais alguma operação?');
}

try {
    console.log(dadosCliente(43, 500, 'Dinheiro'));
} catch(erro) {
    console.log(erro.nome);
    console.log(erro.mensagem);
} finally {
    console.log('Deseja realizar mais alguma operação?');
}