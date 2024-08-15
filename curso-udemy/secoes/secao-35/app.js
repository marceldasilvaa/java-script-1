// Métodos match e exec para regex

let produtos = "1837642-C\n2364873783-B\n2738748-C\n31789493094-A\n3884845-Z"
console.log(produtos)
const regex = /[0-9]+[-][C]/g
//const resultado = produtos.match(regex)
const resultado = regex.exec(produtos)
console.log(resultado)