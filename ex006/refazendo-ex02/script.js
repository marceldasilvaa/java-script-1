function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var yano = document.querySelector('#txtano')
    var res = document.querySelector('.res')
    if (yano.value.length = 0) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    }
}