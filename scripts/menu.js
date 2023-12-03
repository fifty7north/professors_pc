import {mainMenuHeaderFade, mainMenuContentCascadingFade} from './animation.js';

if (sessionStorage.getItem('splash') == null) {
    console.log()
    document.querySelector('body').classList.add('body-splash');
    document.querySelector('nav').classList.add('nav-splash');
    document.querySelector('footer').classList.add('footer-splash');
    document.querySelector('.main-menu').classList.add('main-menu-splash');
    mainMenuHeaderFade(2500)
    mainMenuContentCascadingFade(2600);
    sessionStorage.setItem('splash', 'animation played')
} else {
    mainMenuHeaderFade(0)
    mainMenuContentCascadingFade(100);
    document.querySelector('.splash-screen-section').style.display = 'none';
}