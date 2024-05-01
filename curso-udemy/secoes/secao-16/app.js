const media = (num1, num2, num3) => {
    mediaNum = (num1 + num2 + num3)/3
    return mediaNum
}

console.log(media(4,100,26))

// Se for resolver uma única expressão, pode-se tirar as chaves e também o return

const areaQuadrado = lado => lado * lado
console.log(areaQuadrado(6))