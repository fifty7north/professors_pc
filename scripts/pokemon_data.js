export default {

    /*
    //How to fill in data

    'pokemon name': [
        New object in array for each variant (e.g. abilities that alter weaknesses, type change between games, etc.)
        {
            'games_features': array of games where this pokemon features in the regional pokedex (rby, gsc, rbe, frlg, etc.)
            'national_pokedex_id': id of pokemon in national pokedex
            'regional_pokedex_id': array of id's of pokemon in regional pokedex, ordered by game order (rby, gsc, rbe, frlg, etc.), null if not pokemon not in game
            'type': array of pokemon types (normal, fire, water, electric, etc.)
            'base_stats': array of pokemon's base stats (hp, atk, def, sp. atk, sp. def, spd)
            'ability': 'default',
            'debut_generation': the generation this pokemon first appeared in (1, 2, 3, etc.)
            'trade_evolve': does pokemon evolve via trading, true/false
            'starter': is the pokemon a starter pokemon, true/false
            'legendary/mythic': is the pokemon a legendary/mythic pokemon, true/false
        }
    ]

    //Template

    'pokemon': [
        {
            'name': 'PokemonName',
            'games_featured': ['xxx', 'yyy', 'zzz'],
            'national_pokedex_id': 101,
            'regional_pokedex_id': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['type1', 'type2'],
            'base_stats': [101, 101, 101, 101, 101, 101],
            'ability': 'default',
            'debut_generation': 101,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    */

    //Generation 1

    'venusaur': [
        {
            'name': 'Venusaur',
            'games_featured': ['rby', 'frlg'],
            'national_pokedex_id': 3,
            'regional_pokedex_id': [3, null, null, 3, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['grass', 'poison'],
            'base_stats': [80, 82, 83, 100, 100, 80],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        },
        {
            'name': 'Venusaur',
            'games_featured': ['gsc', 'hgss', 'xy'],
            'national_pokedex_id': 3,
            'regional_pokedex_id': [3, null, null, 3, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['grass', 'poison'],
            'base_stats': [80, 82, 83, 100, 100, 80],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'charizard': [
        {
            'name': 'Charizard',
            'games_featured': ['rby', 'frlg'],
            'national_pokedex_id': 6,
            'regional_pokedex_id': [6, null, null, 6, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['fire', 'flying'],
            'base_stats': [78, 84, 78, 109, 85, 100],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        },
        {
            'name': 'Charizard',
            'games_featured': ['gsc', 'hgss', 'xy'],
            'national_pokedex_id': 6,
            'regional_pokedex_id': [6, null, null, 6, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['fire', 'flying'],
            'base_stats': [78, 84, 78, 109, 85, 100],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'blastoise': [
        {
            'name': 'Blastoise',
            'games_featured': ['rby', 'frlg'],
            'national_pokedex_id': 9,
            'regional_pokedex_id': [9, null, null, 9, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['water'],
            'base_stats': [79, 83, 100, 85, 105, 78],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        },
        {
            'name': 'Blastoise',
            'games_featured': ['gsc', 'hgss', 'xy'],
            'national_pokedex_id': 9,
            'regional_pokedex_id': [9, null, null, 9, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['water'],
            'base_stats': [79, 83, 100, 85, 105, 78],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],

    //Generation 2

    'meganium': [
        {
            'name': 'Meganium',
            'games_featured': ['gsc'],
            'national_pokedex_id': 154,
            'regional_pokedex_id': [null, 3, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['grass'],
            'base_stats': [80, 82, 100, 83, 100, 80],
            'ability': 'default',
            'debut_generation': 2,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'typhlosion': [
        {
            'name': 'Typhlosion',
            'games_featured': ['gsc'],
            'national_pokedex_id': 157,
            'regional_pokedex_id': [null, 6, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['fire'],
            'base_stats': [78, 84, 78, 109, 85, 100],
            'ability': 'default',
            'debut_generation': 2,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'feraligatr': [
        {
            'name': 'Feraligatr',
            'games_featured': ['gsc'],
            'national_pokedex_id': 160,
            'regional_pokedex_id': [null, 9, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['water'],
            'base_stats': [85, 105, 100, 79, 83, 78],
            'ability': 'default',
            'debut_generation': 2,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],

    //Generation 3

    'sceptile': [
        {
            'name': 'Sceptile',
            'games_featured': ['rbe'],
            'national_pokedex_id': 254,
            'regional_pokedex_id': [null, null, 3, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['grass'],
            'base_stats': [70, 85, 65, 105, 85, 120],
            'ability': 'default',
            'debut_generation': 3,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'blaziken': [
        {
            'name': 'Blaziken',
            'games_featured': ['rbe'],
            'national_pokedex_id': 257,
            'regional_pokedex_id': [null, null, 6, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['fire', 'fighting'],
            'base_stats': [80, 120, 70, 110, 70, 80],
            'ability': 'default',
            'debut_generation': 3,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'swampert': [
        {
            'name': 'Swampert',
            'games_featured': ['rbe'],
            'national_pokedex_id': 260,
            'regional_pokedex_id': [null, null, 9, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['water', 'ground'],
            'base_stats': [100, 110, 90, 85, 90, 60],
            'ability': 'default',
            'debut_generation': 3,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    
    //Generation 4

    'torterra': [
        {
            'name': 'Torterra',
            'games_featured': ['dppt', 'bdsp', 'lga'],
            'national_pokedex_id': 389,
            'regional_pokedex_id': [null, null, null, null, 3, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['grass', 'ground'],
            'base_stats': [95, 109, 105, 75, 85, 56],
            'ability': 'default',
            'debut_generation': 4,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'infernape': [
        {
            'name': 'Infernape',
            'games_featured': ['dppt', 'bdsp', 'lga'],
            'national_pokedex_id': 392,
            'regional_pokedex_id': [null, null, null, null, 6, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['fire', 'fighting'],
            'base_stats': [76, 104, 71, 104, 71, 108],
            'ability': 'default',
            'debut_generation': 4,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'empoleon': [
        {
            'name': 'Emploeon',
            'games_featured': ['dppt', 'bdsp', 'lga'],
            'national_pokedex_id': 395,
            'regional_pokedex_id': [null, 9, null, null, 9, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['water', 'steel'],
            'base_stats': [84, 86, 88, 111, 101, 60],
            'ability': 'default',
            'debut_generation': 4,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'staraptor': [
        {
            'name': 'Staraptor',
            'games_featured': ['dppt'],
            'national_pokedex_id': 398,
            'regional_pokedex_id': [null, null, null, null, 12, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['normal', 'flying'],
            'base_stats': [85, 120, 70, 50, 60, 100],
            'ability': 'default',
            'debut_generation': 4,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'bibarel': [
        {
            'name': 'Bibarel',
            'games_featured': ['dppt'],
            'national_pokedex_id': 400,
            'regional_pokedex_id': [null, null, null, null, 14, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['normal', 'water'],
            'base_stats': [79, 85, 60, 55, 60, 71],
            'ability': 'default',
            'debut_generation': 4,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'kricketune': [
        {
            'name': 'Kricketune',
            'games_featured': ['dppt'],
            'national_pokedex_id': 402,
            'regional_pokedex_id': [null, null, null, null, 16, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['bug'],
            'base_stats': [77, 85, 51, 55, 51, 65],
            'ability': 'default',
            'debut_generation': 4,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'luxray': [
        {
            'name': 'Luxray',
            'games_featured': ['dppt'],
            'national_pokedex_id': 405,
            'regional_pokedex_id': [null, null, null, null, 19, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['electric'],
            'base_stats': [80, 120, 79, 95, 79, 70],
            'ability': 'default',
            'debut_generation': 4,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'roserade': [
        {
            'name': 'Roserade',
            'games_featured': ['dppt'],
            'national_pokedex_id': 407,
            'regional_pokedex_id': [null, null, null, null, 27, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['grass', 'poison'],
            'base_stats': [60, 70, 65, 125, 105, 90],
            'ability': 'default',
            'debut_generation': 4,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'rampardos': [
        {
            'name': 'Rampardos',
            'games_featured': ['dppt'],
            'national_pokedex_id': 409,
            'regional_pokedex_id': [null, null, null, null, 37, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['rock'],
            'base_stats': [97, 165, 60, 65, 50, 58],
            'ability': 'default',
            'debut_generation': 4,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'bastiodon': [
        {
            'name': 'Bastiodon',
            'games_featured': ['dppt'],
            'national_pokedex_id': 411,
            'regional_pokedex_id': [null, null, null, null, 39, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['rock', 'steel'],
            'base_stats': [60, 52, 168, 47, 138, 30],
            'ability': 'default',
            'debut_generation': 4,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'wormadam-plant': [
        {
            'name': 'Wormadam (Plant Cloak)',
            'games_featured': ['dppt'],
            'national_pokedex_id': 413,
            'regional_pokedex_id': [null, null, null, null, 46, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['bug', 'grass'],
            'base_stats': [60, 59, 85, 79, 105, 36],
            'ability': 'default',
            'debut_generation': 4,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'wormadam-sandy': [
        {
            'name': 'Wormadam (Sandy Cloak)',
            'games_featured': ['dppt'],
            'national_pokedex_id': 413,
            'regional_pokedex_id': [null, null, null, null, 46, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['bug', 'ground'],
            'base_stats': [60, 79, 105, 59, 85, 36],
            'ability': 'default',
            'debut_generation': 4,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'wormadam-trash': [
        {
            'name': 'Wormadam (Trash Cloak)',
            'games_featured': ['dppt'],
            'national_pokedex_id': 413,
            'regional_pokedex_id': [null, null, null, null, 46, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['bug', 'steel'],
            'base_stats': [60, 69, 95, 69, 95, 36],
            'ability': 'default',
            'debut_generation': 4,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'bronzong': [
        {
            'name': 'Bronzong (Levitate)',
            'games_featured': ['dppt'],
            'national_pokedex_id': 437,
            'regional_pokedex_id': [null, null, null, null, 89, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['steel', 'psychic'],
            'base_stats': [67, 89, 116, 79, 116, 33],
            'ability': 'levitate',
            'debut_generation': 4,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        },
        {
            'name': 'Bronzong (Heatproof)',
            'games_featured': ['dppt'],
            'national_pokedex_id': 437,
            'regional_pokedex_id': [null, null, null, null, 89, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['steel', 'psychic'],
            'base_stats': [67, 89, 116, 79, 116, 33],
            'ability': 'heatproof',
            'debut_generation': 4,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        },
        {
            'name': 'Bronzong',
            'games_featured': ['b2w2'],
            'national_pokedex_id': 437,
            'regional_pokedex_id': [null, null, null, null, 89, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['steel', 'psychic'],
            'base_stats': [67, 89, 116, 79, 116, 33],
            'ability': 'default',
            'debut_generation': 4,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
}