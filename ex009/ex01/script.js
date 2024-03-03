function contar() {
    var início = document.querySelector('#fini')
    var fim = document.querySelector('#ffim')
    var passo = document.querySelector('#fpas')
    var res = document.querySelector('.res')

    if (início.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        var i = Number(início.value)
        var f = Number(fim.value)
        var p = Number(passo.value)
        for (var c = i; c <= f; c += p) {
            res.innerHTML = `Contando: ${c}`
        }
    }
}