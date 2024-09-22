import Animal from "../animal.js";

export default class Passaro extends Animal {
    #doutor;

    constructor(especie, idade, raca, sexo, doutor) {
        super(especie, idade, raca, sexo);
        this.#doutor = doutor;
    }

    doutorBn(doutor) {
        return `O atendimento do seu pássaro está marcado com nosso doutor ${doutor}`;
    }

    get doutor() {
        return this.#doutor;
    }
}