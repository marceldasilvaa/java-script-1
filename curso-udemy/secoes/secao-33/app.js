const listaFilmes = document.querySelector('#listaFilmes')

const filmes = [
    {nome: 'Quebrando Regras', genero: 'Ação'},
    {nome: 'Top Gun Maverick', genero: 'Ação'},
    {nome: 'Transformers', genero: 'Ação'}
]

const criaElementosUi = function() {
    let aux = ""
    filmes.forEach((filme) => {
        aux += `<li> Nome: ${filme.nome}, Gênero: ${filme.genero}`
    })
    listaFilmes.innerHTML = aux
}

function exibeFilmes() {
    setTimeout(criaElementosUi, 2000)
}

function adicionaFilme(filme) {
    setTimeout(() => {
        filmes.push(filme)
    }, 3000)
    console.log(filmes)
}

adicionaFilme({nome: "Homem Aranha", genero: "Ação"})
exibeFilmes()