const dropdown = document.getElementById('dropdown');
const menu = document.getElementById('menu');

dropdown.addEventListener('click', function() {
  menu.classList.toggle('hidden')
});

// show div when user see it
let countStarted = false;
const countSection = document.querySelector('.js-scroll');
const windowMetade = window.innerHeight * 0.7;

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

// contador

function startCount() {
const elemento1 = document.getElementById('number1');

let contador = 0;
const limit1 = 66; // Set your desired limit here

const interval = setInterval(() => {
  if (contador <= limit1) {
    elemento1.innerHTML = contador++;
  } else {
    clearInterval(interval); // Clear the interval when the limit is reached
  }
}, 22.72);

const elemento2 = document.getElementById('number2');
let contador2 = 0;
const limit2 = 8;

const interval2 = setInterval(() => {
  if (contador2 <= limit2) {
    elemento2.innerHTML = contador2++;
  } else {
    clearInterval(interval2); // Clear the interval when the limit is reached
  }
}, 187.5);

const elemento3 = document.getElementById('number3');
let contador3 = 0;
const limit3 = 73;

const interval3 = setInterval(() => {
  if (contador3 <= limit3) {
    elemento3.innerHTML = contador3++;
  } else {
    clearInterval(interval3); // Clear the interval when the limit is reached
  }
}, 20.54);
};
// fim contador