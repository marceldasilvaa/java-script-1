let num = document.querySelector('#fnum')
let lista = document.querySelector('#flist')
let res = document.querySelector('.res')
let valores = []

function adicionar() {
    if (isNumber(num.value) && !inList(num.value, valores)) {
        valores = [num.value]
        let opt = document.createElement('option')
        opt.text = `O valor ${valores} foi adicionado.`
        lista.appendChild(opt)
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
}

function isNumber(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inList(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function finalizar() {
    res.innerHTML = `Existem ${valores.length} elementos dentro da caixa.`
}