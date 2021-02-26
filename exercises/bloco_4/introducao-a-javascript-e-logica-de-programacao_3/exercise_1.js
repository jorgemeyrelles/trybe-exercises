let n = 10;
let vetor = [];

for (let i = 0 ; i < n ; i++) {
  if (n < 1) {
  
    console.log("Entrada inválida!");
  
  } else if (i == 0) {
    for (let k = 0 ; k < n ; k++) {
      vetor.push('*');
    }
  }
  
  console.log(vetor);

}