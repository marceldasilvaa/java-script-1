import Animal from "../animal.js";

export default class Passaro extends Animal {
    #doutor;

    constructor(especie, idade, raca, sexo, doutor) {
        super(especie, idade, raca, sexo);
        this.#doutor = doutor;
    }

    doutorBn(especie, doutor) {
        const msgDoutor = document.createElement("p");
        msgDoutor.classList.add("infoAgenda");
        msgDoutor.innerHTML = "";

        if(especie == "Passaro") {
            return msgDoutor.innerHTML += `O atendimento do seu pássaro está marcado com nosso doutor ${doutor}`;
        } else {
            throw new Error("Não foi possível marcar o atendimento");
        }
    }

    get doutor() {
        return this.#doutor;
    }
}