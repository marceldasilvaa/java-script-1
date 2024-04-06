function gerar() {
    let num = document.querySelector('#txtf')
    let tab = document.querySelector('#txts')
    if (num.value.length == 0) {
        alert('[ERRO] Digite qualquer numero!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let opt = document.createElement('option')
            opt.value = `tab${c}`
            opt.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(opt)
            c++
        }
    }
}







































/*function gerar() {
    var num = document.querySelector('#txtf')
    var n = Number(num.value)
    
    if (num.value.length == 0) {
        alert('[ERRO] Digite qualquer número!')
    } else if (n >= 0) {
        var sel = document.querySelector('#txts')
        var opt = document.createElement('option')
        var p = n
        var x = ''
        var r = p * x
        //Primeiro option
        if (sel.options[0].selected) {
            sel.add(opt, sel.options[0])
            opt.value = 'Um'
            for(var x = 2; p >= x; p = r) {
                opt.text = `${n} X ${x} = ${r}`
            }
        }
    }
}*/