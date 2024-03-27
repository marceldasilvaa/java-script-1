let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('.res')
let valores = []

function adicionar() {
    if (taVazio(num.value)) {
        alert('OK')
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}

function taVazio(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}