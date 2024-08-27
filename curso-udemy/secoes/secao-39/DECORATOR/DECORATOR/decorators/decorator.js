export default class Professor {
    constructor(pessoa, disciplina){
        this.pessoa = pessoa;
        this.nome = pessoa.nome;
        this.disciplina = disciplina;
    }

    saudar(){
        console.log(`Olá, meu nome é ${this.nome}. Sou professor de ${this.disciplina}`);
    }
}