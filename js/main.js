const menu = document.querySelector('#menu');
const navList = document.querySelector('#nav');

menu.addEventListener('click', () => {
    navList.classList.toggle('active');
});
