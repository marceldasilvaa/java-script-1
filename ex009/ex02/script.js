function gerar() {
    var num = document.querySelector('#txtf')
    var n = Number(num.value)
    
    if (num.value.length == 0) {
        alert('[ERRO] Digite qualquer número!')
    } else if (n >= 0) {
        var sel = document.querySelector('#txts')
        var opt = document.createElement('option')
        var x = ''
        var r = Number(n * x)
        //Primeiro option
        if (sel.options[0].selected) {
            sel.add(opt, sel.options[0])
            opt.value = 'Um'
            for (var x = '1'; n >= x; n = r) {
                opt.text = `${n} x ${x} = ${r}`
            }
        }
    }
}