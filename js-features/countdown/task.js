const timerElement = document.getElementById('timer');
let timerValue = parseInt(timerElement.textContent);
let intervalId;

function updateTimer() {
  timerValue--;
  timerElement.textContent = timerValue;

  if (timerValue === 0) {
    clearInterval(intervalId);
    alert('Вы победили в конкурсе!');
  }
}

intervalId = setInterval(updateTimer, 1000);
