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
}

const marcel = new Pessoa("Marcel", "Alves", 19, 21555260756);
console.log(marcel);
marcel.saudacao();