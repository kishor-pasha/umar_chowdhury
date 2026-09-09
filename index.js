const navbarToggle = document.querySelector('.navbar-toggle');
const navbarMenu = document.querySelector('.nav-list');

navbarToggle.addEventListener('click', () => {
    navbarToggle.classList.toggle('active');
    navbarMenu.classList.toggle('active');
});