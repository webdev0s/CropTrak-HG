$('.slider').slick({
    dots: false, // Desabilita os indicadores de slide (quantidade de slides)
    arrows: true, // Habilita as setas de navegação (previous e next)
    prevArrow: '<button type="button" class="slick-prev absolute -left-10 top-1/2 -translate-y-1/2 z-10"><i class="fa-solid fa-arrow-left text-3xl"></i></button>', // Define a seta para a esquerda
    nextArrow: '<button type="button" class="slick-next absolute -right-6 top-1/2 -translate-y-1/2 z-10"><i class="fa-solid fa-arrow-right text-3xl"></i></button>', // Define a seta para a direita
    infinite: false,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false // Altera para false para ocultar os indicadores nesse breakpoint
        }
      },
      {
        breakpoint: 780,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // Você pode adicionar mais breakpoints personalizados se necessário
    ]
  });

// Menu Drop-down 

var hamburguerMenu = document.getElementById('hamburguer-menu');
var menuBar = document.getElementById('menu-bar');

hamburguerMenu.addEventListener('click', function() {
  menuBar.classList.toggle('hidden');
});

// Images Solutions Page Hover

const divTarget = document.querySelectorAll('.div-pai');

divTarget.forEach(element => {
  const hoverEffect = element.querySelector('.hover-effect');
  const hoverEffectTwo = element.querySelector('.hover-effect-text'); // Get the specific hover-effect for this divpai

  element.addEventListener('mouseenter', () => {
    hoverEffect.classList.remove('hidden');
    hoverEffectTwo.classList.remove('hidden'); // Remove hidden class only for this divpai's hover-effect
   });

   element.addEventListener('mouseleave', () => {
    hoverEffect.classList.add('hidden');
    hoverEffectTwo.classList.add('hidden'); // Add hidden class only for this divpai's hover-effect
   });
});

// We Innovate We Adapt We Partner
  // Função para verificar se um elemento está visível na tela
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  // Função para centralizar o círculo "WE INNOVATE"
  // function centerInnovateCircle() {
  //   const innovateCircle = document.getElementById('innovate-circle');

  //   if (isElementInViewport(innovateCircle)) {
  //     innovateCircle.style.transition = 'transform 2s ease';
  //     innovateCircle.style.transform = 'translateX(20%)';
  //     innovateCircle.style.opacity = '1';
  //   } else {
  //     innovateCircle.style.transition = 'transform 2s ease'; // Adicione uma transição para tornar o retorno suave
  //     innovateCircle.style.transform = 'translateX(-50%)';
  //     innovateCircle.style.opacity = '1';
  //   }
  // }

  // // Adicione um ouvinte de eventos de rolagem
  // window.addEventListener('scroll', centerInnovateCircle);

// Função para verificar se um elemento está visível na parte inferior da tela
// Função para verificar se um elemento está visível na parte inferior da tela
// Função para verificar se um elemento está visível na parte inferior da tela
// Função para verificar se um elemento está visível na parte inferior da tela
// function isElementInBottomViewport(el) {
//   const rect = el.getBoundingClientRect();
//   return rect.top <= window.innerHeight && rect.bottom >= 0;
// }

// // Função para centralizar o círculo gradualmente
// function centerInnovateCircle() {
//   const adaptCircle = document.getElementById('adapt-circle');
//   const innovateCircle = document.getElementById('innovate-circle');

//   if (isElementInBottomViewport(adaptCircle)) {
//     const scrollY = window.scrollY;
//     const adaptCircleTop = adaptCircle.getBoundingClientRect().top;

//     // Calcula a distância relativa entre "adapt-circle" e o topo da viewport
//     const distance = window.innerHeight - adaptCircleTop;

//     // Calcula a porcentagem com base na distância relativa
//     const percentage = (distance / window.innerHeight) * 100;

//     // Aplica a transformação gradual ao elemento "innovate-circle"
//     const translateX = 0 + percentage / 2;
//     innovateCircle.style.transform = `translateX(${translateX}%)`;
//   } else {
//     // Quando "adapt-circle" não está na viewport, retorna "innovate-circle" à posição original
//     innovateCircle.style.transform = 'translateX(20%)';
//   }
// }

// // Adicione um ouvinte de eventos de rolagem
// window.addEventListener('scroll', centerInnovateCircle);


// Função para verificar se um elemento está visível na parte inferior da tela
function isElementInBottomViewport(el) {
  const rect = el.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

// Função para centralizar o círculo gradualmente
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
    percentage = Math.min(percentage, 41.5);

    // Aplica a transformação gradual ao elemento "innovate-circle"
    const translateX = 0 + percentage / 2;
    innovateCircle.style.transform = `translateX(${translateX}%)`;
  } else {
    // Quando "adapt-circle" não está na viewport, retorna "innovate-circle" à posição original
    innovateCircle.style.transform = 'translateX(0%)';
  }
}

// Adicione um ouvinte de eventos de rolagem
window.addEventListener('scroll', centerInnovateCircle);
