const hamburgerBtn = document.querySelector(".menu-btn");
const themeIcon = document.querySelector(".theme-icon");
const menu = document.querySelector(".menu");
const menuLinks = document.querySelectorAll(".menu > a");
const div = document.getElementsByClassName("intro-text");
let darkMode = localStorage.getItem("darkMode");

// Add EventListener To Menu
hamburgerBtn.addEventListener("click", toogleMenu);
themeIcon.addEventListener("click", themeMenu);
menuLinks.forEach((a) => {
  a.addEventListener("click", toogleMenu);
  a.addEventListener("click", activeClass);

  if (a.textContent.toLowerCase() == "home") {
    a.addEventListener("click", fullHero);
  }
});

// OnScroll Add EventListener To Window
window.addEventListener("scroll", addScroll);

//Toogle Menu
function toogleMenu(e) {
  hamburgerBtn.classList.toggle("fa-xmark");
  menu.classList.toggle("show-menu");

  if (menu.classList.contains("show-menu")) {
    window.addEventListener("scroll", closeMenuOnScroll);
  }
}

function closeMenuOnScroll() {
  menu.classList.remove("show-menu");
  hamburgerBtn.classList.remove("fa-xmark");
}

// Theme
function enableDarkMode() {
  let body = document.body;
  themeIcon.classList.remove("fa-moon");
  themeIcon.classList.add("fa-sun");

  body.classList.add("dark-mode");

  localStorage.setItem("darkMode", "enabled");
}
function disableDarkMode() {
  let body = document.body;
  themeIcon.classList.remove("fa-sun");
  themeIcon.classList.add("fa-moon");
  body.classList.remove("dark-mode");

  localStorage.setItem("darkMode", "disabled");
}

if (darkMode === "enabled") {
  enableDarkMode();
}

function themeMenu() {
  darkMode = localStorage.getItem("darkMode");
  if (darkMode != "enabled") {
    enableDarkMode();
    console.log(darkMode);
  } else {
    disableDarkMode();
    console.log(darkMode);
  }
}
// OnScroll
function addScroll() {
  let header = document.querySelector("#header");
  header.classList.add("on-scroll");

  if (window.scrollY == 0) {
    let hero = document.getElementById("hero");
    hero.classList.remove("full-hero");
    header.classList.remove("on-scroll");
  }
}

// Add Active Class To Link
function activeClass(e) {
  let link = e.target;

  menuLinks.forEach((e) => {
    e.classList.remove("active");
  });
  link.classList.add("active");
}

// Hero section
function fullHero() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  console.log(window.scrollY);
  let hero = document.getElementById("hero");
  hero.classList.add("full-hero");
}
