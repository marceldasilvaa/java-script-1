let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('.res')
let valores = []

function adicionar() {
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores.push(Number(num.value))
        let opt = document.createElement('option')
        opt.text = `Valor ${num.value} adicionado.`
        lista.appendChild(opt)
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function isNumber(n) {
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