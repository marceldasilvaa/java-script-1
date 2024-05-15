/*
try {
    let x = y + 10;
    console.log(x);
} catch (erro) {
    console.log(erro);
    console.log(erro.name);
}
*/

/*
try {
    let num = 1;
    num.toUpperCase();
} catch (erro) {
    console.log(erro);
    console.log(erro.name);
} finally {
    console.log('Fim da instrucao try/catch/finally');
}
*/

try {
    let nome = 'Marcel';
    console.log(nome.toUpperCase());
} catch (erro) {
    console.log(erro);
} finally {
    console.log('Tudo ok!');
}