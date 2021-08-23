import { Imprmivel } from "../utils/imprimivel.js";
export class Negociacoes extends Imprmivel {
    constructor() {
        super(...arguments);
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
}
