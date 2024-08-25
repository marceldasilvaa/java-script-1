export default class Cliente {
    #nome;
    #sobrenome;
    #idade;
    #valorEmprestimo;
    #anosEmprestimo;
    #avalistas;

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
}

//taxadejuros
//ehbompagador