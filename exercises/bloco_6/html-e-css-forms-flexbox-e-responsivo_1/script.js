function submitDefault() {
  const buttonSubmite = document.getElementById('finalizar');
  buttonSubmite.addEventListener('click', (e) => {
    e.preventDefault();
  });
}
function criarResumo () {
  const buttonSubmiteResumo = document.getElementById('finalizar');
  buttonSubmiteResumo.addEventListener('click', () => {
    const getClassBloco1 = document.querySelector('.bloco-1');
    const getDivResumo = document.querySelector('#nome-texto');
    const txt = getClassBloco1.innerHTML;
    console.log(txt);
    getDivResumo.appendChild(txt);
  })
}
criarResumo();