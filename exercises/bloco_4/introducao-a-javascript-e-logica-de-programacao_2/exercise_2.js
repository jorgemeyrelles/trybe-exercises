let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//exercicio 1
/*for (let index = 0; index < numbers.length; index++) {
  console.log(numbers[index]);
}*/

//exercicio 2
/*let soma = 0;
for (let index = 0; index < numbers.length; index++) {
  soma = soma + numbers[index];
}
console.log(soma);*/

//exercicio 3
/*let soma = 0;
let media = 0;
for (let index = 0; index < numbers.length; index++) {
  soma = soma + numbers[index];
}
media = soma / numbers.length;
console.log(media);*/

//exercicio 4
/*if (media > 20) {
  console.log("Valor maior que 20");
} else if (media < 20) {
  console.log("Valor menor que 20");
} else if (media == 20) {
  console.log("Valor igual a 20");
} else {
  console.log("Entrada inválida");
}*/

//exercicio 5
/*let maior = 0;
for (let index = 0; index < numbers.length; index++) {
  if(maior < numbers[index]) {
    maior = numbers[index];
  }
}
console.log(maior);*/

//exercicio 6
/*let qtdImpares = 0;
for (let index = 0; index < numbers.length; index++) {
  if(numbers[index]%2 != 0){
    qtdImpares = qtdImpares+1;
  }
}
if (qtdImpares == 0){
  console.log("Não há numeros impares");
} else if (qtdImpares >= 1) {
  console.log(qtdImpares+" valores impares.");
} else {
  console.log("Entrada invalida");
}*/

//exerciocio 7
/*let maior = 0;
let menor = 0;
for (let index = 0; index < numbers.length; index++) {
  if(maior < numbers[index]) {
    maior = numbers[index];
  }
}
menor = maior;
for (let index = 0; index < numbers.length; index++) {
  if(menor > numbers[index]) {
    menor = numbers[index];
  }
}
console.log(maior);
console.log(menor);*/

//exercicio 8
/*let newNumbers = [];
for (let index = 1; index < 26; index++) {
  newNumbers.push(index);
}
console.log(newNumbers);*/

//exercicio 9
/*let newNumbers = [];
for (let index = 1; index < 26; index++) {
  newNumbers.push(index/2);
}
console.log(newNumbers);*/

//bonus 1 (auxilio do esboço de implementação do artigo)
/*let aux = 0;
// Vamos ter que percorrer todo o vetor, logo:
for (let k = 1; k < numbers.length; k++) {
    // Dentro de cada iteração
    // percorremos novamente o vetor
    // em busca dos pares
    for (let j = 0; j < (numbers.length - k); j++) {
        // Comparamos
        if (numbers[j] > numbers[j + 1]) {
            // swap (trocamos)
            aux = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = aux;
        }}
}
console.log(numbers);*/

//bonus 2 (auxilio do esboço de implementação do artigo)
let aux2 = 0;
// Vamos ter que percorrer todo o vetor, logo:
/*for (let k = 1; k < numbers.length; k++) {
    // Dentro de cada iteração
    // percorremos novamente o vetor
    // em busca dos pares
    for (let j = 0; j < (numbers.length - k); j++) {
        // Comparamos
        if (numbers[j] < numbers[j + 1]) {
            // swap (trocamos)
            aux2 = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] = aux2;
        }}
}
console.log(numbers);*/

//bonus 3 (auxilio do esboço de implementação do artigo)
let aux3 = 0;
// Vamos ter que percorrer todo o vetor, logo:
for (let k = 1; k <= numbers.length; k++) {
    
        if ((k - 1) < numbers.length) {
            // swap (trocamos)
          aux3 = numbers[k] * numbers[k - 1];
          numbers[k -1] = aux3;
        } else if(k = numbers.length) {
          aux3 = 0;
          aux3 = numbers[k] * 2;
          numbers[k] = aux3;
        }
}
console.log(numbers);



