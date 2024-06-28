import { navbarToggler, scrollToTop } from './index.js';

navbarToggler();
scrollToTop();




const accordions = document.querySelectorAll('.accordion-content');

accordions.forEach(function (accordion) {
    accordion.addEventListener('click', function (e) {
        e.currentTarget.classList.toggle('drop');
    });
});

