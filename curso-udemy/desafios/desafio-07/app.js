function geraRelatorio(array) {
    let totalAprovados = 0;
    let totalReprovados = 0;
    for (const nota of array) {
        if (nota < 7) {
            totalReprovados += 1;
        } else {
            totalAprovados += 1;
        }
    }
    return `Aprovados: ${totalAprovados}. Reprovados: ${totalReprovados}.`
}

console.log(geraRelatorio([10, 2, 5, 8, 4, 8, 9, 10, 8, 8, 9, 8]));