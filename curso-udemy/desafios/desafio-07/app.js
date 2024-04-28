const relatorioNotas = [10, 2, 6, 7, 9, 8, 7, 6, 3, 5, 1];
let totalAlunos = 0;

for (let notas of relatorioNotas) {
    if (notas < 7) {
        totalAlunos += 1;
        console.log(`${totalAlunos}`);
    }
};

/*
console.log(`Temos um total de ${totalAlunos} alunos reprovados!`);
relatorioNotas.forEach((nota, indiceNot) => {
    if (nota < 7) {
        totalAlunos += 1;
        console.log(`Temos um total de ${totalAlunos} alunos reprovados!`);
    }
});
*/