function contaLetras(frase) {
    let contagem = 0;
    for (const letra of frase) {
        if (letra.indexOf(frase)) {
            contagem += 1;
        } else {
            return 'Nao foi encontrado nenhuma letra.';
        }
    }
    return `Temos ${contagem} espaços na frase.`;
}

console.log(contaLetras('Eu nao sei'));