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
    const promise = (resolve, reject) => {
        setTimeout(() => {
            if (filme.nome === "") {
                reject(new Error("Nome inválido"))
            } else {
                filmes.push(filme)
                resolve(filme)
            }
        }, 3000)
    }
    return new Promise(promise)
}

async function funcaoAsync() {
    try {
        const homemAranha = await adicionaFilme({nome: "Homem Aranha", genero: "Ação"})
        console.log(homemAranha)
        await adicionaFilme({nome: "Velozes e Furiosos 1", genero: "Ação"})
        await adicionaFilme({nome: "Velozes e Furiosos 2", genero: "Ação"})
        await adicionaFilme({nome: "Velozes e Furiosos 3", genero: "Ação"})
        await adicionaFilme({nome: "Velozes e Furiosos 4", genero: "Ação"})
        exibeFilmes()
    } catch(erro) {
        console.error(erro)
    }
}

funcaoAsync()