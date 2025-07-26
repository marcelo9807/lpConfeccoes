let slideIndex = 0;

function mostrarSlide(index) {
  const slides = document.querySelector(".slides");
  const totalSlides = slides.children.length;

  // Garantir que o index fique no intervalo correto
  if (index >= totalSlides) slideIndex = 0;
  else if (index < 0) slideIndex = totalSlides - 1;
  else slideIndex = index;

  const offset = -slideIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;
}

function mudarSlide(n) {
  mostrarSlide(slideIndex + n);
}

// Muda automaticamente a cada 5 segundos
setInterval(() => mudarSlide(1), 5000);

// Inicializa o primeiro slide
document.addEventListener("DOMContentLoaded", () => mostrarSlide(0));
