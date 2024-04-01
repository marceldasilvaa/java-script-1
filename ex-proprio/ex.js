let num = document.querySelector('#fnum')
let lista = document.querySelector('#flista')
let res = document.querySelector('.res')
let valores = []

function adicionar() {
    if (isVazio(num.value) && !inLista(num.value, valores)) {
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

function isVazio(n) {
    if (Number(n.length) == 0 || Number(n) <= 0) {
        return false
    } else {
        return true
    }
}

function inLista(n, v) {
    if (v.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function analisar() {
    let res = document.querySelector('.res')
    
    if (primo == Number(num.value)) {
        res.innerHTML = `O valor da divisão é ${primo}, então o valor ${primo} é primo.`
    } else {
        alert('O valor digitado não é um número primo.')
    }
}
