function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var yano = document.querySelector('#txtano')
    var res = document.querySelector('.res')
    

    if (yano.value.length == 0 || yano.value > ano) {
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var sex = document.getElementsByName('radsex')
        var idade = ano - yano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    }

    if (sex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 12) {
            //crianca
            img.setAttribute('src', 'bebe-m.png')
        } else if (idade < 20) {
            //jovem 
            img.setAttribute('src', 'jovem-m.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'adulto-m.png')
        } else {
            //idoso
            img.setAttribute('src', 'idoso-f.png') 
        }
    } else {
        genero = 'Mulher'
        if (idade >= 0 && idade < 12) {
            //criança
            img.setAttribute('src', 'bebe-f.png')
        } else if (idade < 20) {
            //jovem 
            img.setAttribute('src', 'jovem-f.png')
        } else if (idade < 50) {
            //adulta
            img.setAttribute('src', 'adulto-f.png')
        } else {
            //idosa
            img.setAttribute('src', 'idoso-f.png')        
        }
    }

    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} de ${idade} anos.`
    res.appendChild(img)
}