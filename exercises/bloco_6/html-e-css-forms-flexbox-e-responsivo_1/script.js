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

function criarOpcaoEstados() {
  const pegarPrincipal = document.getElementById('estado');
  const estados = ['Selecione seu estado', 'AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO'];

  for (let i = 0; i < estados.length; i += 1) {
    const criarOpcao = document.createElement('option');
    criarOpcao.innerText = estados[i];
    criarOpcao.value = estados[i];
    pegarPrincipal.appendChild(criarOpcao);
  }
}
criarOpcaoEstados();

function verificaData(data) {
  if (data.indexOf('/') === 2 || data.indexOf('/')) {
    const dia = data.substr(0,2);
    const mes = data.substr(3,2);
    const ano = data.substr(6,4);
    if (dia >= 0 && dia <=31 && mes >= 1 && mes <= 12 && ano < 0 && ano.length === 4) {
      return true;
    } else {
      return false;
    }
  }
}

function 