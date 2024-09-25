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

    dataAtendimento() {
        const data = new Date();
        data.setDate(data.getDate() + 1);
        const formatacao = {day: 'numeric', month: '2-digit', year: 'numeric'}
        const dataFormatada = data.toLocaleDateString('pt-BR', formatacao);

        return `Seu atendimento está marcado para ${dataFormatada}.`;
    }

    msgIncentivo(raca) {
        return `Tudo ficará bem com seu(a) gatinho(a) ${raca}, não se preocupe!`;
    }
    
    get doutor() {
        return this.#doutor;
    }
}