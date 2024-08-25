import Cliente from "./cliente.js";

const nomeCliente = document.querySelector("#nomeCliente");
const sobrenomeCliente = document.querySelector("#sobrenomeCliente");
const idadeCliente = document.querySelector("#idadeCliente");
const valorEmprestimo = document.querySelector("#emprestimoCliente");
const anosEmprestimo = document.querySelector("#anosEmprestimo");
const avalistasCliente = document.querySelector("#avalistasDoCliente");
const botaoAddEmprestimo = document.querySelector("#botaoEmprestimo");
const botaoLimpar = document.querySelector("#botaoLimpar");
const botaoCalculaTaxa = document.querySelector("#botaoCalculaTaxa");

botaoAddEmprestimo.addEventListener('click', () => geraCliente());
botaoLimpar.addEventListener('click', () => limpaDados());
botaoCalculaTaxa.addEventListener('click', () => calculaTaxaDeJuros());

window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        geraCliente();
    }
})

function geraCliente() {
    let cliente = new Cliente(nomeCliente.value, sobrenomeCliente.value, Number(idadeCliente.value), Number(valorEmprestimo.value), Number(anosEmprestimo.value), avalistasCliente.value);
    return cliente;
}

function adicionaCliente() {
    const cliente = geraCliente();
    exibeDados(cliente);
    calculaTaxaDeJuros();
}

function exibeDados(cliente) {
    
}

function calculaTaxaDeJuros() {

}