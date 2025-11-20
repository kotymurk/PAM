const swiper = new Swiper(".hero-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  speed: 800,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

const burger = document.getElementById("burger");
const menu = document.querySelector(".menu__body");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  menu.classList.toggle("active");
});

const infoContainer = document.querySelector(".information__container");
const allCards = document.querySelectorAll(".info__bg");

document.querySelectorAll(".city").forEach((city) => {
  city.addEventListener("click", (event) => {
    event.stopPropagation();

    const id = city.dataset.city;
    const current = document.querySelector("#info-" + id);

    // закрыть открытую карточку
    if (current.classList.contains("active")) {
      current.classList.remove("active");
      infoContainer.classList.remove("active");
      return;
    }

    // закрыть все карточки
    allCards.forEach((card) => card.classList.remove("active"));

    // открыть карточку
    current.classList.add("active");
    infoContainer.classList.add("active");
  });
});

// закрытие карточек при клике вне их области
// document.addEventListener("click", (event) => {
//   const isMap = event.target.closest(".map");
//   const isCard = event.target.closest(".info__bg");

//   if (!isMap && !isCard) {
//     allCards.forEach((card) => card.classList.remove("active"));
//     infoContainer.classList.remove("active");
//   }
// });
