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

  for (let i = 0; i < dezDaysList.length; i += 1) {
    const txt = dezDaysList[i];
    
    const tit = document.createElement('li');
    if (txt === 24 | txt === 31) {
      tit.className = 'holiday';
      tit.innerHTML = txt;
      daysWeek.appendChild(tit);
    } else if (txt === 4 | txt === 11 | txt === 18) {
      tit.className = 'day-friday';
      tit.innerHTML = txt;
      daysWeek.appendChild(tit);
    } else if (txt === 25) {
      tit.className = 'day-friday holiday';
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
  const createButton = document.createElement('button');

  createButton.innerHTML = feriado;
  createButton.id = 'btn-holiday';
  Holiday.appendChild(createButton);
};

function buttonHoliday () {
  const buttonChanges = document.querySelector('#btn-holiday');
  const classe = document.querySelectorAll('.holiday');
  const backgroundColor = 'rgb(238,238,238)';
  const backgroundwhite = 'white';
  buttonChanges.addEventListener('click',backgroundChanges);
  console.log(classe);

  function backgroundChanges () {
    for (let i = 0; i < classe.length; i += 1){
      if (classe[i].style.backgroundColor === backgroundwhite) {
        classe[i].style.backgroundColor = backgroundColor;
        console.log(classe[i]);
        console.log(backgroundColor);
      } else {
        classe[i].style.backgroundColor = backgroundwhite;
      }
    }
  };
}

function createFridayButton (fridayName) {
  const FridayButton = document.querySelector('.buttons-container');
  const createButtonFriday = document.createElement('button');

  createButtonFriday.innerHTML = fridayName;
  createButtonFriday.id = 'btn-friday';
  FridayButton.appendChild(createButtonFriday);
}

function FridayChangesButton (fridayList) {
  const recoverFridayClass = document.querySelector('#btn-friday');
  const fridayClass = document.getElementsByClassName('day-friday');
  const fridayString = 'Sexta'
  recoverFridayClass.addEventListener('click', fridayChanges);

  function fridayChanges () {
    for (let i = 0; i < fridayClass.length; i += 1){
      if (fridayClass[i].innerHTML !== fridayString) {
        fridayClass[i].innerHTML = fridayString;
      } else {
        fridayClass[i].innerHTML = fridayList[i];
      }
    }
  };
}

function zoomInFunction () {
  const daysClass = document.querySelector('#days');

  daysClass.addEventListener('mouseover', function(mousePassingOn) {
    mousePassingOn.target.style.fontSize = '35px';
    mousePassingOn.target.style.fontWeight = '600';
  });
}

function zoomOutFunction () {
  const daysClass = document.querySelector('#days');

  daysClass.addEventListener('mouseout', function(mousePassingOn) {
    mousePassingOn.target.style.fontSize = '20px';
    mousePassingOn.target.style.fontWeight = '200';
  });
}

function myTask (task) {
  const taskClass = document.querySelector('.my-tasks');
  const creatSpan = document.createElement('span');
  creatSpan.innerHTML = task;
  taskClass.appendChild(creatSpan);
}

function addStyleOnTask (color) {
  const taskElement = document.querySelector('.my-tasks');
  const createDiv = document.createElement('div');
  createDiv.className = 'task';
  createDiv.style.backgroundColor = color;
  taskElement.appendChild(createDiv);
}

function selectionTask () {
  const colorTask = document.querySelector('.task');
  colorTask.addEventListener('click', function() {
    if (colorTask.className !== 'task selected') {
      colorTask.className = 'task selected';
    } else {
      colorTask.className = 'task'
    }
  })
}

function highlightDay () {
  const daysTask = document.querySelector('#days');
  const selectedDay = document.getElementsByClassName('task selected');
  const notSelectedDay = document.querySelector('.task');
  const colorbackground = notSelectedDay.style.backgroundColor;

  daysTask.addEventListener('click', function(selectedDayId) {
    const colorTarget = selectedDayId.target.style.color;
    // console.log(selectedDay[0]);
    // console.log(colorTarget);
    // console.log(colorbackground);
    if (selectedDay.length > 0 && colorTarget !== colorbackground) {
      // console.log('Muda o BG')
      selectedDayId.target.style.color = selectedDay[0].style.backgroundColor;
    } else if (colorTarget === colorbackground && selectedDay.length !== 0) {
      // console.log('Volta ano normal')
      selectedDayId.target.style.color = 'rgb(119,119,119)';
    }
  })
};

function addingTaskInList () {
  const inputTaks = document.querySelector('#task-input');
  const buttonInputTask = document.querySelector('#btn-add');
  const listTask = document.querySelector('.task-list');
  
  buttonInputTask.addEventListener('click',function() {
    if (inputTaks.value.length > 0) {
      const createTaskList = document.createElement('li');
      createTaskList.innerText = inputTaks.value;
      listTask.appendChild(createTaskList);
      inputTaks.value = '';
    } else {
      alert('Não apresentou nenhuma tarefa nova.');
    }
  });
  
  buttonInputTask.addEventListener('keyup',function(event) {
    if (event.keyCode == 'Enter' && inputTaks.value.length > 0) {
      const createTaskList = document.createElement('li');
      createTaskList.innerText = inputTaks.value;
      listTask.appendChild(createTaskList);
      inputTaks.value = '';
    }
  });
}

createDaysOfTheWeek()
createDaysOfMonth()
createHoliday('Feriados')
buttonHoliday();
createFridayButton('Sexta-Feira');
FridayChangesButton([4, 11, 18, 25]);
zoomInFunction()
zoomOutFunction()
myTask('Projetos');
addStyleOnTask('rgb(255,255,255)')
selectionTask();
highlightDay();
addingTaskInList();