export class Pessoa {
    nome: string
    idade: number
    email: string
    senha: string

    constructor(
        nome: string,
        idade: number,
        email: string,
        senha: string
    ) {
        this.nome = nome
        this.idade = idade
        this.email = email
        this.senha = senha
    }

    meApresentar(){
        return `Oi meu nome é ${this.nome} e tenho ${this.idade} anos, não vou falar minha senha`
    }
}