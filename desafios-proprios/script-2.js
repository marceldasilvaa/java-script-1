function validaCadastro(nome, idade, salario, sexo, estadoCivil) {
    for (const letra of nome) {
        if(nome.length > 3) {
            return nome;
        } else {
            return 'Cadastro invalido';
        }
    }
    for (const numero in idade) {
        if (idade < 0 && idade > 150) {
            return 'Cadastro invalido';
        } else {
            return idade;
        }
    }
}

console.log(validaCadastro('Marcel', 19));