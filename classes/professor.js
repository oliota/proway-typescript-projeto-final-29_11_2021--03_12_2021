import { Pessoa } from "./pessoa.js";
export class Professor extends Pessoa {
    constructor(nome, idade, email, senha, turma) {
        super(nome, idade, email, senha);
        this.turma = turma;
    }
    meApresentar() {
        return `${super.meApresentar()} \n ,pensando melhor ta ai a minha senha pode que isso te ajude '${this.senha}' `;
    }
}
