//네비게이션 모바일 (navbar Mobile) -> js
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

//모바일 Memu 보여주기
const MobileMemu = () => {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
};

menu.addEventListener('click', MobileMemu);