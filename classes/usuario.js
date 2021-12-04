export class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getEmail() {
        return this.email;
    }
    setEmail(email) {
        this.email = email;
    }
    getSenha() {
        return this.senha;
    }
    setSenha(senha) {
        this.senha = senha;
    }
    setDados(usuario) {
        this.nome = usuario.nome;
        this.email = usuario.email;
        this.senha = usuario.senha;
    }
    validarInformacoes() {
        if (this.nome && this.email && this.senha) {
            return true;
        }
        else {
            return false;
        }
    }
}
