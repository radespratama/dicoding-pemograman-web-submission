const navigationBar = document.getElementById("header-nav");
const navbarMenu = document.getElementById("nav-menus");
const buttonHidden = document.getElementById("nav-hidden");
const buttonShow = document.getElementById("nav-show");

buttonShow.addEventListener("click", () => {
  navbarMenu.classList.toggle("right-0");
  navbarMenu.classList.remove("right-100");
});

buttonHidden.addEventListener("click", () => {
  navbarMenu.classList.toggle("right-100");
  navbarMenu.classList.remove("right-0");
});

window.onscroll = () => {
  if (window.scrollY > 30) {
    navigationBar.classList.add("shadow-sm");
  } else {
    navigationBar.classList.remove("shadow-sm");
  }
};

document.getElementById("year").append(new Date().getFullYear());

