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

  // Move circle
// Função para verificar se um elemento está visível na parte inferior da tela
function isElementInBottomViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

  function centerInnovateCircle() {
    const adaptCircle = document.getElementById('adapt-circle');
    const innovateCircle = document.getElementById('innovate-circle');
  
    if (isElementInBottomViewport(adaptCircle)) {
      const scrollY = window.scrollY;
      const adaptCircleTop = adaptCircle.getBoundingClientRect().top;
  
      // Calcula a distância relativa entre "adapt-circle" e o topo da viewport
      const distance = window.innerHeight - adaptCircleTop;
  
      // Calcula a porcentagem com base na distância relativa
      let percentage = (distance / window.innerHeight) * 100;
  
      // Limita a porcentagem a 20% se for maior
      percentage = Math.min(percentage, 20);

  
      // Aplica a transformação gradual ao elemento "innovate-circle"
      const translateX = 0 + percentage / 2;
      innovateCircle.style.transform = `translateX(${translateX}%)`;
    } else {
      // Quando "adapt-circle" não está na viewport, retorna "innovate-circle" à posição original
      innovateCircle.style.transform = 'translateX(0%)';
    }
  }

  function centerPartnerCircle() {
    const adaptCircle = document.getElementById('adapt-circle');
    const partnerCircle = document.getElementById('partner-circle');
  
    if (isElementInBottomViewport(adaptCircle)) {
      const scrollY = window.scrollY;
      const adaptCircleTop = adaptCircle.getBoundingClientRect().top;
  
      // Calcula a distância relativa entre "adapt-circle" e o topo da viewport
      const distance = window.innerHeight - adaptCircleTop - (0.178 * window.innerHeight);
  
      // Calcula a porcentagem com base na distância relativa
      let percentage = (distance / window.innerHeight) * 100;
  
      // Limita a porcentagem a 20% se for maior
      percentage = Math.min(percentage, 35);
  
      // Aplica a transformação gradual ao elemento "innovate-circle"
      const translateX = 0 + percentage / 2;
      partnerCircle.style.transform = `translateX(${-translateX}%)`;
    } else {
      // Quando "adapt-circle" não está na viewport, retorna "innovate-circle" à posição original
      partnerCircle.style.transform = 'translateX(0%)';
    }
  }
  
  // Adicione um ouvinte de eventos de rolagem

  const breakpointMediaQueryMobile = window.matchMedia('(min-width: 349px) and (max-width: 979px)');

  const handleBreakpointChangeMobile = (event) => {
    if (event.matches) {
      // Add your code to execute when the breakpoint is matched (viewport width is between 349px and 979px)
      window.addEventListener('scroll', centerInnovateCircle);
      window.addEventListener('scroll', centerPartnerCircle);
    } else {
      // Remove the event listeners when the breakpoint condition is not met
      window.removeEventListener('scroll', centerInnovateCircle);
      window.removeEventListener('scroll', centerPartnerCircle);
    }
  };
  
  // Attach the callback function to the media query's change event
  breakpointMediaQueryMobile.addEventListener('change', handleBreakpointChangeMobile);
  
  // Call the handleBreakpointChangeMobile function initially to check the initial state
  handleBreakpointChangeMobile(breakpointMediaQueryMobile);




 /////// 980 breakpoint move circle ////////


  function centerInnovateCircleLaptop() {
    const adaptCircle = document.getElementById('js-top');
    const innovateCircle = document.getElementById('innovate-circle');
  
    if (isElementInBottomViewport(adaptCircle)) {
      const scrollY = window.scrollY;
      const adaptCircleTop = adaptCircle.getBoundingClientRect().top + (window.innerHeight * 0.2 );
  
      // Calcula a distância relativa entre "adapt-circle" e o topo da viewport
      const distance = window.innerHeight - adaptCircleTop;
  
      // Calcula a porcentagem com base na distância relativa
      let percentage = (distance / window.innerHeight) * 75;
  
      // Limita a porcentagem a 20% se for maior
      percentage = Math.min(percentage, 40);
  
      // Aplica a transformação gradual ao elemento "innovate-circle"
      const translateX = 0 + percentage / 5;
      innovateCircle.style.transform = `translateX(${translateX}%)`;
    } else {
      // Quando "adapt-circle" não está na viewport, retorna "innovate-circle" à posição original
      innovateCircle.style.transform = 'translateX(0%)';
    }
  }

  function centerPartnerCircleLaptop() {
    const adaptCircle = document.getElementById('js-top');
    const partnerCircle = document.getElementById('partner-circle');
    const bottomDiv = document.getElementById('js-bottom');
    const bottomDivTop = bottomDiv.getBoundingClientRect().top
  
    if (isElementInBottomViewport(adaptCircle)) {
      const scrollY = window.scrollY;
      const adaptCircleTop = adaptCircle.getBoundingClientRect().top + (window.innerHeight * 0.2 );
  
      // Calcula a distância relativa entre "adapt-circle" e o topo da viewport
      const distance = window.innerHeight - adaptCircleTop;
  
      // Calcula a porcentagem com base na distância relativa
      let percentage = (distance / window.innerHeight) * 75;
  
      // Limita a porcentagem a 20% se for maior
      percentage = Math.min(percentage, 40);
  
      // Aplica a transformação gradual ao elemento "innovate-circle"
      const translateX = 0 + percentage / 5;
      partnerCircle.style.transform = `translateX(${-translateX}%)`;
    } else {
      // Quando "adapt-circle" não está na viewport, retorna "innovate-circle" à posição original
      partnerCircle.style.transform = 'translateX(0%)';
    }
  }
  
  const breakpointMediaQuery = window.matchMedia('(min-width: 981px) and (max-width: 1399px)');

  const handleBreakpointChange = (event) => {
    if (event.matches) {
      // Add your code to execute when the breakpoint is matched (viewport width is between 349px and 979px)
      window.addEventListener('scroll', centerInnovateCircleLaptop);
      window.addEventListener('scroll', centerPartnerCircleLaptop);
    } else {
      // Remove the event listeners when the breakpoint condition is not met
      window.removeEventListener('scroll', centerInnovateCircleLaptop);
      window.removeEventListener('scroll', centerPartnerCircleLaptop);
    }
  };
  
  // Attach the callback function to the media query's change event
  breakpointMediaQuery.addEventListener('change', handleBreakpointChange);
  
  // Call the handleBreakpointChangeMobile function initially to check the initial state
  handleBreakpointChange(breakpointMediaQuery);


  // 1400px breakpoint

  function centerInnovateCircleDesktop() {
    const adaptCircle = document.getElementById('js-top');
    const innovateCircle = document.getElementById('innovate-circle');
  
    if (isElementInBottomViewport(adaptCircle)) {
      const scrollY = window.scrollY;
      const adaptCircleTop = adaptCircle.getBoundingClientRect().top + (window.innerHeight * 0.2 );
  
      // Calcula a distância relativa entre "adapt-circle" e o topo da viewport
      const distance = window.innerHeight - adaptCircleTop;
  
      // Calcula a porcentagem com base na distância relativa
      let percentage = (distance / window.innerHeight) * 75;
  
      // Limita a porcentagem a 20% se for maior
      percentage = Math.min(percentage, 60);
  
      // Aplica a transformação gradual ao elemento "innovate-circle"
      const translateX = 0 + percentage / 5;
      innovateCircle.style.transform = `translateX(${translateX}%)`;
    }
  }

  function centerPartnerCircleDesktop() {
    const adaptCircle = document.getElementById('js-top');
    const partnerCircle = document.getElementById('partner-circle');
  
    if (isElementInBottomViewport(adaptCircle)) {
      const scrollY = window.scrollY;
      const adaptCircleTop = adaptCircle.getBoundingClientRect().top + (window.innerHeight * 0.2 );
  
      // Calcula a distância relativa entre "adapt-circle" e o topo da viewport
      const distance = window.innerHeight - adaptCircleTop;
  
      // Calcula a porcentagem com base na distância relativa
      let percentage = (distance / window.innerHeight) * 75;
  
      // Limita a porcentagem a 20% se for maior
      percentage = Math.min(percentage, 60);
  
      // Aplica a transformação gradual ao elemento "innovate-circle"
      const translateX = 0 + percentage / 5;
      partnerCircle.style.transform = `translateX(${-translateX}%)`;
    } 
  }

  const breakpointMediaQueryDesktop = window.matchMedia('(min-width: 1400px)');

  const handleBreakpointChangeDesktop = (event) => {
    if (event.matches) {
      // Add your code to execute when the breakpoint is matched (viewport width is between 1400px)
      window.addEventListener('scroll', centerInnovateCircleDesktop);
      window.addEventListener('scroll', centerPartnerCircleDesktop);
    } else {
      // Remove the event listeners when the breakpoint condition is not met
      window.removeEventListener('scroll', centerInnovateCircleDesktop);
      window.removeEventListener('scroll', centerPartnerCircleDesktop);
    }
  };
  
  // Attach the callback function to the media query's change event
  breakpointMediaQueryDesktop.addEventListener('change', handleBreakpointChangeDesktop);
  
  // Call the handleBreakpointChangeMobile function initially to check the initial state
  handleBreakpointChangeDesktop(breakpointMediaQueryDesktop);

