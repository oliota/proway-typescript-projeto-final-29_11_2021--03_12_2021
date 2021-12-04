import { Aluno } from "../../classes/aluno.js";
import { Diretor } from "../../classes/diretor.js";
import { Menu } from "../../classes/menu.js";
import { Professor } from "../../classes/professor.js";
import { obterMenu } from "../utilitario.js";


let opcoes:Array<Menu>=obterMenu()

opcoes.forEach(opcao => {
    
    $("#menu_lateral").append(
        $("<li>",{text:opcao.descricao})
    )
});


let aluno1=new Aluno("rubem",33,"rubem@teste","123",'001',9.5)

$("#teste").append(
    $("<p>",{text:aluno1.nome})
)

let professor1= new Professor("Oliota",34,"oliota@oliota","321","typescript")

document.body.append(professor1.nome)

let diretor:Diretor=new Diretor("Paulo Kano",70,"pauloykano@gmail","㊙㊗","comercial")

$("#teste").append(
    $("<li>",{text:` Diretor ${diretor.nome} senha ${diretor.senha}`})
)

tela(aluno1.meApresentar())
tela(professor1.meApresentar())
tela(diretor.meApresentar())

function tela(texto:string){
    $("#teste").append(
        $("<p>",{text:texto})
    )
}

