import { Pessoa } from "./pessoa.js"

export class Professor extends Pessoa{
   
    turma: string

    constructor(
        nome: string,
        idade: number,
        email: string,
        senha: string,
        turma: string
    ) {
       super(nome,idade,email,senha)
        this.turma = turma
    }

    meApresentar():string{
        return `${super.meApresentar()} \n ,pensando melhor ta ai a minha senha pode que isso te ajude '${this.senha}' ` 
    }

}