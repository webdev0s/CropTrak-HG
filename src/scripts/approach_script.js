// menu dropdown

const dropdown = document.getElementById('dropdown');
const menu = document.getElementById('menu');

dropdown.addEventListener('click', function() {
  menu.classList.toggle('hidden')
});
//show div when user see

$(document).ready(function() {
  $(".number3").html('0');
});

let countStarted = false;
const countSection = document.querySelector('.js-scroll');
const windowMetade = window.innerHeight * 0.9;

function animaScroll() {
  const sectionTop = countSection.getBoundingClientRect().top - windowMetade;
  if(sectionTop < 0) {
    countSection.classList.remove('invisible')
    if (!countStarted) {
    startCount();
    countStarted = true;
    }
  }
}

animaScroll();
window.addEventListener('scroll', animaScroll);
// end
// counter

function startCount() {
  const elemento1 = document.querySelector('.number1');
  
  let contador = 0;
  const limit1 = 500; // Set your desired limit here
  
  const interval = setInterval(() => {
    if (contador <= limit1) {
      elemento1.innerHTML = contador++;
    } else {
      clearInterval(interval); // Clear the interval when the limit is reached
    }
  }, 3);
  
  const elemento2 = document.querySelector('.number2');
  let contador2 = 0;
  const limit2 = 27;
  
  const interval2 = setInterval(() => {
    if (contador2 <= limit2) {
      elemento2.innerHTML = contador2++;
    } else {
      clearInterval(interval2); // Clear the interval when the limit is reached
    }
  }, 55.5);
  
  const elemento3 = document.querySelector('.number3');
  let contador3 = 0;
  const limit3 = 1;
  
  const interval3 = setInterval(() => {
    if (contador3 <= limit3) {
      elemento3.innerHTML = contador3++;
    } else {
      clearInterval(interval3); // Clear the interval when the limit is reached
    }
  }, 780);
 

  const elemento4 = document.querySelector('.number4');
  let contador4 = 0;
  const limit4 = 56;
  
  const interval4 = setInterval(() => {
    if (contador4 <= limit4) {
      elemento4.innerHTML = contador4++;
    } else {
      clearInterval(interval4); // Clear the interval when the limit is reached
    }
  }, 26.79);
  };


  
