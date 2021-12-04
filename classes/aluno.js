import { Pessoa } from "./pessoa.js";
export class Aluno extends Pessoa {
    constructor(nome, idade, email, senha, matricula, nota) {
        super(nome, idade, email, senha);
        this.matricula = matricula;
        this.nota = nota;
    }
    meApresentar() {
        return `Blz meu nome é ${this.nome} tirei nota ${this.nota} na ultima prova`;
    }
}
