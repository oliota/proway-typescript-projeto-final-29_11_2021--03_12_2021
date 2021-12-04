import { Pessoa } from "./pessoa.js"

export class Aluno extends Pessoa{
     
    matricula:string
    nota:number
    

    constructor( 
        nome:string,
        idade:number,
        email:string,
        senha:string, 
        matricula:string,
        nota:number
    ){ 
        super(nome,idade,email,senha)
        this.matricula=matricula
        this.nota=nota
    }

    meApresentar():string{

        return `Blz meu nome é ${this.nome} tirei nota ${this.nota} na ultima prova`
    }
 


}