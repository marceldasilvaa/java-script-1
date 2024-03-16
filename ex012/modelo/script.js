let num = document.querySelector('#txtn')

function adc() {
    if (num.value.length == 0) {
        alert('Valor inválido ou já encontrado na lista.')
    } else {
        let n = Number(num.value)
        let sel = document.querySelector('#self')
        sel.innerHTML = ''
        let opt = document.createElement('option')
        opt.text = `O número digitado foi ${n}`
        opt.value = 'v1'
        sel.appendChild(opt)
    }
}