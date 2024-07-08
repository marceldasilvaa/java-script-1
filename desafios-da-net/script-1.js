function informacaoLogin(usuario, senha) {
    if(senha.length === usuario.length) {
        return 'Erro, sua senha nao pode ser igual ao seu nome de usuario.'
    } else {
        return `Cadastro efetuado com sucesso. Usuario: ${usuario}.  Senha: ${senha}.`
    }
}

console.log(informacaoLogin('marcelalves', 'marcelalves2653'));