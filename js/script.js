// HERO SWIPER
const heroSwiper = new Swiper(".hero-swiper", {
  loop: true,
  pagination: {
    el: ".hero-pagination",
    clickable: true,
  },
});

// CITIES SWIPER внутри первого слайда
const citiesSwiper = new Swiper(".cities-swiper", {
  slidesPerView: 4,
  spaceBetween: 20,
  pagination: {
    el: ".cities-pagination",
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

    // // закрыть все карточки
    // allCards.forEach((card) => card.classList.remove("active"));

    // открыть карточку
    current.classList.add("active");
    infoContainer.classList.add("active");
  });
});

// карточка открытая по умолчанию
const defaultCity = "nicosia";
const defaultCard = document.querySelector("#info-" + defaultCity);

defaultCard.classList.add("active");
infoContainer.classList.add("active");

// // закрытие карточек при клике вне их области
// document.addEventListener("click", (event) => {
//   const isMap = event.target.closest(".map");
//   const isCard = event.target.closest(".info__bg");

//   if (!isMap && !isCard) {
//     allCards.forEach((card) => card.classList.remove("active"));
//     infoContainer.classList.remove("active");
//   }
// });

const questionsSwiper = new Swiper(".questions__swiper", {
  spaceBetween: 20,
  slidesPerView: 3,

  breakpoints: {
    1200: { slidesPerView: 3 },
    900: { slidesPerView: 2 },
    480: { slidesPerView: 1 },
  },

  pagination: {
    el: ".question-pagination",
    clickable: true,
  },
});
