import Animal from "../animal.js";

export default class Passaro extends Animal {
    #doutor;

    constructor(especie, idade, raca, sexo, doutor) {
        super(especie, idade, raca, sexo);
        this.#doutor = doutor;
    }

    doutorBn(especie, doutor) {
        if(especie == "Passaro") {
            return `O atendimento do seu pássaro está marcado com nosso doutor ${doutor}`;
        } else {
            throw new Error("Não foi possível marcar o atendimento");
        }
    }

    get doutor() {
        return this.#doutor;
    }
}