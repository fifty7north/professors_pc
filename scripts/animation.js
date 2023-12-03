const letters = 'abcdefghijklmnopqrztuvwxyz'

/*Main menu header*/

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
}, 2500);

/*Main menu content fade in animation*/

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
}, 2600);

/*Main menu game window hover*/

document.querySelectorAll('.game-window-hover').forEach(game => {
    game.onmouseover = Event => { //text effect
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
        //info bar colour change
        let infoBg1 = game.parentNode.querySelector('.game-window-info-bg');
        let infoBg2 = game.parentNode.querySelector('.game-window-info-accent');
        let id = infoBg1.id.substring(20);
        infoBg1.classList.add('game-window-colour-change-' + id);
        infoBg1.classList.remove('game-window-colour-change-default');
        infoBg2.classList.add('game-window-colour-change-' + id + '-accent');
        infoBg2.classList.remove('game-window-colour-change-default-accent');
        //image bg colour change
        let imageBg1 = game.parentNode.querySelector('.game-window-image-bg-accent-light-default');
        let imageBg2 = game.parentNode.querySelector('.game-window-image-bg-accent-dark-default');
        imageBg1.classList.add('game-window-image-bg-accent-light-hover');
        imageBg1.classList.remove('game-window-image-bg-accent-light-default');
        imageBg2.classList.add('game-window-image-bg-accent-dark-hover');
        imageBg2.classList.remove('game-window-image-bg-accent-dark-default');
        //sprite animation
        let spriteAnimationDelay = 0;
        game.parentNode.querySelectorAll('.menu-sprite-hover').forEach(sprite => {
            spriteAnimationDelay = spriteAnimationDelay + 50;
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
        //info bar colour change
        let infoBg1 = game.parentNode.querySelector('.game-window-info-bg');
        let infoBg2 = game.parentNode.querySelector('.game-window-info-accent');
        let id = infoBg1.id.substring(20);
        infoBg1.classList.add('game-window-colour-change-default');
        infoBg1.classList.remove('game-window-colour-change-' + id);
        infoBg2.classList.add('game-window-colour-change-default-accent');
        infoBg2.classList.remove('game-window-colour-change-' + id + '-accent');
        //image bg colour change
        let imageBg1 = game.parentNode.querySelector('.game-window-image-bg-accent-light-hover');
        let imageBg2 = game.parentNode.querySelector('.game-window-image-bg-accent-dark-hover');
        imageBg1.classList.add('game-window-image-bg-accent-light-default');
        imageBg1.classList.remove('game-window-image-bg-accent-light-hover');
        imageBg2.classList.add('game-window-image-bg-accent-dark-default');
        imageBg2.classList.remove('game-window-image-bg-accent-dark-hover');
        //sprite animation
        let spriteAnimationDelay = 0;
        game.parentNode.querySelectorAll('.menu-sprite-default').forEach(sprite => {
            spriteAnimationDelay = spriteAnimationDelay + 50;
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