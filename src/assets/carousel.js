const carousel = document.querySelector('.carousel');
  const slides = document.querySelector('.slides');
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');

  let currentIndex = 0;

  prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.children.length) % slides.children.length;
    updateCarousel();
  });

  nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.children.length;
    updateCarousel();
  });

  function updateCarousel() {
    const translateValue = -currentIndex * 100 + '%';
    slides.style.transform = `translateX(${translateValue})`;
  }