import Validacao from "./validacao.js";
import Animal from "./animal.js";
import Cachorro from "./animais/cachorro.js";

const especie = document.getElementById("especieAnimal");
const idade = document.getElementById("idadeAnimal");
const raca = document.getElementById("racaAnimal");
const sexo = document.getElementById("sexoAnimal");
const botaoAgenda = document.querySelector(".botaoAgenda");
const validacao = new Validacao();
const animal = new Animal();
const cachorro = new Cachorro();

window.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        agendar();
    }
});
botaoAgenda.addEventListener('click', () => agendar());

function agendar() {
    validaCampos();
    validaDoutor();
    retornaDoutor();
}

function retornaDoutor() {
    const doutorRenan = "Renan";
    let doutor;
    if(especie.value === "Cachorro") {
        doutor = new Cachorro(especie.value, Number(idade.value), raca.value, sexo.value, doutorRenan);
    }
}

function validaCampos() {
    try {
        validacao.validaEspecie(especie.value);
        validacao.validaIdade(Number(idade.value));
        validacao.validaRaca(raca.value);
        validaSexo();
    } catch(erro) {
        alert(erro);
    }
}

function validaSexo() {
    if(document.querySelector("#sexoAnimal").value === "Masculino") {
        alert("Tudo ok!");
    } else {
        alert("Tudo ok fem!");
    }
}

function validaDoutor() {
    try {
        cachorro.doutorRenan();
    } catch(erro) {
        return alert(`${erro}`);
    }
}