export class Lancamento{
    titulo:string
    debito:boolean
    valor:number
    data:Date
    observacao:string

    constructor(
        titulo:string,
        debito:boolean,
        valor:number,
        data:Date,
        observacao:string,
    ){
        this.titulo=titulo
        this.debito=debito
        this.valor=valor
        this.data=data
        this.observacao=observacao
    }

}