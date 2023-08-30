const divTarget = document.querySelectorAll('.divpai');

divTarget.forEach(element => {
  const hoverEffect = element.querySelector('.hover-effect');
  const hoverEffectTwo = element.querySelector('.hover-effect-text'); // Get the specific hover-effect for this divpai

  element.addEventListener('mouseenter', () => {
    hoverEffect.classList.remove('hidden');
    hoverEffectTwo.classList.remove('hidden'); // Remove hidden class only for this divpai's hover-effect
  });

  element.addEventListener('mouseleave', () => {
    hoverEffect.classList.add('hidden');
    hoverEffectTwo.classList.add('hidden');  // Add hidden class only for this divpai's hover-effect
  });
});
