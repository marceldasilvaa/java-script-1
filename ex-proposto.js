var horario = 23

console.log(`São ${horario} horas`)

if (horario < 6) {
    console.log('Boa madrugada!')
} else if (horario < 12) {
    console.log('Bom dia!')
} else if (horario < 18) {
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}