let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('.res')
let valores = []

function adicionar() {
    if (!inLista(num.value, valores) && isVazio(num.value)) {
        valores.push(Number(num.value))
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}

function isVazio(n) {
    if (Number(n).length == 0) {
        return false
    } else {
        return true
    }
}

function inLista(n, l) {
    if (l.IndexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}