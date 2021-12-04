import { Usuario } from "./classes/usuario.js";
localStorage.setItem("usuario_logado", undefined);
$("#cadastrar").on('click', () => {
    let usuarioNovo = new Usuario(String($("#nome").val()), String($("#email").val()), String($("#senha").val()));
    let usuarios = JSON.parse(localStorage.getItem("lista_usuarios"));
    if (!usuarios) {
        usuarios = [];
    }
    let localizado = false;
    usuarios.forEach(usuario => {
        if (usuarioNovo.getEmail() == usuario.email) {
            alert("Já existe um usuario em esse email");
            localizado = true;
        }
    });
    if (!localizado) {
        localStorage.setItem("usuario_logado", JSON.stringify(usuarioNovo));
        usuarios.push(usuarioNovo);
        localStorage.setItem("lista_usuarios", JSON.stringify(usuarios));
        window.location.href = "/pages/principal.html";
    }
});
