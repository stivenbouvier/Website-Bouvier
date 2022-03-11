
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-main");


navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-main_visible");

  if (navMenu.classList.contains("nav-main_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
});