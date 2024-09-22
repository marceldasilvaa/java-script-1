import Animal from "../animal.js";

export default class Gato extends Animal {
    #doutor;

    constructor(especie, idade, raca, sexo, doutor) {
        super(especie, idade, raca, sexo);
        this.#doutor = doutor;    
    }

    doutorMarcel(doutor) {
        return `O atendimento do seu gato está marcado com nosso doutor ${doutor}`;
    }
    
    get doutor() {
        return this.#doutor;
    }
}