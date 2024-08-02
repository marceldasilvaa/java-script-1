const nomeBusca = document.querySelector(".input")
const msgErro = document.querySelector(".msgErro")
const botaoBusca = document.querySelector("#botao-busca")
const poster = document.querySelector(".poster")
const titulo = document.querySelector("#titulo")
const sinopse = document.querySelector("#sinopse")
const ano = document.querySelector("#ano")
const duracao = document.querySelector("#duracao")
const genero = document.querySelector("#genero")
const atores = document.querySelector("#atores")
const diretor = document.querySelector("#diretor")
const apiKey = "49eaa790";
const imgDefault = "./default_image.png";

async function buscaFilme(nomeBusca){
     const resposta = await fetch(`http://www.omdbapi.com/?i=${nomeBusca}&apikey=${apiKey}`);
     return resposta.json();
}

botaoBusca.addEventListener("click", () => {
     limparCampos()
     core()
})

async function core() {
     const filme = await buscaFilme(nomeBusca.value)
     defineValores(filme)
}

function defineValores(filme) {
     titulo.textContent = filme.Title
     sinopse.textContent = filme.Plot
     genero.textContent = `Genre: ${filme.Genre}`
     ano.textContent = `Year: ${filme.Year}`
     duracao.textContent = `Run Time: ${filme.Runtime}`
     atores.textContent = `Actors: ${filme.Actors}`
     diretor.textContent = `Director: ${filme.Director}`
     poster.setAttribute("src", filme.Poster)
}

function limparCampos() {
     titulo.textContent = ""
     sinopse.textContent = ""
     genero.textContent = ""
     ano.textContent = ""
     duracao.textContent = ""
     atores.textContent = ""
     diretor.textContent = ""
     poster.setAttribute("src", imgDefault)
}