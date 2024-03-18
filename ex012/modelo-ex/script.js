let num = document.querySelector('#fnum')
let lista = document.querySelector('#flist')
let res = document.querySelector('.res')
let valores = []

function adicionar() {
    if (isNumber(num.value) && !inList(num.value)) {
        alert('Tudo ok!')
    } else {
        alert('vas')
    }
}

function isNumber(n) {
    if (n > 1 || n < 100) {
        return true
    } else {
        return false
    }
}