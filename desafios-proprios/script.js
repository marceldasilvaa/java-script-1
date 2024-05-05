function mostraNota(nota) { 
    if(nota <= 10 && nota >= 1) {
        return nota;
    } else {
        return 'O valor nao pode ser adicionado.'
    }
}

console.log(mostraNota(10));