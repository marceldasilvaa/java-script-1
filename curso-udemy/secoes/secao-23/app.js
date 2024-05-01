const quadroFuncionarios = [["Financeiro", "Kilma", "Daniel"], ["Marketing", "Leticia", "Sarah"], ["Diretoria", "Keila", "Marcos"]];

quadroFuncionarios.forEach((departamento, indiceDep) => {
    departamento.forEach((funcionario, indiceFun) => {
        console.log(`${indiceFun + 1} - ${funcionario}`);
    })
})