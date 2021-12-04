import { Lancamento } from "./lancamento.js";
import { Usuario } from "./usuario.js";

export class Carteira {
   
    usuario: Usuario
    private saldo: number
    private lancamentos: Array<Lancamento>
    permiteDever: boolean

    constructor(
        usuario: Usuario,
        saldo: number,
        lancamentos: Array<Lancamento>,
        permiteDever: boolean
    ) {
        this.usuario = usuario
        this.saldo = saldo
        this.lancamentos = lancamentos
        this.permiteDever = permiteDever
    }

    gerirLancamento(lancamento: Lancamento): string {
        if (lancamento.debito) {
            if (this.permiteDever) {
                return this.fazerDebito(lancamento)
            } else {
                if (this.saldo - lancamento.valor < 0) {
                    return `Para o seu proprio bem não vamos deixar vc ficar devendo ${this.saldo - lancamento.valor}`
                } else {
                  return this.fazerDebito(lancamento)
                }
            }
        } else {
            return this.fazerCredito(lancamento)
        }
    }

    private fazerDebito(lancamento: Lancamento) {
        this.saldo -= lancamento.valor
        this.lancamentos.push(lancamento)
        return `Debito realizado com sucesso seu saldo atual é ${this.saldo}`
    }
    private fazerCredito(lancamento: Lancamento) {
        this.saldo += lancamento.valor
        this.lancamentos.push(lancamento)
        return `Credito realizado com sucesso seu saldo atual é ${this.saldo}`
    }

    setLancamentos(lancamentos:Array<Lancamento>){
        this.lancamentos=lancamentos  
    }
    setSaldo(saldo:number){
        this.saldo=saldo
    }
    getSaldo(): number  {
       return this.saldo
    }
}



