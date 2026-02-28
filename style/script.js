// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika clik
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik di mana saja
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
// Initialize Swiper
const swiper = new Swiper(".swiper", {
  loop: true,
  spaceBetween: 25,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    759: {
      slidesPerView: 2,
    },
    1366: {
      slidesPerView: 3,
    },
  },
});

// satlat
const satlat = new Swiper(".satlat-b", {
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    759: {
      slidesPerView: 2,
    },
    1366: {
      slidesPerView: 3,
    },
  },
});
