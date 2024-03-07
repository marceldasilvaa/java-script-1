function gerar() {
    var num = document.querySelector('#txtf')
    var n = Number(num.value)
    var sel = document.querySelector('#txtt')
    
    if (num.value.length == 0) {
        alert('[ERRO] Digite qualquer número!')
    } else if (n >= 0) {
        var opt = document.createElement('option')
        opt.innerHTML = '1'
        appendChild('option')
    }
}