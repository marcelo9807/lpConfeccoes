// Ativando todos os Swipers da página
document.querySelectorAll(".swiper").forEach((el, index) => {
  new Swiper(el, {
    loop: true,
    navigation: {
      nextEl: el.querySelector(".swiper-button-next"),
      prevEl: el.querySelector(".swiper-button-prev"),
    },
    slidesPerView: 1,
    spaceBetween: 20,
    observer: true,
    observeParents: true,
  });
});
