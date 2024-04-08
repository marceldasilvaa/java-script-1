let corredor1 = -0.15
let corredor2 = -0.11
let corredor3 = -0.1

if (corredor1 > corredor2 && corredor1 > corredor3) {
    console.log('O corredor 1 venceu.')
} else if (corredor2 > corredor3 && corredor2 > corredor1) {
    console.log('O corredor 2 venceu.')
} else {
    console.log('O corredor 3 venceu.')
}