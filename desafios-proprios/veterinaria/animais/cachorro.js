import Animal from "../animal.js";

export default class Cachorro extends Animal {
    #doutor;

    constructor(especie, idade, raca, sexo, doutor) {
        super(especie, idade, raca, sexo);
        this.#doutor = doutor;
    }

    doutorRenan(especie, doutor) {
        if(especie == "Passaro") {
            return `O atendimento do seu cachorro está marcado com nosso doutor ${doutor}`;
        } else {
            throw new Error("Não foi possível marcar o atendimento");
        }
    }

    get doutor() {
        return this.#doutor;
    }
}