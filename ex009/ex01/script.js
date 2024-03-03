function contar() {
    var início = document.querySelector('#fini')
    var fim = document.querySelector('#ffim')
    var passo = document.querySelector('#fpas')
    var res = document.querySelector('.res')

    if (início.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
    } else {
        var ini = Number(início.value)
        var fi = Number(fim.value)
        var pas = Number(passo.value)

        res.innerHTML = `Contando: `
    }
}