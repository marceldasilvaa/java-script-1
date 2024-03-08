function gerar() {
    var num = document.querySelector('#txtf')
    var n = Number(num.value)
    var sel = document.querySelector('#txtt')
    
    if (num.value.length == 0) {
        alert('[ERRO] Digite qualquer número!')
    } else if (n >= 0) {
        var res = document.querySelector('.res')
        var m = 1 || 10
        res.innerHTML = `${m}`
    }
}