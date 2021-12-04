 
import { Usuario } from "./classes/usuario.js";



localStorage.setItem("usuario_logado",undefined)
 
let teste:Usuario= new Usuario("rubem","r@r.com","123")
console.log(teste.getNome())
console.log(typeof(teste));
;



$("#entrar").on(
    'click',
    ()=>{

        let usuarios:Array<any>=  JSON.parse(localStorage.getItem("lista_usuarios")) 
        let email:string=String( $("#email").val())
        let senha:string=String( $("#senha").val())

        if(usuarios){
            let localizado:boolean=false
            usuarios.forEach(usuario => {
                  
               
                
                if(email==usuario.email && senha==usuario.senha){
                    localStorage.setItem("usuario_logado",JSON.stringify(usuario))  
                    window.location.href="/pages/principal.html"
                    localizado=true
                }
            });
            if(!localizado){
                alert("Não existe um usuario com esse email e senha")
            }
        }else{
            alert("Não há usuarios no sistema, realize um cadastro")
        }
    }
)