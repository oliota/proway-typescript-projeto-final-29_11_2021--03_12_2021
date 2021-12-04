export class Menu{

    descricao:string
    url:string 
    direto:boolean
    
    constructor(
        descricao:string,
        url:string, 
        direto:boolean 
    ){
        this.descricao=descricao
        this.url=url 
        this.direto=direto
    }
}