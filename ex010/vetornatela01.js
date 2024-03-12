let num = [ 4, 6, 3, 1, 7, 5]

/*
num.push(9)
num.sort()
num[6] = 2
console.log(num)
console.log(`O vetor num tem ${num.length} elementos`)

for(let ind = 0; ind < num.length; ind++) {
    console.log(`O vetor num com indice ${ind} possui o valor de ${num[ind]}`)
}

for(let ind in num) {
    console.log(`O vetor num com indice ${ind} possui o valor de ${num[ind]}`)
}
*/

let ind = num.indexOf(3)
if (ind == -1) {
    console.log('Não foi possível encontrar o valor!')
} else {
    console.log(ind)
}