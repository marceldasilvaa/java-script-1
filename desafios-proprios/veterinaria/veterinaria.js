import Validacao from "./validacao.js";
import Animal from "./animal.js";
import Cachorro from "./animais/cachorro.js";
import Gato from "./animais/gato.js";
import Passaro from "./animais/passaro.js";

const especie = document.getElementById("especieAnimal");
const idade = document.getElementById("idadeAnimal");
const raca = document.getElementById("racaAnimal");
const sexo = document.getElementById("sexoAnimal");
const botaoAgenda = document.querySelector(".botaoAgenda");
const validacao = new Validacao();
const animal = new Animal();
const cachorro = new Cachorro();
const gato = new Gato();
const passaro = new Passaro();
const doutorRenan = "Renan";
const doutorBn = "Bruno";
const doutorMarcel = "Marcel";
const formulario = document.querySelector("form");
const section = document.querySelector(".informacoesAgendamento");

window.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        agendar();
    }
});
botaoAgenda.addEventListener('click', () => agendar());

function agendar() {
    retornaDoutor();
    exibeDoutor();
    validaCampos();
}

function retornaDoutor() {
    let doutor;
    if(especie.value === "Cachorro") {
        doutor = new Cachorro(especie.value, Number(idade.value), raca.value, sexo.value);
    } else if(especie.value === "Gato") {
        doutor = new Gato(especie.value, Number(idade.value), raca.value, sexo.value);
    } else if(especie.value === "Passaro") {
        doutor = new Passaro(especie.value, Number(idade.value), raca.value, sexo.value);
    } else {
        doutor = exibeMsgErro();
    }
    return doutor;
}

/*
function exibeMsgErro() {
    const msgErro = document.createElement("p");
    msgErro.classList.add("msgErro");
    formulario.insertBefore(msgErro, botaoAgenda);

    return msgErro.innerText = `Só atendemos pássaros, gatos ou cachorros`;
}
*/

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
        console.log(sexo.value);
    } else {
        console.log(sexo.value);
    }
}

/*
function validaDoutor() { 
    if(especie.value === "Cachorro") {
        try {
            const exibeDoutorRenan = cachorro.doutorRenan(especie.value, doutorRenan);
            return exibeDoutorRenan;
        } catch(erro) {
            return alert(`${erro}`);
        }
    } else if(especie.value === "Gato") {
        try {
            const exibeDoutorMarcel = gato.doutorMarcel(especie.value, doutorMarcel);
            return exibeDoutorMarcel;
        } catch(erro) {
            return alert(`${erro}`);
        }
    } else if(especie.value === "Passaro") {
        try {
            const exibeDoutorBn = passaro.doutorBn(especie.value, doutorBn);
            return exibeDoutorBn;
        } catch(erro) {
            return alert(`${erro}`);
        }
    }
}
*/

function exibeDoutor() {
    try {
        const drMarcel = gato.doutorMarcel(especie.value, doutorMarcel);
        return section.appendChild(drMarcel);
    } catch(erro) {
        alert(`${erro}`);
    }
}