/* Elemento HTML referente a categoria */
const categoria = document.querySelector("#category");
/* Elemento HTML referente a lista das letras erradas*/
const letrasErradas = document.querySelector(".wrongLetters");
/* Elemento HTML referente a palavra oculta
   Utilizaremos esse mesmo elemento para exibir as mensagens do jogo*/
const palavraInterface = document.querySelector(".dashes");
/* Array com elementos HTML referentes aos olhos do personagem */
const olhos = Array.from(document.querySelectorAll(".eyes"));
/* Array com elementos HTML referentes as partes do corpo */
let partesBoneco = Array.from(document.querySelectorAll("#person div"));
partesBoneco = partesBoneco.slice(2, partesBoneco.length);
/* Palavra corrente */
let palavraProposta;
/* Lista das letras erradas */
let letrasErradasArray = [];
/* Index da parte do corpo corrente */
let indiceBoneco;
/* Numero de chances do jogador */
const numTentativas = 7;
/* Valor para opacidade dos olhos */
const opacidadeOlhos = 0.3;

const categorias = {
    filmes: ['transformers', 'carros', 'lassie', 'homem aranha', 'a ara do gelo', 'top gun maverick'],
    frutas: ['maça', 'banana', 'melancia', 'melao', 'mamao', 'uva', 'laranja', 'pessego'],
    Animais: ['cachorro', 'gato', 'leao', 'guepardo', 'lobo', 'orca', 'beluga', 'baleia', 'golfinho'],
    profissoes: ['programador', 'administrador', 'engenheiro', 'pescador', 'medico', 'professor']
}

function retornaArrayCategorias() {
    return Object.keys(categorias);
}

function retornaCategorias() {
    const arrayCategorias = retornaArrayCategorias();
    let indiceCategorias = retornaNumAleatorio(arrayCategorias.length);
    return arrayCategorias[indiceCategorias];
}

function exibeCategoria() {
    categoria.innerHTML = retornaCategorias();
}

function retornaNumAleatorio(max) {
    return Math.floor(Math.random() * max);
}

function definePalavraProposta() {
    const palavrasArray = categorias[categoria.innerHTML];
    const indicePalavrasArray = retornaNumAleatorio(palavrasArray.length);
    palavraProposta = palavrasArray[indicePalavrasArray];
    console.log(palavraProposta);
    ocultaPalavra();
}

function ocultaPalavra() {
    let palavraOcultada = '';
    for(let c = 0; c < palavraProposta.length; c++) {
        palavraOcultada += '-';
    }
    exibePalavraInterface(palavraOcultada);
}

function exibePalavraInterface(palavra) {
    palavraInterface.innerHTML = palavra;
}

function tentativa(letra) {
    if(palavraProposta.includes(letra)) {
        atualizaPalavraInterface(letra);
    } else {
        letrasErradasArray.push(letra);
        letrasErradas.innerHTML = `Letras erradas: ${letrasErradasArray}`;
        if(partesBoneco.length > indiceBoneco) {
            desenhaBoneco();
        }
    }
}

function atualizaPalavraInterface(letra) {
    let palavraAux = '';
    for(let i = 0; i < palavraProposta.length; i++) {
        if(palavraProposta[i] === letra) {
            palavraAux += letra;
        } else if(palavraInterface.innerHTML[i] != '-') {
            palavraAux += palavraInterface.innerHTML[i];
        } else {
            palavraAux += '-';
        }
    }
    exibePalavraInterface(palavraAux);
}

/*
Recebe o evento do teclado e passa apenas o valor da letra para a função tentativa
*/
function retornaLetra(e) {
    tentativa(e.key);
}

/*
Desenha a parte do corpo corrente
*/
function desenhaBoneco() {
    partesBoneco[indiceBoneco].classList.remove("hide");
    indiceBoneco++; 
}

/* 
Desenha os olhos do personagem
*/
function desenhaOlhos() {
    olhos.forEach((olho => {
        olho.style.opacity = 1;
        olho.style.zIndex = 10;
    }));
}

/*
Oculta as partes do corpo do personagem
*/
function ocultaBoneco() {
    olhos.forEach((olho => {
        olho.style.opacity = opacidadeOlhos; 
    }));
    partesBoneco.forEach(parteBoneco => {
        parteBoneco.classList.add("hide");
    });
}

/*
Inicia as configurações do jogo
*/
function iniciaJogo() {
    indiceBoneco = 0;
    letrasErradasArray = [];
    ocultaBoneco();
    exibeCategoria();
    definePalavraProposta();
    letrasErradas.innerHTML = "Letras erradas: ";
    window.addEventListener("keypress", retornaLetra);
}

window.addEventListener("load", iniciaJogo);
