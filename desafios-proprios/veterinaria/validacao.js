import Animal from "./animais/animal.js";

export default class Validacao {
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

    validaEspecie(especie) {
        const regex = /^[A-Z][a-z]+$/;
        if(regex.test(especie)) {
            alert("Tudo Ok");
        } else {
            throw new Error("O primeiro argumento deve conter uma letra maiúscula");
        }
    }

    validaIdade(idade) {
        const regex = /^(\d){1,2}$/;
        if(regex.test(idade)) {
            alert("Tudo ok!");
        } else {
            throw new Error("Idade inválida");
        }
    }

    validaRaca(raca) {
        const regex = /^[A-Z][a-z]+$/;
        if(regex.test(raca)) {
            alert("Tudo ok!");
        } else {
            throw new Error("O primeiro argumento deve ser uma letra maiúscula");
        }
    }
}