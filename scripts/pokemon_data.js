export default {

    /*
    'pokemon name': {
        'games_features': array of games where this pokemon features in the regional pokedex (rby, gsc, rbe, frlg, etc.)
        'national_pokedex_id': id of pokemon in national pokedex
        'regional_pokedex_id': array of id's of pokemon in regional pokedex, ordered by game order (rby, gsc, rbe, frlg, etc.), null if not pokemon not in game
        'type': array of pokemon types (normal, fire, water, electric, etc.)
        'base_stats': array of pokemon's base stats (hp, atk, def, sp. atk, sp. def, spd)
        'trade_evolve': does pokemon evolve via trading, true/false
        'starter': is the pokemon a starter pokemon, true/false
        'legendary/mythic': is the pokemon a legendary/mythic pokemon, true/false
    }
    */

    'venusaur': {
        'games_featured': ['rby', 'frlg'],
        'national_pokedex_id': 3,
        'regional_pokedex_id': [3, null, null, 3],
        'type': ['grass', 'poison'],
        'base_stats': [80, 82, 83, 100, 100, 80],
        'trade_evolve': false,
        'starter': true,
        'legendary/mythic': false
    },
    'charizard': {
        'games_featured': ['rby', 'frlg'],
        'national_pokedex_id': 6,
        'regional_pokedex_id': [6, null, null, 6],
        'type': ['fire', 'flying'],
        'base_stats': [78, 84, 78, 109, 85, 100],
        'trade_evolve': false,
        'starter': true,
        'legendary/mythic': false
    },
    'blastoise': {
        'games_featured': ['rby', 'frlg'],
        'national_pokedex_id': 9,
        'regional_pokedex_id': [9, null, null, 9],
        'type': ['water'],
        'base_stats': [79, 83, 100, 85, 105, 78],
        'trade_evolve': false,
        'starter': true,
        'legendary/mythic': false
    },
    'meganium': {
        'games_featured': ['gsc'],
        'national_pokedex_id': 154,
        'regional_pokedex_id': [null, 3, null, null],
        'type': ['grass'],
        'base_stats': [80, 82, 100, 83, 100, 80],
        'trade_evolve': false,
        'starter': true,
        'legendary/mythic': false
    },
    'typhlosion': {
        'games_featured': ['gsc'],
        'national_pokedex_id': 157,
        'regional_pokedex_id': [null, 6, null, null],
        'type': ['fire'],
        'base_stats': [78, 84, 78, 109, 85, 100],
        'trade_evolve': false,
        'starter': true,
        'legendary/mythic': false
    },
    'feraligatr': {
        'games_featured': ['gsc'],
        'national_pokedex_id': 160,
        'regional_pokedex_id': [null, 9, null, null],
        'type': ['water'],
        'base_stats': [85, 105, 100, 79, 83, 78],
        'trade_evolve': false,
        'starter': true,
        'legendary/mythic': false
    },
    'sceptile': {
        'games_featured': ['rbe'],
        'national_pokedex_id': 254,
        'regional_pokedex_id': [null, null, 3, null],
        'type': ['grass'],
        'base_stats': [70, 85, 65, 105, 85, 120],
        'trade_evolve': false,
        'starter': true,
        'legendary/mythic': false
    },
    'blaziken': {
        'games_featured': ['rbe'],
        'national_pokedex_id': 257,
        'regional_pokedex_id': [null, null, 6, null],
        'type': ['fire', 'fighting'],
        'base_stats': [80, 120, 70, 110, 70, 80],
        'trade_evolve': false,
        'starter': true,
        'legendary/mythic': false
    },
    'swampert': {
        'games_featured': ['rbe'],
        'national_pokedex_id': 260,
        'regional_pokedex_id': [null, null, 9, null],
        'type': ['water', 'ground'],
        'base_stats': [100, 110, 90, 85, 90, 60],
        'trade_evolve': false,
        'starter': true,
        'legendary/mythic': false
    },
}