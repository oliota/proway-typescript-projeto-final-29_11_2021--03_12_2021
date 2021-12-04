import { Pessoa } from "./pessoa.js";
export class Diretor extends Pessoa {
    constructor(nome, idade, email, senha, area) {
        super(nome, idade, email, senha);
        this.area = area;
    }
}
