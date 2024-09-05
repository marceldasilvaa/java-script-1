const nome = document.getElementById("nomeAnimal");
const idade = document.getElementById("idadeAnimal");
const especie = document.getElementById("especieAnimal");
const raca = document.getElementById("racaAnimal");
const sexo = document.getElementById("sexoAnimal");
const botaoAgenda = document.querySelector(".botaoAgenda");

window.addEventListener('keypress', (e) => {
    if(e.key === 'Enter') {
        agendar();
    }
})
botaoAgenda.addEventListener('click', () => agendar());