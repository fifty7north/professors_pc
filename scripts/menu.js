/**
 * 
 * Makes sure the splash animation only plays on first page load using session storage
 * 
 */

if (sessionStorage.getItem('splash') == null) { //on first load

    //Adds relevant splash animation class

    document.querySelector('body').classList.add('body-splash');
    document.querySelector('nav').classList.add('nav-splash');
    document.querySelector('footer').classList.add('footer-splash');
    document.querySelector('.main-menu').classList.add('main-menu-splash');

    //Plays on load animations and displays main menu content after delay

    document.querySelector('.page-bg').classList.add('page-bg-splash');
    setTimeout(() => {document.querySelector('.page-bg').classList.add('page-bg-fade-in')}, 2500);
    mainMenuHeaderFade(2500);
    mainMenuContentCascadingFade(2600);

    //adds value to session storage to ensure the splash plays only once

    sessionStorage.setItem('splash', 'animation played');

} else { //on not first load

    //Plays on load animations and displays main menu content immediately

    document.querySelector('.page-bg').classList.add('page-bg-no-splash');
    mainMenuHeaderFade(0)
    mainMenuContentCascadingFade(100);
    document.querySelector('.splash-screen-section').style.display = 'none';
}

/**
 * 
 * Constant parameters used in animations
 * 
 */

const letters = 'abcdefghijklmnopqrstuvwxyz' //used in letter scramble effect

/**
 * 
 * Main menu on load animations
 * @param {number} delay 
 * 
 */

//Main header text scramble effect

function mainMenuHeaderFade(delay) {
    setTimeout(() => {
        document.querySelectorAll('.main-menu-header-text').forEach(letter => {
            let id = letter.id.substring(22);
            let iterations = 0;
            let interval = setInterval(() => {
                letter.innerHTML = letters[Math.floor(Math.random() * 26)];
                if (iterations >= id * 2) {
                    letter.innerHTML = letter.dataset.letter;
                    document.getElementById(letter.id).style.fontFamily = 'Megrim';
                    clearInterval(interval);
                }
                iterations++;
            }, 50);
        });
    }, delay);
}

//Game window cascading fade in animation

function mainMenuContentCascadingFade(delay) {
    setTimeout(() => {
        let gameWindows = [];
        document.querySelectorAll('.main-menu-game-window').forEach(game => {
            gameWindows.push(game)
        });
        for (let i = 0; i < gameWindows.length; i++) {
            let interval = i * 100 + 100;
            setTimeout(() => {
                gameWindows[i].classList.add('game-window-fade-in');
            }, interval);
        }
    }, delay);
}

/**
 * 
 * Main menu hover animations
 * 
 */

document.querySelectorAll('.game-window-hover').forEach(game => {

    //Info bar text scramble effect

    game.onmouseover = Event => {
        let title = Event.target.parentNode.querySelector('.game-window-info-title');
        title.querySelectorAll('.game-window-info-title-text').forEach(letter => {
            let id = letter.id.substring(20);
            let iterations = 0;
            document.getElementById(letter.id).style.fontFamily = 'Pokemon-Glyphs';
            let interval = setInterval(() => {
                letter.innerHTML = letters[Math.floor(Math.random() * 26)];
                if (iterations >= id) {
                    letter.innerHTML = letter.dataset.letter;
                    document.getElementById(letter.id).style.fontFamily = 'Amiko';
                    clearInterval(interval);
                }
                iterations++;
            }, 50);
        });
    }

    game.addEventListener('mouseenter', () => {

        //Change window top info bar colour to match the game when hovered

        let infoBg1 = game.parentNode.querySelector('.game-window-info-bg');
        let infoBg2 = game.parentNode.querySelector('.game-window-info-accent');
        let id = infoBg1.id.substring(20);
        infoBg1.classList.add('game-window-colour-change-' + id);
        infoBg1.classList.remove('game-window-colour-change-default');
        infoBg2.classList.add('game-window-colour-change-' + id + '-accent');
        infoBg2.classList.remove('game-window-colour-change-default-accent');

        //Change window background graphic colour to green when hovered

        let imageBg1 = game.parentNode.querySelector('.game-window-image-bg-accent-light-default');
        let imageBg2 = game.parentNode.querySelector('.game-window-image-bg-accent-dark-default');
        imageBg1.classList.add('game-window-image-bg-accent-light-hover');
        imageBg1.classList.remove('game-window-image-bg-accent-light-default');
        imageBg2.classList.add('game-window-image-bg-accent-dark-hover');
        imageBg2.classList.remove('game-window-image-bg-accent-dark-default');

        //Cascading sprite animation when window is hovered*/

        let spriteAnimationDelay = 0;
        game.parentNode.querySelectorAll('.menu-sprite-hover').forEach(sprite => {
            spriteAnimationDelay = spriteAnimationDelay + 50; //stops visual bug by delaying animation if there are still sprites performing the sprite unhover animation
        });
        setTimeout(() => {
            let menuSprite = game.parentNode.querySelectorAll('.menu-sprite-default');
            let menuSpriteDelay = -50;
            menuSprite.forEach(sprite => {
                menuSpriteDelay = menuSpriteDelay + 50;
                setTimeout(() => {
                    sprite.classList.add('menu-sprite-hover');
                    sprite.classList.remove('menu-sprite-default');
                }, menuSpriteDelay);
            });
        }, spriteAnimationDelay);
    });

    game.addEventListener('mouseleave', () => {

        //Change window top info bar colour to black when not hovered

        let infoBg1 = game.parentNode.querySelector('.game-window-info-bg');
        let infoBg2 = game.parentNode.querySelector('.game-window-info-accent');
        let id = infoBg1.id.substring(20);
        infoBg1.classList.add('game-window-colour-change-default');
        infoBg1.classList.remove('game-window-colour-change-' + id);
        infoBg2.classList.add('game-window-colour-change-default-accent');
        infoBg2.classList.remove('game-window-colour-change-' + id + '-accent');

        //Change window background graphic colour to red when not hovered

        let imageBg1 = game.parentNode.querySelector('.game-window-image-bg-accent-light-hover');
        let imageBg2 = game.parentNode.querySelector('.game-window-image-bg-accent-dark-hover');
        imageBg1.classList.add('game-window-image-bg-accent-light-default');
        imageBg1.classList.remove('game-window-image-bg-accent-light-hover');
        imageBg2.classList.add('game-window-image-bg-accent-dark-default');
        imageBg2.classList.remove('game-window-image-bg-accent-dark-hover');

        //Cascading sprite animation when window is not hovered

        let spriteAnimationDelay = 0;
        game.parentNode.querySelectorAll('.menu-sprite-default').forEach(sprite => {
            spriteAnimationDelay = spriteAnimationDelay + 50; //stops visual bug by delaying animation if there are still sprites performing the sprite hover animation
        });
        setTimeout(() => {
            let menuSprite = game.parentNode.querySelectorAll('.menu-sprite-hover');
            let menuSpriteDelay = -50;
            menuSprite.forEach(sprite => {
                menuSpriteDelay = menuSpriteDelay + 50;
                setTimeout(() => {
                    sprite.classList.add('menu-sprite-default');
                    sprite.classList.remove('menu-sprite-hover');
                }, menuSpriteDelay);
            });
        }, spriteAnimationDelay);
    });
});