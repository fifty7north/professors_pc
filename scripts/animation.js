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
        let infoBg1 = game.parentNode.querySelector('.game-window-info-bg');
        let infoBg2 = game.parentNode.querySelector('.game-window-info-accent');
        let id = infoBg1.id.substring(20);
        infoBg1.classList.add('game-window-colour-change-'+id);
        infoBg1.classList.remove('game-window-colour-change-default');
        infoBg2.classList.add('game-window-colour-change-'+id+'-accent');
        infoBg2.classList.remove('game-window-colour-change-default-accent');
    });
    game.addEventListener('mouseleave', () => {
        let infoBg1 = game.parentNode.querySelector('.game-window-info-bg');
        let infoBg2 = game.parentNode.querySelector('.game-window-info-accent');
        let id = infoBg1.id.substring(20);
        infoBg1.classList.add('game-window-colour-change-default');
        infoBg1.classList.remove('game-window-colour-change-'+id);
        infoBg2.classList.add('game-window-colour-change-default-accent');
        infoBg2.classList.remove('game-window-colour-change-'+id+'-accent');
    });
});