import { Menu } from "../classes/menu.js";



export function obterMenu() {
    let menuLateral: Array<Menu> = new Array<Menu>()
    menuLateral.push(new Menu("Home", '/pages/principal.html', true))
    menuLateral.push(new Menu("Cadastro de usuarios", '/pages/usuarios/cadastrar.html', true))
    menuLateral.push(new Menu("Cadastro de lançamentos", '/pages/carteiras/cadastrar_lancamentos.html', true))
   // menuLateral.push(new Menu("Cadastro de alunos", '/pages/alunos/cadastrar_alunos.html', false))
   // menuLateral.push(new Menu("Oliota.com", 'https://oliota.com/', false))
    return menuLateral


}