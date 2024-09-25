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
const msgErro = document.querySelector(".msgErro");
const infos = document.querySelector(".infoAgenda");
const dataAtendimento = document.querySelector(".dataAgendada");
const msgIncentivo = document.querySelector(".msgIncentivo");
const validacao = new Validacao();
const animal = new Animal();
const cachorro = new Cachorro();
const gato = new Gato();
const passaro = new Passaro();

window.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        try {
            agendar();
        } catch(erro) {
            msgErro.innerHTML = erro.message;
        }
    }
});
botaoAgenda.addEventListener('click', (e) => {
    e.preventDefault();
    try {
        agendar();
    } catch(erro) {
        msgErro.innerHTML = erro.message;
    }
});

// função principal
function agendar() {
    retornaDoutor();
    validaCampos();
    validaDoutor();
    validaData();
    msgEspecie();
}

// função de criar doutor
function retornaDoutor() {
    let doutor;
    if(especie.value === "Cachorro") {
        doutor = new Cachorro(especie.value, Number(idade.value), raca.value, sexo.value);
    } else if(especie.value === "Gato") {
        doutor = new Gato(especie.value, Number(idade.value), raca.value, sexo.value);
    } else if(especie.value === "Pássaro") {
        doutor = new Passaro(especie.value, Number(idade.value), raca.value, sexo.value);
    } else {
        throw new Error("Só atendemos Pássaros, Gatos ou Cachorros.");
    }
    return doutor;
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
        console.log(sexo.value);
    } else {
        console.log(sexo.value);
    }
}

function validaDoutor() {
    if(especie.value === "Gato") {
        infos.innerHTML = gato.drMarcel();
    } else if(especie.value === "Cachorro") {
        infos.innerHTML = cachorro.drRenan();
    } else if(especie.value === "Pássaro") {
        infos.innerHTML = passaro.drBruno();
    } else {
        throw new Error("Não foi possível marcar a consulta!");
    }
}

function validaData() {
    if(especie.value === "Gato") {
        dataAtendimento.innerHTML = gato.dataAtendimento();
    } else if(especie.value === "Cachorro") {
        dataAtendimento.innerHTML = cachorro.dataAtendimento();
    } else if(especie.value === "Pássaro") {
        dataAtendimento.innerHTML = passaro.dataAtendimento();
    }
}

function msgEspecie() {
    if(especie.value === "Gato") {
        msgIncentivo.innerHTML = gato.msgIncentivo(raca.value);
    } else if(especie.value === "Cachorro") {
        msgIncentivo.innerHTML = cachorro.msgIncentivo(raca.value);
    } else if(especie.value === "Pássaro") {
        msgIncentivo.innerHTML = passaro.msgIncentivo(raca.value);
    }
}