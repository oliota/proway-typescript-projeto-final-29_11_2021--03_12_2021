import { Usuario } from "../../classes/usuario.js";
let usuarios = new Array();
let chaveUsuario = "lista_usuarios";
let usuarioAtual;
carregarUsuarios();
$("form").on('submit', (e) => {
    e.preventDefault();
    let formulario = new Usuario(String($("#nome_form").val()), String($("#email_form").val()), String($("#senha_form").val()));
    if (!formulario.validarInformacoes()) {
        alert("Informe todos os campos");
        return;
    }
    console.log('usuarioAtual', usuarioAtual);
    if (usuarioAtual == undefined) {
        adicionar(formulario);
    }
    else {
        atualizar(formulario);
    }
});
function carregarUsuarios() {
    $("input").val('');
    $("tbody").empty();
    $("#editar").hide();
    $("#enviar").show();
    usuarioAtual = undefined;
    let informacao = localStorage.getItem(chaveUsuario);
    console.log('informacao', informacao);
    if (informacao == undefined) {
        salvar();
        carregarUsuarios();
    }
    else {
        let listaTemporaria = JSON.parse(informacao);
        console.log('listaTemporaria', listaTemporaria);
        usuarios = new Array();
        listaTemporaria.forEach(temporario => {
            console.log('temporario', temporario);
            let usuario = new Usuario(temporario.nome, temporario.email, temporario.senha);
            console.log(usuario);
            usuarios.push(usuario);
            escreveLinha(usuario);
        });
        console.log(usuarios);
    }
}
function salvar() {
    console.log('usuarios', usuarios);
    localStorage.setItem(chaveUsuario, JSON.stringify(usuarios));
}
function escreveLinha(usuario) {
    $("tbody").append($("<tr>").append($("<td>", { text: usuario.getNome() }), $("<td>", { text: usuario.getEmail() }), $("<td>", { text: usuario.getSenha() }), $("<td>").append($("<button>", {
        text: "deletar",
        class: "btn btn-outline-danger",
        click: () => {
            let posicao = usuarios.indexOf(usuario);
            console.log('usuarios', usuarios);
            console.log('posicao', posicao);
            usuarios.splice(posicao, 1);
            console.log('usuarios', usuarios);
            salvar();
            carregarUsuarios();
        }
    }), $("<button>", {
        text: "editar",
        class: "btn btn-outline-warning",
        click: () => {
            $("#nome_form").val(usuario.getNome());
            $("#email_form").val(usuario.getEmail());
            $("#senha_form").val(usuario.getSenha());
            $("#editar").show();
            $("#enviar").hide();
            usuarioAtual = usuario;
            // let posicao = usuarios.indexOf(usuario)
            // console.log('usuarios', usuarios);
            // console.log('posicao', posicao);
            // usuarios.splice(posicao, 1)
            // console.log('usuarios', usuarios);
            // salvar()
            // cerregarUsuarios()
        }
    }))));
}
function adicionar(novoUsuario) {
    console.log('novoUsuario', novoUsuario);
    usuarios.push(novoUsuario);
    salvar();
    escreveLinha(novoUsuario);
}
function atualizar(alteracaoUsuario) {
    console.log('alteracaoUsuario', alteracaoUsuario);
    usuarioAtual.setDados(alteracaoUsuario);
    salvar();
    carregarUsuarios();
}
