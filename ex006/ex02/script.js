function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var yano = document.querySelector('#txtano')
    var res = document.querySelector('.res')
    var idade = ano - yano.value

    res.innerHTML = `Sua idade é ${idade}`
}