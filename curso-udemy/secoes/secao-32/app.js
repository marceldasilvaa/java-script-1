/*
console.log("Transformers")
setTimeout(console.log, 1500, "Quebrando Regras")
console.log("Homem Aranha")


console.log("Olá")
setTimeout(console.log, 1500, "Marcel")
console.log("Alves")
*/

function exibeNome(nome) {
    const promise = (resolve, reject) => {
        setTimeout(() => {
            if (nome === "Marcel") {
            resolve(nome)
            } else {
                reject(new Error("Nome inválido!!!"))
            }
        }, 1500)
    }
    return new Promise(promise)
}

function exibeSobrenome() {
    console.log("Silva")
}

async function funcaoAsync() {
    try {
        const meuNome = await exibeNome("Manuel")
        console.log(meuNome)
        await exibeSobrenome()
        await console.log("Tudo bem?")
        await console.log("Quantos anos você tem?")
    } catch(erro) {
        console.error(erro)
    }
}

console.log("Olá, ")
funcaoAsync()