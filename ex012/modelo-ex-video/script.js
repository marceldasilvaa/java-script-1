let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('.res')
let valores = []

function adicionar() {
    if (isNumero(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
    } else {
       alert('Valor inválido ou já adicionado na lista.')
    }
}

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, v) {
    if (v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}