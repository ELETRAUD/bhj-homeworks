const revealElements = document.querySelectorAll('.reveal');



function isInViewport(element) {

  const rect = element.getBoundingClientRect();

  return (

    rect.top >= 0 &&

    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)

  );

}




function handleScroll() {

  revealElements.forEach(element => {

    if (isInViewport(element)) {

      element.classList.add('reveal_active');

    }

  });

}



window.addEventListener('scroll', handleScroll);



handleScroll();

