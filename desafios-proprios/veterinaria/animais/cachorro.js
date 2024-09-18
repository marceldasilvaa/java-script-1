import Animal from "../animal.js";

export default class Cachorro extends Animal {
    #doutor;

    constructor(especie, idade, raca, sexo, doutor) {
        super(especie, idade, raca, sexo);
        this.#doutor = doutor;
    }

    doutorRenan() {
        return alert(`O atendimento do seu cachorro está marcado com nosso doutor ${this.#doutor}`);
    }

    get doutor() {
        return this.#doutor;
    }
}