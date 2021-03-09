function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

function createDaysOfMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const daysWeek = document.querySelector('#days');
  // Escreva seu código abaixo.
  console.log(dezDaysList);
  for (let i = 0; i < dezDaysList.length; i += 1) {
    const txt = dezDaysList[i];
    
    const tit = document.createElement('li');
    if (txt === 24 | txt === 25 | txt === 31) {
      tit.className = 'holiday';
      tit.innerHTML = txt;
      daysWeek.appendChild(tit);
    } else if (txt === 4 | txt === 11 | txt === 18 | txt === 25) {
      tit.className = 'day friday';
      tit.innerHTML = txt;
      daysWeek.appendChild(tit);
    } else {
      tit.innerHTML = txt;
      tit.className = 'day';
      daysWeek.appendChild(tit);
    }
  };
}
function createHoliday(feriado) {
  const Holiday = document.querySelector('.buttons-container');
  const createTitle = document.createElement('h3');
  const createInput = document.createElement('input');
  const createButton = document.createElement('button');
  const creatSection = document.createElement('section');
  creatSection.className = 'tasks-container';
  createTitle.innerHTML = 'FERIADOS';
  // createTitle.className = 'tasks-container';
  createButton.innerHTML = 'Adicionar';
  createButton.className = '#btn-holiday';
  createInput.innerHTML = feriado;
  createInput.className = '#btn-holiday';
  createInput.placeholder = 'Escreva o feriado';
  Holiday.appendChild(creatSection);
  const holiday = document.querySelector('section');
  holiday.appendChild(createTitle);
  holiday.appendChild(createInput);
  holiday.appendChild(createButton);
}

createDaysOfTheWeek()
createDaysOfMonth()
createHoliday()