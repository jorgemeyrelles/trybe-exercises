// criando tag h1, adicionando o texto dentro da tag e posicionando como filho dentro do body.
let tit = document.createElement('h1');
let txt = tit.innerText = 'Exercício 5.2 - JavaScript DOM';
document.querySelector('body').appendChild(tit).className = 'title';

// 2 - Adicione a tag div com a classe main-content como filho da tag body
let tit2 = document.createElement('div');
let txt2 = tit2.innerText = 'Primeira Div filho da body';
document.querySelector('body').appendChild(tit2).className = 'main-content';

// Adicione a tag div com a classe center-content como filho da tag div criada no passo 2;
let tit3 = document.createElement('div');
let txt3 = tit3.innerText = 'Primeira div filho da div.';
document.querySelector('div').appendChild(tit3).className = 'center-content';

// Adicione a tag p como filho do div criado no passo 3 e coloque algum texto;
let tit4 = document.createElement('p');
let txt4 = tit4.innerText = 'Parágrafo filho dentro da div filho da div filho da body';
document.querySelector('div .center-content').appendChild(tit4);

// Adicione a tag div com a classe left-content como filho da tag div criada no passo 2;
let tit5 = document.createElement('div');
let txt5 = tit5.innerText = 'Div filho dentro da div filho da body com classe left-content';
document.querySelector('div').appendChild(tit5).className = 'left-content';

// Adicione a tag div com a classe right-content como filho da tag div criada no passo 2;
let tit6 = document.createElement('div');
let txt6 = tit6.innerText = 'Div filho dentro da div filho da body com classe right-content';
document.querySelector('div').appendChild(tit6).className = 'right-content';

// Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do div criado no passo 5;
let tit7 = document.createElement('img');
let txt7 = tit7.setAttribute('src', 'https://picsum.photos/200');
document.querySelector('div .left-content').appendChild(tit7).className = 'small-image';

// Adicione uma lista não ordenada com os valores de 1 a 10 por extenso como valores da lista. Essa lista deve ser filha do div criado no passo 6;
let tit8 = document.createElement('ul');
let txt8 = tit8.innerHTML;
document.querySelector('div .right-content').appendChild(tit8);
let listInd = document.querySelector('ul');
let lista = ['ein', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun', 'zehn'];
for (let i = 0; i < lista.length; i += 1) {
  let numero = lista[i];
  let tit9 = document.createElement('li');
  tit9.innerText = numero;
  listInd.appendChild(tit9);
}

// Adicione 3 tags h3 , todas sendo filhas do div criado no passo 2.
let tit10 = document.createElement('h3');
let txt10 = tit10.innerText = 'Todos os direitos reservados';
document.querySelector('div').appendChild(tit10);
