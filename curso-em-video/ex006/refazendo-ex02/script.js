function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('#txtano')
    var res = document.querySelector('.res')
    if (fano.value.length == 0 || fano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var idade = ano - fano.value
        var sex = document.getElementsByName('radsex')
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }
    if (sex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'bebe-m.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'jovem-m.png')
        } else if (idade < 60) {
            img.setAttribute('src', 'adulto-m.png')
        } else {
            img.setAttribute('src', 'idoso-m.png')
        }
    } else {
        genero = 'Mulher'
        if (idade >= 0 && idade < 12) {
            img.setAttribute('src', 'bebe-f.png')
        } else if (idade < 21) {
            img.setAttribute('src', 'jovem-f.png')
        } else if (idade < 60) {
            img.setAttribute('src', 'adulto-f.png')
        } else {
            img.setAttribute('src', 'idoso-f.png')
        }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos: ${genero} com ${idade} anos.`
    res.appendChild(img)
}