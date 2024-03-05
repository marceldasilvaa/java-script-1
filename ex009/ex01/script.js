function contar() {
    var ini = document.querySelector('#txti')
    var fim = document.querySelector('#txtf')
    var pas = document.querySelector('#txtp')
    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert('[ERRO] Preencha todos os campos!')
    }
}