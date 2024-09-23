export default class Validacao {
    #especie;
    #idade;
    #raca;

    constructor(especie, idade, raca) {
        this.#especie = especie;
        this.#idade = idade;
        this.#raca = raca;
    }

    validaEspecie(especie) {
        const regex = /^[A-Z][a-zá-ú]+$/;
        if(regex.test(especie)) {
            console.log(especie);
        } else {
            throw new Error("O primeiro argumento deve conter uma letra maiúscula!");
        }
    }

    validaIdade(idade) {
        const regex = /^(\d){1,2}$/;
        if(regex.test(idade)) {
            console.log(idade);
        } else {
            throw new Error("Idade inválida!");
        }
    }

    validaRaca(raca) {
        const regex = /^[A-Z][a-z]+$/;
        if(regex.test(raca)) {
            console.log(raca);
        } else {
            throw new Error("O primeiro argumento deve ser uma letra maiúscula!");
        }
    }
}