export default class Cliente {
    #nome;
    #sobrenome;
    #idade;
    #valorEmprestimo;
    #anosEmprestimo;
    #avalistas = [];

    constructor(nome, sobrenome, idade, valorEmprestimo, anosEmprestimo, avalistas) {
        this.#nome = nome;
        this.#sobrenome = sobrenome;
        this.#idade = idade;
        this.#valorEmprestimo = valorEmprestimo;
        this.#anosEmprestimo = anosEmprestimo;
        this.#avalistas = avalistas;
    }

    get nome() {
        return this.#nome;
    }

    get sobrenome() {
        return this.#sobrenome;
    }

    get idade() {
        return this.#idade;
    }

    get valorEmprestimo() {
        return this.#valorEmprestimo;
    }

    get anosEmprestimo() {
        return this.#anosEmprestimo;
    }

    get avalistas() {
        return this.#avalistas;
    }

    taxarCliente(idade) {
        if (idade >= 18 && idade <= 25) {
            return 0.09;
        } else if (idade >= 26 && idade <= 35) {
            return 0.08;
        } else if (idade >= 36 && idade <=50) {
            return 0.07;
        } else {
            return 0.06;
        }
    }
}
//ehbompagador