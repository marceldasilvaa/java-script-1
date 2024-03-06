function contar() {
    var ini = document.querySelector('#txti')
    var fim = document.querySelector('#txtf')
    var pas = document.querySelector('#txtp')
    var res = document.querySelector('.res')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('[ERRO] Preencha todos os campos!')
    } else if (pas.value == 0) {
        alert('Passo deve ser preenchido, quando vazio, consideramos o valor de 1')
        pas.value = '1'
    } else {
        res.innerHTML = 'Contando: '
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(pas.value)
        if (i < f) {
            for (var c = i; c <= f; c += p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (var c = i; c >= f; c -= p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } 
    } 
}