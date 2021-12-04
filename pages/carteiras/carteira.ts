import { Carteira } from "../../classes/carteira.js";
import { Lancamento } from "../../classes/lancamento.js";
import { Usuario } from "../../classes/usuario.js";

let usuario:Usuario=new Usuario("Rubem","rubem@gmail.com","123")

let carteira:Carteira=new Carteira(usuario,0,new Array<Lancamento>(),false)

console.log('inicialmente',JSON.stringify(carteira));
 
console.log(carteira.gerirLancamento(new Lancamento("salario",false,1100,new Date(),"gostaria de receber mais")));


console.log('depois de receber',JSON.stringify(carteira));
 
console.log(carteira.gerirLancamento(new Lancamento("fatura",true,2100,new Date(),"fica rico, fica pobre")));


console.log('durou pouco',JSON.stringify(carteira));
