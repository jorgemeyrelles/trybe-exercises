document.getElementsByTagName("p")[1].innerHTML = "Daqui a 2 anos me vejo trabalhando em uma ótima empresa.";
document.getElementsByClassName("main-content")[0].style.backgroundColor = 'rgb(76,164,109)';
document.getElementsByClassName("center-content")[0].style.backgroundColor = 'rgb(255,255,255)';
document.getElementsByTagName('h1')[0].innerText = 'Exercício 5.1 - JavaScript';
for (let i = 0; i < document.getElementsByTagName('p').length; i += 1) {
  document.getElementsByTagName('p')[i].style.textTransform = 'lowercase';
}
