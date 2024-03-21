let num = document.querySelector('#fnum')
let lista = document.querySelector('#flist')
let res = document.querySelector('.res')
let valores = []

function adicionar() {
    if (isNumber(num.value) && !inList(num.value, valores) && isIgual(num.value, valores)) {
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

function isIgual(n, v) {
    if (Number(n) === Number(v)) {
        return false
    } else {
        return true
    }
}

function finalizar() {
    if (taDentro(num.value, valores)) {
        opt = []
        res.innerHTML = `Ao todo, temos ${valores.length} números cadastrados.`
    } else {
        alert('Não é possível finalizar sem valores adicionados.')
    }
}

function taDentro(v, l) {
    if (Number(v) === (Number(l))) {
        return true
    } else {
        return false
    }
}