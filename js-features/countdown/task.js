let timerSeconds = parseInt(prompt("Введите количество секунд для таймера:"));

function countdown() {

  timerSeconds--;

  
  if (timerSeconds === 0) {
    alert("Вы победили в конкурсе!");
    clearInterval(timerInterval); 
  }
}


let timerInterval = setInterval(countdown, 1000);
