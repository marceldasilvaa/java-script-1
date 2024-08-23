/*
class Contador {
    #cont;
    constructor() {
        this.#cont = 0;
    }

    #ehPositivo() {
        if (this.#cont > 0) {
            return true;
        } else {
            return false;
        }
    }

    incrementar() {
        this.#cont += 1;
    }

    decrementar() {
        if (this.#ehPositivo) {
            this.#cont -= 1;
        } else {
            console.log("O contador não pode ser menor do que zero.");
        }
    }
}

const contador = new Contador();
contador.incrementar();
contador.decrementar();
contador.ehPositivo();
*/

class Pessoa {
    nome;
    sobrenome;
    idade;
    #cpf;

    constructor(nome, sobrenome, idade, cpf) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.#cpf = cpf;
    }

    saudacao() {
        console.log(`Olá, eu sou o ${this.nome} ${this.sobrenome} e tenho ${this.idade} anos. Meu cpf é ${this.#cpf}.`);
    }

    get cpf() {
        return this.#cpf;
    }

    set cpf(novoCPF) {
        this.#cpf = novoCPF;
    }
}

class Aluno extends Pessoa {
    serie;
    turma;

    constructor(nome, sobrenome, idade, cpf, serie, turma) {
        super(nome, sobrenome, idade, cpf);
        this.serie = serie;
        this.turma = turma;
    }
    
    saudacao() {
        console.log(`Olá, eu sou ${this.nome} e faço a ${this.serie}° série.`);
    }
}

class Professor extends Pessoa {
    disciplina;
    horas;

    constructor(nome, sobrenome, idade, cpf, disciplina, horas) {
        super(nome, sobrenome, idade, cpf);
        this.disciplina = disciplina;
        this.horas = horas;
    }

    saudacao() {
        console.log(`Olá, eu sou o ${this.nome}, e sou professor de ${this.disciplina}.`);
    }
}

const marcel = new Aluno("Marcel", "Alves", 19, 21555260756, 3, "A");
const manuel = new Professor("Manuel", "Silva", 29, 89483908767, "Programação", 60);

console.log(marcel);
console.log(manuel);
marcel.saudacao();
manuel.saudacao();