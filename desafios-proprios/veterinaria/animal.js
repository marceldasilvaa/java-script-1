export default class Animal {
    #especie;
    #idade;
    #raca;
    #sexo;

    constructor(especie, idade, raca, sexo) {
        this.#especie = especie;
        this.#idade = idade;
        this.#raca = raca;
        this.#sexo = sexo;
    }
    
    get especie() {
        return this.#especie;
    }

    get idade() {
        return this.#idade;
    }

    get raca() {
        return this.#raca;
    }

    get sexo() {
        return this.#sexo;
    }
}