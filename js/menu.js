const menuLogo = document.querySelector('.nav');
const menuHamburger = document.querySelector('.nav-hamburger');
const menuDropdown = document.querySelector('.nav-dropdown');

menuHamburger.addEventListener('mouseover', () => {
  menuHamburger.classList.toggle('hidden');
  menuDropdown.classList.toggle('hidden');
  setTimeout(() => {
    menuHamburger.classList.toggle('hidden');
    menuDropdown.classList.toggle('hidden');
  }, 3000);
});
