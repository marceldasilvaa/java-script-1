const valor = "R$ 1850,99"
const regexValor = /^(R\$) ([0-9]{4})[,]([0-9]{2})$/
const regexValorNome = /^(?<moeda>R\$) (?<inteiros>[0-9]{4})[,](?<centavos>[0-9]{2})$/
const dados = regexValorNome.exec(valor)
console.log(dados.groups.moeda)
console.log(dados.groups.inteiros)
console.log(dados.groups.centavos)

// console.log(valor.replace(regexValor, "$ $2.$3"))