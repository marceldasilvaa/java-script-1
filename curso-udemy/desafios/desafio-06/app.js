function investigacao() {
    let numSim = 0;
    let pergunta1 = prompt('Você telefonou para a vítima?');
    let pergunta2 = prompt('Você esteve no local do crime?');
    let pergunta3 = prompt('Você mora perto da vitima?');
    let pergunta4 = prompt('Você devia para a vitima?');
    let pergunta5 = prompt('Você ja trabalhou com a vitima?');
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
    if (numSim === 0 || 1) {
        return `Com ${numSim} sim, você é um inocente.`;
    }
    if (numSim === 2) {
        return `Com ${numSim} sim, você é um suspeito.`;
    }
    if (numSim === 3 || 4) {
        return `Com ${numSim} sim, você é um cúmplice.`;
    }
    if (numSim === 5) {
        return `Com ${numSim} sim, você é um assassino.`;
    }
}

console.log(investigacao())