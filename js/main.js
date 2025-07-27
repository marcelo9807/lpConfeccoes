document.querySelectorAll(".swiper").forEach((container) => {
  new Swiper(container, {
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: container.querySelector(".swiper-button-next"),
      prevEl: container.querySelector(".swiper-button-prev"),
    },
    loop: true,
  });
});
