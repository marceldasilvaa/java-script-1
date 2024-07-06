const container = document.querySelector('.container')
const paleta1 = document.querySelector('#paleta1')
const paleta2 = document.querySelector('#paleta2')
const paleta3 = document.querySelector('#paleta3')
const erro = document.querySelector('.erro')
const input = document.querySelector('.input')
const botaoCadastra = document.querySelector('.botao_adc')
const listaAtividades = document.querySelector('.lista_atividades')

function cadastraAtividade(){
    if(input.value.length > 3){
        erro.style.display = "none"
        criaAtividade()
    }else{
        erro.style.display = "grid"
        erro.innerHTML = `${input.value} não é uma atividade válida!`
    }
    limpaInput()
}

function limpaInput(){
    input.value = ""
}

window.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        cadastraAtividade()
    }
});