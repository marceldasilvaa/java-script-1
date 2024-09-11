const especie = document.getElementById("especieAnimal");
const idade = document.getElementById("idadeAnimal");
const raca = document.getElementById("racaAnimal");
const sexo = document.getElementById("sexoAnimal");
const botaoAgenda = document.querySelector(".botaoAgenda");

window.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        agendar();
    }
})
botaoAgenda.addEventListener('click', () => agendar());

function agendar() {
    validaCampos();
}

function validaEspecie() {
    const regex = /^[A-Z][a-z]+$/;
    if(regex.test(especie.value)) {
        alert("Tudo Ok");
    } else {
        throw new Error("O primeiro argumento deve conter uma letra maiúscula.");
    }
}

function validaCampos() {
    try {
        validaEspecie();
    } catch(erro) {
        alert(erro);
    }
}