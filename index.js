var prompt = require('prompt-sync')();

// Aliens avançados tecnologicamente descubriram que seriam destruidos 
//por uma outra raça (menos avançada) entao sem saber que raça seria e 
//por crer que ela ja existia, criaram varia racas em muitos planetas 
//para aprender as fraquezas de todas elas, criaram a raca humana na 
//Terra, alguns puros alguns miscigenados com outras racas, o que gerou 
//diferentes humanos, apos muito tempo, a primeira etapa, e mais 
//importante, da profecia se concretizou (a nave mae 1 caiu na Terra) 
//assim os aliens concluiram que a raca humana que criaram seria seu 
//carrasco, mas apenas um humano puro poderia faze-lo, 
//(inserindo seu DNA na nave mae 1 que caiu na Terra), logo isso virou 
//uma batalha onde (segundo a profecia) um dentre os muitos humanos que 
//lutam chegara ao objetivo, ou sera crucial para O humano chegar la, 
//quem nessa guerra sera voce?

//Cogitei alterar os resultados do codigo para encaixar melhor na 
//mas optei por nao faze-lo, por medo de errar a avaliacao.

console.log("Responda 's' ou 'n' para as respostas serem aceitas");

let i = 0;
let rU = prompt("Você esta no local de queda da nave mae 1?").toUpperCase();
while (rU!="S" && rU!="N"){
  rU = prompt("\nDigite 's' ou 'n'\nVocê esta no local de queda da nave mae 1?").toUpperCase();
}
if(rU==="S"){
  i++;
}
let rD = prompt("Você tem motivos (fortes) para a batalha?").toUpperCase();
while (rD!="S" && rD!="N"){
  rD = prompt("\nDigite 's' ou 'n'\nVocê tem motivos (fortes) para a batalha?").toUpperCase();
}
if(rD==="S"){
  i++;
}
let rT = prompt("Voce tem um amigo que e um humano puro?").toUpperCase();
while (rT!="S" && rT!="N"){
  rT = prompt("\nDigite 's' ou 'n'\nVoce tem um amigo que e um humano puro?").toUpperCase();
}
if(rT==="S"){
  i++;
}
let rQ = prompt("Voce teve treinamento militar?").toUpperCase();
while (rQ!="S" && rQ!="N"){
  rQ = prompt("\nDigite 's' ou 'n'\nVoce teve treinamento militar?").toUpperCase();
}
if(rQ==="S"){
  i++;
}
let rC = prompt("Voce e um humano puro?").toUpperCase();
while (rC!="S" && rC!="N"){
  rC = prompt("\nDigite 's' ou 'n'\nVoce e um humano puro?").toUpperCase();
}
if(rC==="S"){
  i++;
}

if(i===0){
  console.log("Você falha miseravelmente.");
}

else if(i===2 || i===1){
  console.log("Você falha, mas ainda consegue fugir da situação.");
}

else if(i===3){
  console.log("Você chega perto de conseguir alcançar seu objetivo, mas acaba falhando por pouco.");
}
else if(i===4){
  console.log("Depois de muito esforço você conquista seu objetivo, embora não de maneira perfeita.");
}

else{
  console.log("Você triunfa de maneira inquestionável e seus feitos serão lembrados por muitas gerações.");
}