export class Carteira {
    constructor(usuario, saldo, lancamentos, permiteDever) {
        this.usuario = usuario;
        this.saldo = saldo;
        this.lancamentos = lancamentos;
        this.permiteDever = permiteDever;
    }
    gerirLancamento(lancamento) {
        if (lancamento.debito) {
            if (this.permiteDever) {
                return this.fazerDebito(lancamento);
            }
            else {
                if (this.saldo - lancamento.valor < 0) {
                    return `Para o seu proprio bem não vamos deixar vc ficar devendo ${this.saldo - lancamento.valor}`;
                }
                else {
                    return this.fazerDebito(lancamento);
                }
            }
        }
        else {
            return this.fazerCredito(lancamento);
        }
    }
    fazerDebito(lancamento) {
        this.saldo -= lancamento.valor;
        this.lancamentos.push(lancamento);
        return `Debito realizado com sucesso seu saldo atual é ${this.saldo}`;
    }
    fazerCredito(lancamento) {
        this.saldo += lancamento.valor;
        this.lancamentos.push(lancamento);
        return `Credito realizado com sucesso seu saldo atual é ${this.saldo}`;
    }
    setLancamentos(lancamentos) {
        this.lancamentos = lancamentos;
    }
    setSaldo(saldo) {
        this.saldo = saldo;
    }
    getSaldo() {
        return this.saldo;
    }
}
