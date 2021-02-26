let n = 0;
let vetor = [];

for (let i = 0 ; i < n ; i++) {
  if (n < 1) {
    console.log("Entrada inválida!");
  } else if (i<n) {
    for (let k = 1 ; k < n ; k++) {
      vetor.push('*');
    }
  } else if (i == n-1) {
    for ( let j = 0 ; j < n ; j++) {
      console.log(vetor);
    }
  }
}