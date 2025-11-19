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

const burger = document.getElementById("burger");
const menu = document.querySelector(".menu__body");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});

document.querySelectorAll(".city").forEach((city) => {
  city.addEventListener("click", () => {
    const id = city.dataset.city;

    document.querySelectorAll(".info__bg").forEach((card) => {
      card.classList.remove("active");
    });

    const current = document.querySelector("#info-" + id);
    if (current) {
      current.classList.add("active");
    }
  });
});
