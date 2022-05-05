const navbarMenu = document.getElementById('nav-menus');
const buttonHidden = document.getElementById('nav-hidden');
const buttonToggler = document.getElementById('nav-toggler');
const navigationBar = document.getElementById('header_nav')
const scrollSection = document.querySelectorAll("#header_nav ul .nav_links");

buttonToggler.addEventListener('click', function(){
    navbarMenu.classList.toggle('show')
    navbarMenu.classList.remove('hidden')
})

buttonHidden.addEventListener('click', function(){
    navbarMenu.classList.toggle('hidden')
    navbarMenu.classList.remove('show')
})

window.onscroll = function() {
    if(window.scrollY > 30){
        navigationBar.classList.add('shadow-sm')
    } else {
        navigationBar.classList.remove('shadow-sm');   
    }
}

for (const secOne of scrollSection) {
    secOne.addEventListener('click', onClick);
}

function onClick(e) {
  e.preventDefault();
  const hrefAttr = this.getAttribute("href");
  const offsetTop = document.querySelector(hrefAttr).offsetTop - 100;

//   console.log(offsetTop);
  scroll({
    top: offsetTop,
    behavior: 'smooth'
  });
}