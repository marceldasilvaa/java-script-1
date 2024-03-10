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
            opt.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(opt)
            c++
            opt.value = `t${c}`
        }
    }
}