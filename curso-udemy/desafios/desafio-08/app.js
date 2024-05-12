function alteraSenha(senha) {
    let senhaAuxiliar = '';
    for (let c = 0; c < senha.length; c++) {
        senhaAuxiliar += '*';
    }
    return senhaAuxiliar;
}

const usuario = {
    nome: 'Marcel',
    email: 'marcelsilva@gmail.com',
    senha: 'mar583782'
}

usuario.senha = alteraSenha(usuario.senha);
console.log(usuario);