export default {

    /*
    'pokemon name': [
        New object in array for each variant (e.g. different forms, abilities that alter weaknesses, type change between games, etc.)
        {
            'games_features': array of games where this pokemon features in the regional pokedex (rby, gsc, rbe, frlg, etc.)
            'national_pokedex_id': id of pokemon in national pokedex
            'regional_pokedex_id': array of id's of pokemon in regional pokedex, ordered by game order (rby, gsc, rbe, frlg, etc.), null if not pokemon not in game
            'type': array of pokemon types (normal, fire, water, electric, etc.)
            'base_stats': array of pokemon's base stats (hp, atk, def, sp. atk, sp. def, spd)
            'ability': 'default',
            'trade_evolve': does pokemon evolve via trading, true/false
            'starter': is the pokemon a starter pokemon, true/false
            'legendary/mythic': is the pokemon a legendary/mythic pokemon, true/false
        }
    ]
    */

    'venusaur': [
        {
            'games_featured': ['rby', 'frlg'],
            'national_pokedex_id': 3,
            'regional_pokedex_id': [3, null, null, 3, null],
            'type': ['grass', 'poison'],
            'base_stats': [80, 82, 83, 100, 100, 80],
            'ability': 'default',
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        },
        {
            'games_featured': ['gsc', 'hgss', 'xy'],
            'national_pokedex_id': 3,
            'regional_pokedex_id': [3, null, null, 3, null],
            'type': ['grass', 'poison'],
            'base_stats': [80, 82, 83, 100, 100, 80],
            'ability': 'default',
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'charizard': [
        {
            'games_featured': ['rby', 'frlg'],
            'national_pokedex_id': 6,
            'regional_pokedex_id': [6, null, null, 6, null],
            'type': ['fire', 'flying'],
            'base_stats': [78, 84, 78, 109, 85, 100],
            'ability': 'default',
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        },
        {
            'games_featured': ['gsc', 'hgss', 'xy'],
            'national_pokedex_id': 6,
            'regional_pokedex_id': [6, null, null, 6, null],
            'type': ['fire', 'flying'],
            'base_stats': [78, 84, 78, 109, 85, 100],
            'ability': 'default',
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'blastoise': [
        {
            'games_featured': ['rby', 'frlg'],
            'national_pokedex_id': 9,
            'regional_pokedex_id': [9, null, null, 9, null],
            'type': ['water'],
            'base_stats': [79, 83, 100, 85, 105, 78],
            'ability': 'default',
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        },
        {
            'games_featured': ['gsc', 'hgss', 'xy'],
            'national_pokedex_id': 9,
            'regional_pokedex_id': [9, null, null, 9, null],
            'type': ['water'],
            'base_stats': [79, 83, 100, 85, 105, 78],
            'ability': 'default',
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'meganium': [
        {
            'games_featured': ['gsc'],
            'national_pokedex_id': 154,
            'regional_pokedex_id': [null, 3, null, null, null],
            'type': ['grass'],
            'base_stats': [80, 82, 100, 83, 100, 80],
            'ability': 'default',
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'typhlosion': [
        {
            'games_featured': ['gsc'],
            'national_pokedex_id': 157,
            'regional_pokedex_id': [null, 6, null, null, null],
            'type': ['fire'],
            'base_stats': [78, 84, 78, 109, 85, 100],
            'ability': 'default',
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'feraligatr': [
        {
            'games_featured': ['gsc'],
            'national_pokedex_id': 160,
            'regional_pokedex_id': [null, 9, null, null, null],
            'type': ['water'],
            'base_stats': [85, 105, 100, 79, 83, 78],
            'ability': 'default',
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'sceptile': [
        {
            'games_featured': ['rbe'],
            'national_pokedex_id': 254,
            'regional_pokedex_id': [null, null, 3, null, null],
            'type': ['grass'],
            'base_stats': [70, 85, 65, 105, 85, 120],
            'ability': 'default',
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'blaziken': [
        {
            'games_featured': ['rbe'],
            'national_pokedex_id': 257,
            'regional_pokedex_id': [null, null, 6, null, null],
            'type': ['fire', 'fighting'],
            'base_stats': [80, 120, 70, 110, 70, 80],
            'ability': 'default',
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'swampert': [
        {
            'games_featured': ['rbe'],
            'national_pokedex_id': 260,
            'regional_pokedex_id': [null, null, 9, null, null],
            'type': ['water', 'ground'],
            'base_stats': [100, 110, 90, 85, 90, 60],
            'ability': 'default',
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'bronzong': [
        {
            'games_featured': ['dppt'],
            'national_pokedex_id': 437,
            'regional_pokedex_id': [null, null, null, null, 89],
            'type': ['steel', 'psychic'],
            'base_stats': [67, 89, 116, 79, 116, 33],
            'ability': 'levitate',
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        },
        {
            'games_featured': ['dppt'],
            'national_pokedex_id': 437,
            'regional_pokedex_id': [null, null, null, null, 89],
            'type': ['steel', 'psychic'],
            'base_stats': [67, 89, 116, 79, 116, 33],
            'ability': 'heatproof',
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ]
}