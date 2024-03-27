let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('.res')
let valores = []

function adicionar() {
    if (isVazio(num.value)) {
        valores.push(num.value)
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}

function isVazio(n) {
    if (Number(n.length) == 0 || Number(n) <= 0) {
        return false
    } else {
        return true
    }
}