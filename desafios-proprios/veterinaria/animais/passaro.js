import Animal from "../animal.js";

export default class Passaro extends Animal {
    #doutor;

    constructor(especie, idade, raca, sexo, doutor) {
        super(especie, idade, raca, sexo);
        this.#doutor = doutor;
    }

    drBruno() {
        return "A consulta do seu pássaro está marcada com nosso doutor Bruno."
    }

    dataAtendimento() {
        const data = new Date();
        data.setDate(data.getDate() + 3);
        const formatacao = {day: 'numeric', month: '2-digit', year: 'numeric'}
        const dataFormatada = data.toLocaleDateString('pt-BR', formatacao);

        return `Seu atendimento está marcado para ${dataFormatada}.`;
    }

    msgIncentivo(raca) {
        return `Tudo ficará bem com seu(a) ${raca}, não se preocupe!`;
    }

    get doutor() {
        return this.#doutor;
    }
}