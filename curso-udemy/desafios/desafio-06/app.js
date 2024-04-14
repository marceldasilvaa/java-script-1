
function investiga() {
    let numSim = 0;
    let pergunta1 = prompt('Você telefonou para a vitima?');
    let pergunta2 = prompt('Você esteve no local do crime?');
    let pergunta3 = prompt('Você mora perto da vitima?');
    let pergunta4 = prompt('Você devia para a vitima?');
    let pergunta5 = prompt('Você ja trabalhou para a vitima?');

    if (pergunta1 === 'sim') {
        numSim += 1;
    }
    if (pergunta2 === 'sim') {
        numSim += 1;
    }
    if (pergunta3 === 'sim') {
        numSim += 1;
    }
    if (pergunta4 === 'sim') {
        numSim += 1;
    }
    if (pergunta5 === 'sim') {
        numSim += 1;
    }
    return numSim;
}

function classifica(numSim) {
    if (numSim === 0 || numSim === 1) {
        console.log('Inocente');
    } else if (numSim === 2) {
        console.log('Suspeito');
    } else if (numSim === 3 || numSim === 4) {
        console.log('Cúmplice');
    } else {
        console.log('Assassino');
    }
}

classifica(investiga())