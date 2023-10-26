const rotatorCases = document.querySelectorAll('.rotator__case');


function rotateText() {
  
  const activeCase = document.querySelector('.rotator__case_active');

  
  const nextCase = activeCase.nextElementSibling || rotatorCases[0];

  
  activeCase.classList.remove('rotator__case_active');

  
  nextCase.classList.add('rotator__case_active');
}


setInterval(rotateText, 1000);
