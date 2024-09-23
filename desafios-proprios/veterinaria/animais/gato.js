import Animal from "../animal.js";

export default class Gato extends Animal {
    #doutor;

    constructor(especie, idade, raca, sexo, doutor) {
        super(especie, idade, raca, sexo);
        this.#doutor = doutor;
    }

    drMarcel() {
        return "A consulta do seu gato está marcada com nosso doutor Marcel."
    }
    
    get doutor() {
        return this.#doutor;
    }
}