const dropdown = document.getElementById('dropdown');
const menu = document.getElementById('menu');

dropdown.addEventListener('click', function() {
  menu.classList.toggle('hidden');
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

// slider

$('.slider').slick({
  dots: false,
  infinite: true,
  speed: 700,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: true,
  prevArrow: '<button type="button" class="slick-prev absolute -left-5 laptop:top-1/2 top-1/3  -translate-y-1/2 z-10"><i class="fas fa-arrow-left text-2xl"></i></button>',
  nextArrow: '<button type="button" class="slick-next absolute -right-5 laptop:top-1/2 top-1/3 -translate-y-1/2 z-10"><i class="fas fa-arrow-right text-2xl"></i></button>', 
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        arrows: true,
        dots: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
      }
    },
    {
      breakpoint: 501,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});

// fim slider


