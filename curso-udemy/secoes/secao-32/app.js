/*
console.log("Transformers")
setTimeout(console.log, 1500, "Quebrando Regras")
console.log("Homem Aranha")


console.log("Olá")
setTimeout(console.log, 1500, "Marcel")
console.log("Alves")
*/

function exibeNome(nome, callback) {
    setTimeout(() => {
        console.log(nome)
        callback()
    }, 1500)
}

console.log("Olá, ")
exibeNome("Marcel", function() {
    console.log("Silva")
})