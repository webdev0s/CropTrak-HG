$('.slider').slick({
    dots: false, // Desabilita os indicadores de slide (quantidade de slides)
    arrows: true, // Habilita as setas de navegação (previous e next)
    prevArrow: '<button type="button" class="slick-prev absolute -left-10 top-1/2 -translate-y-1/2 z-10"><i class="fa-solid fa-arrow-left text-3xl"></i></button>', // Define a seta para a esquerda
    nextArrow: '<button type="button" class="slick-next absolute -right-6 top-1/2 -translate-y-1/2 z-10"><i class="fa-solid fa-arrow-right text-3xl"></i></button>', // Define a seta para a direita
    infinite: false,
    speed: 700,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
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