const cookie = document.getElementById('cookie');
const counter = document.getElementById('clicker__counter');


let count = 0;


function handleClick() {
  
  count++;
  
 
  counter.textContent = count;
  
 
  if (cookie.width === 200) {
    cookie.width = 180;
    cookie.height = 180;
  } else {
    cookie.width = 200;
    cookie.height = 200;
  }
}


cookie.addEventListener('click', handleClick);
