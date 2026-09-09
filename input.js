const escrever = require ("readline-sync")
let nome= escrever.question ("Qual seu nome?") 
var comidapreferida=escrever.question("Qual sua comida preferida ?")
var idade = parseint(escrever.question ("Qual e sua  idade "))
console.log(idade)
if(idade >=25){
    console.log ("pode entrar na festa , ebaaaaaaa")
}else{   
 console.log ("Volta pra casa , sorry")
}
if(idade>25 && comidapreferida== "Pizza"){
    console.log("pode entar")
}else if (idade >=25 && comidaPreferida=="lasanha"){
}else{
    console.log("volte amanhã porque hoje e pizzaaa")
}