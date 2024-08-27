export default class Aluno {
    constructor(aluno, serie) {
        this.aluno = aluno;
        this.nome = aluno.nome;
        this.serie = serie;
    }

    saudar() {
        console.log(`Olá, meu nome é ${this.nome} e estou cursando a ${this.serie} série`);
    }
}