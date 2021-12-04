import { obterMenu } from "./utilitario.js";
let usuario_logado = JSON.parse(localStorage.getItem("usuario_logado"));
console.log(usuario_logado);
if (usuario_logado == undefined) {
    alert("Acesso restrito");
    window.location.href = "/";
}
else {
    $("#nome").text(`Bem vinde, ${usuario_logado.nome}`);
}
let menuLateral = obterMenu();
menuLateral.forEach(menu => {
    $("#menu_lateral").append($("<a>", {
        text: menu.descricao,
        class: "btn btn-outline-success form-control text-left",
        href: menu.url,
        target: menu.direto ? "" : "_blank"
    }));
});
