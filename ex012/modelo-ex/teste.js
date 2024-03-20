let nota = [1, 4, 6, 8, 8, 9, 9, 10, 10]

novanota = nota.filter(function (um, ja) {
    return nota.indexOf(um) === ja
})

console.log(novanota)