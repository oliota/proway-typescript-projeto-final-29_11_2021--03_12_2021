export class Usuario{

    private nome:string
    private email:string
    private senha:string

    constructor(nome:string,email:string,senha:string){
        this.nome=nome
        this.email=email
        this.senha=senha

    }

    public getNome(){
        return this.nome
    }
    public setNome(nome:string){
        this.nome=nome
    }

    
    public getEmail(){
        return this.email
    }
    public setEmail(email:string){
        this.email=email
    }

    
    public  getSenha(){
        return this.senha
    }
    public  setSenha(senha:string){
        this.senha=senha
    }

    setDados(usuario:Usuario){
        this.nome=usuario.nome
        this.email=usuario.email
        this.senha=usuario.senha
    }

    validarInformacoes():boolean{
        if (this.nome  && this.email && this.senha){
            return true
        }else{
            return false
        }

    }
}