export default class EhBomPagador extends Cliente {
    #ehBomPagador;

    constructor(nome, sobrenome, idade, valorEmprestimo, anosEmprestimo, avalistas, ehBomPagador) {
        super(nome, sobrenome, idade, valorEmprestimo, anosEmprestimo, avalistas);

        this.#ehBomPagador = ehBomPagador;
    }

    
}