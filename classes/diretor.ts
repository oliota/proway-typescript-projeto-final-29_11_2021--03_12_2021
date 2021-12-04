import { Pessoa } from "./pessoa.js";

export class Diretor extends Pessoa {

    area: string

    constructor(
        nome: string,
        idade: number,
        email: string,
        senha: string,
        area: string
    ) {
        super(nome,idade,email,senha)
        this.area=area

    }

}