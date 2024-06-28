import { navbarToggler } from './index.js';

navbarToggler();


AOS.init({
    offset: 200,
    delay: 100,
    duration: 1000,
    easing: 'ease',
    once: false,
    mirror: false,
    anchorPlacement: 'top-bottom',
});
