let currentIndex = 0;
  const slides = document.querySelector('.slider');
  const totalSlides = document.querySelectorAll('.slide').length;
  const dotsContainer = document.querySelector('.dots');

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll('.dot');

  dots[currentIndex].classList.add('active');

  setInterval(() => {
    if (currentIndex < totalSlides - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateSlider();
  }, 3000);

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      currentIndex = index;
      updateSlider();
    });
  });
  function updateSlider() {
    slides.style.transform = `translateX(${-currentIndex * 100}%)`;
    dots.forEach((dot, index) => {
      if (index === currentIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  }