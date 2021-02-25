let a = 20;
let b = 3;
let c = 10;
let alfa = 30;
let beta = 60;
let omega = 80;

//adição
console.log(a+b);

//subtração
console.log(a-b);

//multiplicação
console.log(a*b);

//divisão
console.log(a/b);

//módulo
console.log(a%b);

if(a > b && a > c) {
  console.log("a = "+a);
} else if (b > a && b > c) {
  console.log("b = "+b);
} else if (c > a && c > b) {
  console.log("c = "+c);
}

if (a > 0) {
  console.log("Positivo");
} else if (a < 0) {
  console.log("Negativo");
} else {
  console.log("0");
}

let soma = alfa + beta + omega;
console.log(soma);

if (soma == 180){
  console.log(Boolean(positive));
  
} else {
  console.log(Boolean(false));
}

let peca = "rei";

if (peca == "piao") {
  console.log("Primeiro movimento: até duas casas reto.Demais movimentos: uma casa reto.")
} else if (peca == "torre") {
  console.log("Reto até o fim, na vertical e horizontal.");
} else if (peca == "cavalo") {
  console.log("Quatro casas em L.");
} else if (peca == "bispo") {
  console.log("Nas diagonais até o fim.");
} else if (peca == "rainha") {
  console.log("Movimento livre até o fim.");
} else if (peca == "rei") {
  console.log("Uma casa livre.");
} else {
  console.log("Entrada invalida.");
}

switch (peca) {
  case "piao":
    console.log("Primeiro movimento: até duas casas reto.Demais movimentos: uma casa reto.");
    break;
  case "torre":
    console.log("Reto até o fim, na vertical e horizontal.");
    break;
  case "cavalo":
    console.log("Quatro casas em L.");
    break;
  case "bispo":
    console.log("Nas diagonais até o fim.");
    break;
  case "rainha":
    console.log("Movimento livre até o fim.");
    break;
  case "rei":
    console.log("Uma casa livre.");
    break;
}

var nota = 85;
if (nota >= 0 && nota < 50) {
  console.log("F");
} else if (nota >= 50 && nota < 60) {
  console.log("E");
} else if (nota >= 60 && nota < 70) {
  console.log("D");
} else if (nota >= 70 && nota < 80) {
  console.log("C");
} else if (nota >= 80 && nota < 90) {
  console.log("B");
} else if (nota >= 90 && nota <= 100) {
  console.log("A");
} else {
  console.log("ENTRADA INVÁLIDA! A NOTA DEVE ESTAR ENTRE 0 E 100.");
}

var j = 3;
var k = 7;
var l = 1;

if (j%2 == 0 || k%2 == 0 || l%2 == 0) {
  console.log(Boolean(true));
} else {
  console.log(Boolean(false));
}

if (j%2 != 0 || k%2 != 0 || l%2 != 0) {
  console.log(Boolean(true));
} else {
  console.log(Boolean(false));
}

var valorCusto = 10;
var valorVenda = 25;
var impostoSobreOCusto = valorCusto * 0.2;
var valorCustoTotal = valorCusto * 1.2;
var lucro = valorVenda - valorCustoTotal;
console.log("custo total = "+valorCustoTotal);
console.log("imposto sobre o custo = "+impostoSobreOCusto);
console.log(lucro);

