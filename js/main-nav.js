var btnNavMenu = document.querySelector(".main-nav__toggle");
var navMenu = document.querySelector(".main-nav__list");



// navMenu.classList.remove('main-nav__list--no-js');

btnNavMenu.addEventListener('click', toggleMenu);

function toggleMenu() {
  navMenu.classList.toggle('main-nav__list--no-js');
  btnNavMenu.classList.toggle('main-nav__toggle--open');
}