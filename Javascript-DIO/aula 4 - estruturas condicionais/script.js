var jogador1 = 0;
var jogador2 = 0;
var placar;

/*jogador1 != -1 && jogador2 != -1
  ? console.log("Os jogadores são válidos")
  : console.log("Os jogadores não são válidos");

if (jogador1 > 0 && jogador2 == 0) {
  console.log("jogador 1 marcou ponto!");
  placar = jogador1 > jogador2;
} else if (jogador2 > 0 && jogador1 == 0) {
  console.log("jogador 2 marcou ponto!");
  placar = jogador1 < jogador2;
} else {
  console.log("ninguém marcou ponto");
}

switch (placar) {
  case (placar = jogador1 > jogador2):
    console.log("jogador 1 ganhou");
    break;
  case (placar = jogador1 < jogador2):
    console.log("jogador 2 ganhou");
    break;
  default:
    console.log("ninguém ganhou");
}*/

let array = ["valor1", "valor2", "valor3", "valor4", "valor5"];
let object = {
  propriedade1: "valor1",
  propriedade2: "valor2",
  propriedade3: "valor3",
};

/*for(let i = 0; i < array.length; i++){
  console.log(i);
}

//for/in executa função a partir de uma propriedade
/for(let i in array){
  console.log(i)
}

for(i in object){
  console.log(i)
}*/

//for/of executa função a partir de valor
/*for(i of array){
  console.log(i)
}

//com object
for(i  of object.propriedade1){
  console.log(i)
}*/

var a = 0;

while (a < 10) {
  a++;
  console.log(a);
}

do {
  a++;
  console.log(a);
} while (a < 15);
