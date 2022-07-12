(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };

}());

(function () {
const Itemburger = document.querySelector('.burger');
const menu = document.querySelector('.nav_menu');
const menu_close = document.querySelector('.header_nav-close');
Itemburger.addEventListener ('click', () => {
menu.classList.add ('nav_menu_active');
})
menu_close.addEventListener('click',() => {
menu.classList.remove
 ('nav_menu_active');
})
// document.addEventListener('DOMContentLoaded', () => {
//     window.addEventListener('click', e => { // при клике в любом месте окна браузера
//         const menu = document.querySelector('.nav_menu');
//         const menu_close = document.querySelector('.header_nav-close');
//         const target = e.target // находим элемент, на котором был клик
//     if (!target.closest('.nav_menu_active') && !target.closest('.header__nav-close')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
//       menu.classList.remove('nav_menu_active') // то закрываем окно навигации, удаляя активный класс
//     }
//   })

// })
}());
 
