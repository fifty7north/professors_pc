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
        infoBg1.classList.add('game-window-colour-change-'+id);
        infoBg1.classList.remove('game-window-colour-change-default');
        infoBg2.classList.add('game-window-colour-change-'+id+'-accent');
        infoBg2.classList.remove('game-window-colour-change-default-accent');
        //pokemon sprites hover effect
        let spriteContainer = game.parentNode.querySelector('.game-window-image');
        spriteContainer.classList.add('game-window-image-hover');
        spriteContainer.classList.remove('game-window-image');
        //background image hover effect
        let background = game.parentNode.querySelector('.game-window-image-bg');
        background.classList.add('game-window-image-bg-hover');
        background.classList.remove('game-window-image-bg');
    });
    game.addEventListener('mouseleave', () => {
        //info bar colour change
        let infoBg1 = game.parentNode.querySelector('.game-window-info-bg');
        let infoBg2 = game.parentNode.querySelector('.game-window-info-accent');
        let id = infoBg1.id.substring(20);
        infoBg1.classList.add('game-window-colour-change-default');
        infoBg1.classList.remove('game-window-colour-change-'+id);
        infoBg2.classList.add('game-window-colour-change-default-accent');
        infoBg2.classList.remove('game-window-colour-change-'+id+'-accent');
        //pokemon sprites hover effect
        let spriteContainer = game.parentNode.querySelector('.game-window-image-hover');
        spriteContainer.classList.add('game-window-image');
        spriteContainer.classList.remove('game-window-image-hover');
        //background image hover effect
        let background = game.parentNode.querySelector('.game-window-image-bg-hover');
        background.classList.add('game-window-image-bg');
        background.classList.remove('game-window-image-bg-hover');
    });
});