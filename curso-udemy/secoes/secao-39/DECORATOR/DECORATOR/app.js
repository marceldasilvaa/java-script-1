import Professor from "./decorators/decorator.js";
import Aluno from "./decorators/decorator-aluno.js";

class Pessoa {
    nome;
    constructor(nome){
        this.nome = nome;
    }
    saudar(){
        console.log(`Olá, meu nome é ${this.nome}`)
    }
}



const pessoa = new Pessoa("Manuel");
pessoa.saudar();

const professor = new Professor(pessoa, "Programação");
professor.saudar();

const aluno = new Aluno(pessoa, 3);
aluno.saudar();