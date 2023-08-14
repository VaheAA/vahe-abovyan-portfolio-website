const toggle = document.querySelector('.switch__input[data-theme-toggle]');

toggle.addEventListener('click', () => {
  document.body.classList.toggle('light');
});
