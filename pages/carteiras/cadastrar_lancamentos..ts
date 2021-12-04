import { Carteira } from "../../classes/carteira.js";
import { Lancamento } from "../../classes/lancamento.js";
import { Usuario } from "../../classes/usuario.js";

let usuarioLogado: Usuario = new Usuario("", "", "")

usuarioLogado.setDados(JSON.parse(localStorage.getItem("usuario_logado")))

let carteira: Carteira = new Carteira(usuarioLogado, 0, new Array<Lancamento>(), false)
let chaveLocalStorage = `${usuarioLogado.getEmail()}_lancamentos`
console.log('chaveLocalStorage', chaveLocalStorage);

//localStorage.removeItem(chaveLocalStorage)
let itemCorrente: Lancamento

carregarDados()

function carregarDados() {
    $("input").val("")
    $("textarea").val("")
    $("#editar").hide()
    $("#enviar").show()
    $("tbody").empty()

    itemCorrente = undefined

    let informacao = localStorage.getItem(chaveLocalStorage)
    console.log('informacao', informacao);


    if (informacao == undefined) {
        salvar()
        carregarDados()

    } else {
        let carteiraTemporaria = JSON.parse(informacao)

        let lancamentos = new Array<Lancamento>()

        carteiraTemporaria.lancamentos.forEach(temporario => {
            let lancamento = new Lancamento(
                temporario.titulo,
                temporario.debito,
                temporario.valor,
                temporario.data,
                temporario.observacao
            )
            lancamentos.push(lancamento)
            escreveLinha(lancamento)
        });
        console.table(lancamentos)
        carteira.setLancamentos(lancamentos)
        carteira.setSaldo(carteiraTemporaria.saldo)

        $("#saldo_form").val(carteira.getSaldo())
        carteira.permiteDever = carteiraTemporaria.permiteDever
        if (carteira.permiteDever) {
            $("#pode_dever").prop("checked", true)
            $("#nao_pode_dever").prop("checked", false)
        } else {
            $("#pode_dever").prop("checked", false)
            $("#nao_pode_dever").prop("checked", true)
        }

    }
}
function salvar() {
    localStorage.setItem(chaveLocalStorage, JSON.stringify(carteira))
}

function escreveLinha(lancamento: Lancamento) {
    $("tbody").append(
        $("<tr>").append(
            $("<td>", { text: converterData(lancamento.data) }),
            $("<td>", { text: lancamento.debito ? "Debito" : "Credito" }),
            $("<td>", { text: lancamento.titulo }),
            $("<td>", { text: lancamento.valor }),
        )
    )
}

$('form').on("submit",
    (event) => {
        event.preventDefault()

        let formulario: Lancamento = new Lancamento(
            String($("#titulo_form").val()),
            $("#debito").is(":checked"),
            Number($("#valor_form").val()),
            new Date
                (String($("#data_form").val())),
            String($("#observacao").val()),
        )

        adicionar(formulario)


    }
)
function adicionar(lancamento: Lancamento) {
    alert(carteira.gerirLancamento(lancamento));
    console.log('carteira', carteira);

    salvar()
    carregarDados()
}



function converterData(data: Date): string {
    data = new Date(data)
    return `${m10(data.getDate())}/${m10(data.getMonth() + 1)}/${m10(data.getFullYear())}`
}

function m10(numero: number): string {
    return numero < 10 ? ("0" + numero) : (String(numero))
}


$("#pode_dever").on("click",
     ()=> {
        if($("#pode_dever").is(":checked")){
            carteira.permiteDever=true 
        } 
        salvar()
        console.log(carteira);
        
        
    }
) 

$("#nao_pode_dever").on("click",
     ()=> {
        if($("#nao_pode_dever").is(":checked")){
            carteira.permiteDever=false
        } 
        salvar()
        console.log(carteira);
    }
)