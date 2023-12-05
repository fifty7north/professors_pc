import pokemonData from './pokemon_data.js';
import typeData from './type_data.js';

/**
 * 
 * Get relevant pokemon data
 * 
 */

//Get game name and game number from url

const selectedGame = window.location.search.substring(6);
const gameOrder = ['rby', 'gsc', 'rbe', 'frlg', 'dppt', 'hgss', 'bw', 'b2w2', 'xy', 'oras', 'sm', 'usum', 'lgpe', 'swsh', 'bdsp', 'lga', 'sv'];
const gameNumber = gameOrder.indexOf(selectedGame);

//Create an array of all pokemon featured in the regional pokedex of the selected game

const gamePokemonData = [];
Object.entries(pokemonData).forEach(pokemon => {

    //Sets a check if any of the variants of the pokemon feature in the selected game

    let gameCheck = false;
    pokemon[1].forEach(pokemonVariant => {
        if (pokemonVariant['games_featured'].includes(selectedGame)) {
            gameCheck = true;
        }
    })

    //If any variant of the pokemon appears in the selected game, removes variants that do not appear in the game and pushes the remaining data to the gamePokemonData array 

    if (gameCheck == true) {
        for (let variant = 0; variant < pokemon[1].length; variant++) {
            if (!pokemon[1][variant]['games_featured'].includes(selectedGame)) {
                pokemon[1].splice(pokemon[1].indexOf(pokemon[1][variant]), 1)
            }
        }
        gamePokemonData.push(pokemon)
    }
});

//Orders gamePokemonData by region pokedex id

gamePokemonData.sort((a, b) => { return a[1][0]['regional_pokedex_id'][gameNumber] - b[1][0]['regional_pokedex_id'][gameNumber] });

//For each pokemon in the chosen game, create an array containing all the pokemon's type weakness/resistance data
//Array is ordered according to official type order, listed @https://pokemondb.net/type (normal, fire, water, electric, etc.)
//0 = pokemon has no weakness/resist to type, 1 = pokemon is weak to type, -1 = pokemon resists or is immune to type

gamePokemonData.forEach(pokemon => {
    for (let variant = 0; variant < pokemon[1].length; variant++) {

        //Gets weakness/resistance data for each type the pokemon has

        let pokemonWeaknessTypes = [];
        pokemon[1][variant]['type'].forEach(type => {
            pokemonWeaknessTypes.push(typeData['weakness/resist_data'][type]);
        })

        //Combines the weakness data of each type the pokemon has

        let pokemonWeaknessArray = [];
        for (let type = 0; type < pokemonWeaknessTypes[0].length; type++) {
            let typeWeakness = 1;
            for (let i = 0; i < pokemonWeaknessTypes.length; i++) {
                typeWeakness = typeWeakness * pokemonWeaknessTypes[i][type];
            }
            pokemonWeaknessArray.push(typeWeakness);
        }

        //If the pokemon has an ability that modifies it's weaknesses, modifies specific type value based on ability

        if (pokemon[1][variant]['ability'] !== 'default') {
            if (pokemon[1][variant]['ability'] == 'Heatproof') {
                pokemonWeaknessArray[1] = pokemonWeaknessArray[1] * 0.5;
            } else if (pokemon[1][variant]['ability'] == 'Levitate') {
                pokemonWeaknessArray[8] = 0;
            }
        }

        //Sets the values of each type in pokemonWeaknessArray to 0, 1 or -1 depending on the pokemon's weakness/resistance

        for (let type = 0; type < pokemonWeaknessArray.length; type++) {
            if (pokemonWeaknessArray[type] > 1) {
                pokemonWeaknessArray[type] = 1;
            } else if (pokemonWeaknessArray[type] < 1) {
                pokemonWeaknessArray[type] = -1;
            } else {
                pokemonWeaknessArray[type] = 0;
            }
        }

        //Removes dark/steel/fairy type data depending on game number (no dark/steel/fairy types in gen 1 games, no fairy type before gen 6 games)

        if (gameNumber < 1) {
            pokemonWeaknessArray.length = 15;
        } else if (gameNumber < 8) {
            pokemonWeaknessArray.length = 17;
        }

        //Adds the pokemonWeaknessArray to the pokemon's data

        Object.assign(pokemon[1][variant], { 'type_weakness': pokemonWeaknessArray });
    }
});

//For each pokemon in the chosen game, create an array containing all the pokemon's STAB type coverage
//Array is ordered according to official type order, listed @https://pokemondb.net/type (normal, fire, water, electric, etc.)
//0 = pokemon has no STAB coverage for type, 1 = pokemon has STAB coverage for type

gamePokemonData.forEach(pokemon => {
    for (let variant = 0; variant < pokemon[1].length; variant++) {

        //Gets coverage data for each type the pokemon has

        let pokemonCoverageTypes = [];
        pokemon[1][variant]['type'].forEach(type => {
            pokemonCoverageTypes.push(typeData['coverage_data'][type]);
        })

        //Combines the coverage data of each type the pokemon has

        let pokemonCoverageArray = [];
        for (let type = 0; type < pokemonCoverageTypes[0].length; type++) {
            let typeCoverage = 0;
            for (let i = 0; i < pokemonCoverageTypes.length; i++) {
                typeCoverage = typeCoverage + pokemonCoverageTypes[i][type];
            }
            pokemonCoverageArray.push(typeCoverage);
        }

        //Sets the values of each type in pokemonCoverageArray to 0 or 1 depending on the pokemon's has coverage for that type

        for (let type = 0; type < pokemonCoverageArray.length; type++) {
            if (pokemonCoverageArray[type] > 0) {
                pokemonCoverageArray[type] = 1;
            } else {
                pokemonCoverageArray[type] = 0;
            }
        }

        //Removes dark/steel/fairy type data depending on game number (no dark/steel/fairy types in gen 1 games, no fairy type before gen 6 games)

        if (gameNumber < 1) {
            pokemonCoverageArray.length = 15;
        } else if (gameNumber < 8) {
            pokemonCoverageArray.length = 17;
        }

        //Adds the pokemonCoverageArray to the pokemon's data

        Object.assign(pokemon[1][variant], { 'type_coverage': pokemonCoverageArray });
    }
});

/**
 * 
 * Build page content and page content animations
 * 
 */

gamePokemonData.forEach(pokemon => {

    //Creates new pokemon entry element

    let newPokemonEntry = document.createElement('li');
    newPokemonEntry.classList.add('pokemon-entry');
    newPokemonEntry.setAttribute('id', 'pokemon-entry-' + pokemon[0])

    //Adds new pokemon entry info element to pokemon entry

    let newPokemonEntryInfo = document.createElement('div');
    newPokemonEntryInfo.classList.add('pokemon-entry-info');
    newPokemonEntry.appendChild(newPokemonEntryInfo);

    //Adds new pokemon image to pokemon entry info

    let newPokemonEntryImage = document.createElement('img');
    newPokemonEntryImage.classList.add('pokemon-entry-image-bg-default');
    newPokemonEntryImage.setAttribute('src', './images/pokemon_sprites/' + pokemon[0] + '.png');
    newPokemonEntryImage.setAttribute('alt', pokemon[0]);
    newPokemonEntryInfo.appendChild(newPokemonEntryImage);

    //Adds pokemon regional pokedex number to pokemon entry info

    let numberProcess = pokemon[1][0]['regional_pokedex_id'][gameNumber];
    if (numberProcess < 1000) {
        if (numberProcess > 100) {
            numberProcess = '0' + numberProcess.toString();
        } else if (numberProcess > 10) {
            numberProcess = '00' + numberProcess.toString();
        } else {
            numberProcess = '000' + numberProcess.toString();
        }
    }
    let newPokemonEntryNumber = document.createElement('p');
    newPokemonEntryNumber.innerHTML = 'No. ' + numberProcess;
    newPokemonEntryInfo.appendChild(newPokemonEntryNumber);

    //Adds pokemon name to pokemon entry info

    let newPokemonEntryName = document.createElement('p');
    newPokemonEntryName.innerHTML = pokemon[1][0]['name'];
    newPokemonEntryInfo.appendChild(newPokemonEntryName);

    //Adds pokemon type element to pokemon entry

    let newPokemonEntryType = document.createElement('div');
    newPokemonEntryType.classList.add('pokemon-entry-type');
    newPokemonEntryType.classList.add('pokemon-entry-type-default');
    newPokemonEntryType.setAttribute('data-type', pokemon[1][0]['type'][0])
    newPokemonEntry.appendChild(newPokemonEntryType);

    //Appends pokemon entry to pokemon list section on page

    document.querySelector('.pokemon-list').appendChild(newPokemonEntry);
});

//Pokemon entry hover effect

document.querySelectorAll('.pokemon-entry').forEach(pokemonEntry => {
    let pokemonEntryType = pokemonEntry.querySelector('.pokemon-entry-type');
    pokemonEntry.addEventListener('mouseenter', () => {
        pokemonEntry.classList.add('pokemon-entry-hover');
        pokemonEntry.querySelector('img').classList.add('pokemon-entry-type-' + pokemonEntryType.dataset.type);
        pokemonEntryType.classList.add('pokemon-entry-type-' + pokemonEntryType.dataset.type)
    })
    pokemonEntry.addEventListener('mouseleave', () => {
        pokemonEntry.classList.remove('pokemon-entry-hover');
        pokemonEntry.querySelector('img').classList.remove('pokemon-entry-type-' + pokemonEntryType.dataset.type);
        pokemonEntryType.classList.remove('pokemon-entry-type-' + pokemonEntryType.dataset.type)
    })
})

//Pokemon entry fly in animation function

pokemonEntryAnimateIn();

function pokemonEntryAnimateIn() {
    let animationDelay = 0;
    document.querySelectorAll('.pokemon-entry').forEach(pokemonEntry => {
        setTimeout(() => {
            pokemonEntry.classList.add('pokemon-entry-show');
        }, animationDelay)
        animationDelay = animationDelay + 25;
    })
}

/**
 * 
 * Update pokemon info section upon clicking a pokemon entry
 * 
 */

//

document.querySelectorAll('.pokemon-entry').forEach(entry => {
    entry.addEventListener('click', () => {

        //

        let pokemonSelect = entry.id.substring(14);
        let pokemon = gamePokemonData.find(x => x[0] == pokemonSelect);

        //

        document.getElementById('selected-pokemon-image').setAttribute('src', './images/pokemon_sprites/' + pokemon[0] + '.png');
        document.getElementById('selected-pokemon-data-name').innerHTML = pokemon[1][0]['name'];
        let typeProcess;
        if (pokemon[1][0]['type'].length == 2) {
            let type1 = pokemon[1][0]['type'][0].charAt(0).toUpperCase()+pokemon[1][0]['type'][0].slice(1);
            let type2 = pokemon[1][0]['type'][1].charAt(0).toUpperCase()+pokemon[1][0]['type'][1].slice(1);
            typeProcess = type1+', '+type2;
        } else {
            typeProcess = pokemon[1][0]['type'][0].charAt(0).toUpperCase()+pokemon[1][0]['type'][0].slice(1);
        }
        document.getElementById('selected-pokemon-data-info-content-type').innerHTML = typeProcess;
        let regionalNumberProcess = pokemon[1][0]['regional_pokedex_id'][gameNumber];
        if (regionalNumberProcess < 1000) {
            if (regionalNumberProcess > 100) {
                regionalNumberProcess = '0' + regionalNumberProcess.toString();
            } else if (regionalNumberProcess > 10) {
                regionalNumberProcess = '00' + regionalNumberProcess.toString();
            } else {
                regionalNumberProcess = '000' + regionalNumberProcess.toString();
            }
        }
        document.getElementById('selected-pokemon-data-info-content-regional').innerHTML = 'No. ' + regionalNumberProcess;
        let nationalNumberProcess = pokemon[1][0]['national_pokedex_id'];
        if (nationalNumberProcess < 1000) {
            if (nationalNumberProcess > 100) {
                nationalNumberProcess = '0' + nationalNumberProcess.toString();
            } else if (nationalNumberProcess > 10) {
                nationalNumberProcess = '00' + nationalNumberProcess.toString();
            } else {
                nationalNumberProcess = '000' + nationalNumberProcess.toString();
            }
        }
        document.getElementById('selected-pokemon-data-info-content-national').innerHTML = 'No. ' + nationalNumberProcess;
        document.getElementById('selected-pokemon-data-info-content-generation').innerHTML = pokemon[1][0]['debut_generation'];
    })
})