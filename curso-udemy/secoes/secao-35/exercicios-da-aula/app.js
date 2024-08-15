//const produtos = "FI-DS192485\nFO-DS938475\nFI-DS284784\nFI-DS948473\nVW-DS823794\nVW-DS938498\nGM-DS938493\nGM-DS394890\nFO-DS298384"
// console.log(produtos)
//const regex = /[A-Z]{2}[-][A-Z]{2}[0-9]{6}/g
//const resultado = produtos.match(regex)
//console.log(resultado)

const numeroTelefone = "21 9 7658-9424"
console.log(numeroTelefone)
const regex = /^[0-9]{2} [9] [0-9]{4}[-][0-9]{4}$/g
const resultado = numeroTelefone.match(regex)
console.log(resultado)