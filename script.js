window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const navbarItem = document.querySelectorAll('.navbar-item');
    const burger = document.querySelector('.burger-menu');

    burger.addEventListener('click', () => {
        burger.classList.toggle('burger-active');
        navbar.classList.toggle('navbar-active');
    });

    navbarItem.forEach(item => {
        item.addEventListener('click', () => {
            burger.classList.toggle('burger-active');
            navbar.classList.toggle('navbar-active');
        })
    })
})