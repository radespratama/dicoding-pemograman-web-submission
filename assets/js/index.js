const navbarMenu = document.getElementById("sidebar");
const navbarNavigation = document.querySelector(".s-header");
const buttonHidden = document.getElementById("btn-close");
const buttonShow = document.getElementById("btn-toggler");

buttonShow.addEventListener("click", () => {
  navbarMenu.classList.toggle("show");
  navbarMenu.classList.remove("hide");
});

buttonHidden.addEventListener("click", () => {
  navbarMenu.classList.remove("show");
  navbarMenu.classList.toggle("hide");
});

window.onscroll = () => {
  if (window.scrollY > 30) {
    navbarNavigation.classList.add("shadow-sm");
  } else {
    navbarNavigation.classList.remove("shadow-sm");
  }
};

document.getElementById("year").append(new Date().getFullYear());
