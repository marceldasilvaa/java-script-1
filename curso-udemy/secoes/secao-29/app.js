function soma(num1, num2) {
    if(typeof num1 !== 'number') {
        throw TypeError('O primeiro argumento deve ser um numero.');
    } else if(typeof num2 !== 'number') {
        throw TypeError('O segundo argumento deve ser um numero.');
    }
    return num1 + num2;
}

try {
    console.log(soma(19, 38));
} catch(erro) {
    console.log(erro);
} finally {
    console.log('Deseja saber mais alguma coisa?');
}

try {
    console.log(soma('Marcel', 38));
} catch(erro) {
    console.log(erro);
} finally {
    console.log('Deseja saber mais alguma coisa?');
}

try {
    console.log(soma(27, 'Marcel'));
} catch(erro) {
    console.log(erro);
} finally {
    console.log('Deseja saber mais alguma coisa?');
}