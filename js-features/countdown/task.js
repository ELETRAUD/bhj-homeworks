const timerElement = document.getElementById('timer');


let timerValue = parseInt(timerElement.textContent);


function updateTimer() {
  
  timerValue--;
  
  
  timerElement.textContent = timerValue;
  
 
  if (timerValue === 0) {
    
    alert('Вы победили в конкурсе!');
  }
}


setInterval(updateTimer, 1000);
