function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var yano = document.querySelector('#txtano')
    var res = document.querySelector('.res')

    if (yano.value.length == 0 || yano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('radsex')
        var genero = ''
        var idade = ano - yano.value
    }

    if (sex[0].checked) {
        genero = 'Homem'
    } else {
        genero = 'Mulher'
    }

    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
}