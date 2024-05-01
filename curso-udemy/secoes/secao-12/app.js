for (let ehImpar = 0; ehImpar <= 20; ehImpar++) {
    ehImpar = parseInt(prompt('Digite um numero entre 0 e 20'))
    if (ehImpar % 2 !== 0) {
        continue
    }
    console.log(ehImpar)
}