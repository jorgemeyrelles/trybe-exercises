// Exercicio 1
const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: {'Accept': 'application/json' }
  };
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(msg => document.getElementById('jokeContainer').innerText = msg.joke);
};

// Exercicio 2
const onScreem = () => {
  const number = new Promise((resolve, reject) => {
    const array = [];
    for (let i = 0; i < 10; i += 1) {
      array[i] = Math.pow(Math.floor(Math.random()*51), 2);
    }
    const soma = array.map((values) => values).reduce((acc, e) => acc + e);
    const soma2 = array.reduce((acc, e) => acc + e);
    const obj = {
      arr: array,
      sum: soma2
    };
    (obj.sum < 8000) ? resolve() : reject();
  });
  number
    .then(() => document.getElementById('jokeContainer').innerText = 'Promise aceita!')
    .catch(() => document.getElementById('jokeContainer').innerText = 'Promise rejeitada');
}

// Exercicio 3
const onScreem3 = () => {
  const number = new Promise((resolve, reject) => {
    const array = [];
    for (let i = 0; i < 10; i += 1) {
      array[i] = Math.pow(Math.floor(Math.random() * 51), 2);
    }
    const soma = array.map((values) => values).reduce((acc, e) => acc + e);
    const soma2 = array.reduce((acc, e) => acc + e);
    const obj = {
      method: 'GET',
      arr: array,
      sum: soma2
    };
    (obj.sum < 8000) ? resolve(obj.sum): reject('Promise rejeitada');
  });
  number
    .then((numb) => document.getElementById('jokeContainer').innerText = `Promise aceita: ${numb}`)
    .catch((err) => document.getElementById('jokeContainer').innerText = err);
}


window.onload = () => onScreem3();