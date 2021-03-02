let n = 5;
let vetor = [];

/*for (let i = 0 ; i < n ; i++) {
  if (n < 1) {
  
    console.log("Entrada inválida!");
  
  } else if (i == 0) {
    for (let k = 0 ; k < n ; k++) {
      vetor.push('*');
    }
  }
  
  console.log(vetor);

}*/

/*for (let i = 0 ; i < n ; i++) {
  if (n < 1) {
  
    console.log("Entrada inválida!");
  
  } else if(i == 0) {
    
      vetor.push('*');

  }else if (i > 0) {

    vetor.push('*');
    
  }
  
  console.log(vetor);

}*/

for (let i = n ; i > n ; i--) {
  if (n < 1) {
  
    console.log("Entrada inválida!");
  
  } else if(i < n) {
    for(let k = 0 ; k <= n ; k++){
      if(k == i){
        vetor[k] = '*';
      } else {
        vetor[k] = ' ';
      }
    }  
  console.log(vetor);

}
}