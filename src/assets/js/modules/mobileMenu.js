const mobileMenu = document.querySelector('.mobile-menu');
const menuBtn = document.querySelector('#menu-btn');
const body = document.body;

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('open');
  mobileMenu.classList.toggle('open');
  body.classList.toggle('no-scroll');
});
