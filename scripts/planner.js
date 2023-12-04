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
    if (pokemon[1].games_featured.includes(selectedGame)) {
        gamePokemonData.push(pokemon);
    }
});

//For each pokemon in the chosen game, create an array containing all the pokemon's type weakness/resistance data
//Array is ordered according to official type order, listed @https://pokemondb.net/type (normal, fire, water, electric, etc.)
//0 = pokemon has no weakness/resist to type, 1 = pokemon is weak to type, -1 = pokemon resists or is immune to type

gamePokemonData.forEach(pokemon => {

    //Gets weakness/resistance data for each type the pokemon has

    let pokemonWeaknessTypes = [];
    pokemon[1]['type'].forEach(type => {
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

    Object.assign(pokemon[1], {'type_weakness': pokemonWeaknessArray});
});

//For each pokemon in the chosen game, create an array containing all the pokemon's STAB type coverage
//Array is ordered according to official type order, listed @https://pokemondb.net/type (normal, fire, water, electric, etc.)
//0 = pokemon has no STAB coverage for type, 1 = pokemon has STAB coverage for type

gamePokemonData.forEach(pokemon => {

    //Gets coverage data for each type the pokemon has

    let pokemonCoverageTypes = [];
    pokemon[1]['type'].forEach(type => {
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

    Object.assign(pokemon[1], {'type_coverage': pokemonCoverageArray});
});

/**
 * 
 * Build page content
 * 
 */

console.log(gamePokemonData)