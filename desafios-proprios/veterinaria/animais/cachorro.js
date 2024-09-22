import Animal from "../animal.js";

export default class Cachorro extends Animal {
    #doutor;

    constructor(especie, idade, raca, sexo, doutor) {
        super(especie, idade, raca, sexo);
        this.#doutor = doutor;
    }

    doutorRenan(doutor) {
        return `O atendimento do seu cachorro está marcado com nosso doutor ${doutor}`;
    }

    get doutor() {
        return this.#doutor;
    }
}