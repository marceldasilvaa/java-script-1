function falaCebolinha(frase) {
    let fraseCebolinha = '';
    for (const letra of frase) {
        if(letra === 'r') {
            fraseCebolinha += 'l';
        } else {
            fraseCebolinha += letra;
        }
    }
    return fraseCebolinha;
}

console.log(falaCebolinha('Fala mano Cebolinha, pode me dizer o que vamos aprontar hoje?'));
console.log(falaCebolinha('nao troco as letras de proposito'));