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