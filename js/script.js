// Adicione este script abaixo do seu CSS dentro da media query
document.addEventListener('DOMContentLoaded', function() {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('nav');
    menuIcon.addEventListener('click', function() {
      nav.classList.toggle('menu-opened');
    });
  });
  