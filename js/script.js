const swiper = new Swiper(".hero-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 800,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // autoplay: {
  //   delay: 6000,
  //   disableOnInteraction: false,
  // },
});
