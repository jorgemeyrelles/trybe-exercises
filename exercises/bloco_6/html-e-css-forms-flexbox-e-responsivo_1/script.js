function confereEmail() {
  const pegarEmail = document.querySelector('#e-mail');
  const valorEmail = pegarEmail.value;
  const confere = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/.test(valorEmail);
  if (!confere && valorEmail.length) {
    pegarEmail.value = '';
    alert('E-mail inválido');
    return false;
  }
  return valorEmail;
}

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

function submitDefault() {
  const buttonSubmite = document.getElementById('finalizar');
  buttonSubmite.addEventListener('click', (e) => {
    e.preventDefault();
  });
}
function criarResumo () {
  submitDefault();
  const pegarTodasDiv = document.querySelectorAll('.input-classe');
  const pegarSection = document.querySelector('section.bloco-3');
  const pegarButtonSubmit = document.querySelector('#finalizar');
  const pegarTextarea = document.querySelector('textarea');
  // const pegarTodosInput = document.querySelectorAll('input');
  
  pegarButtonSubmit.addEventListener('click', () => {
    const criarTituloResumo = document.createElement('h1');
    criarTituloResumo.innerHTML = 'Resumo do Currículo';
    criarTituloResumo.className = 'title';
    pegarSection.appendChild(criarTituloResumo);
    for (let i = 0; i < pegarTodasDiv.length; i += 1) {
        const criarDivResumo = document.createElement('div');
        if (pegarTodasDiv[i].type === 'radio' && !pegarTodasDiv[i].checked) {
          continue;
        }
        if (confereEmail !== false && verificaData !== false) {
          criarDivResumo.classList.add('resumo-final-div');
          criarDivResumo.innerText = pegarTodasDiv[i].value;
          pegarSection.appendChild(criarDivResumo);
        }
    }
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

function buttonLimpar() {
  const pegarButtonLimpar = document.querySelector('#limpar');
  const pegarInput = document.querySelectorAll('.input');
  const pegarResumo = document.querySelectorAll('.resumo-final-div');
  pegarButtonLimpar.addEventListener('click', () => {
    for (let i = 0; i < pegarInput.length; i += 1) {
      const valorInput = pegarInput[i].value;
      valorInput.value = '';
      console.log(pegarResumo[i].value);
    }
  });
}