let valores = [2, 5, 7, 4, 9, 3]

//console.log(`${num}`)
/*
console.log(`${num[0]}`)
console.log(`${num[1]}`)
console.log(`${num[2]}`)
console.log(`${num[3]}`)
console.log(`${num[4]}`)
console.log(`${num[5]}`)

for(let pos = 0; pos < valores.length; pos++) {
    console.log(`O vetor de posição ${pos} tem o valor de ${valores[pos]}`)
}
*/
valores.sort()
for(let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}