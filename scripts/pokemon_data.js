export default {

    /*
    //How to fill in data

    'pokemon name': [
        New object in array for each variant (e.g. abilities that alter weaknesses, type change between games, etc.)
        Do not make a new object in the array for regional forms/forms that change type (e.g. alolan/galarian forms, wormadam plant/sandy/trash)
        {
            'games_features': array of games where this pokemon features in the regional pokedex (rby, gsc, rse, frlg, etc.)
            'national_pokedex_id': id of pokemon in national pokedex
            'regional_pokedex_id': array of id's of pokemon in regional pokedex, ordered by game order (rby, gsc, rse, frlg, etc.), null if not pokemon not in game
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
            'regional_pokedex_id': [null, 228, null, null, null, 233, null, null, 82, null, null, null, null, null, null, null, null],
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
            'regional_pokedex_id': [null, 231, null, null, null, 236, null, null, 85, null, null, null, null, null, null, null, null],
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
            'regional_pokedex_id': [null, 234, null, null, null, 239, null, null, 88, null, null, null, null, null, null, null, null],
            'type': ['water'],
            'base_stats': [79, 83, 100, 85, 105, 78],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'butterfree': [
        {
            'name': 'Butterfree',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 12,
            'regional_pokedex_id': [12, 26, null, 12, null, 26, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['bug', 'flying'],
            'base_stats': [60, 45, 50, 90, 80, 70],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'beedrill': [
        {
            'name': 'Beedrill',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 15,
            'regional_pokedex_id': [15, 29, null, 15, null, 29, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['bug', 'poison'],
            'base_stats': [65, 90, 40, 45, 80, 75],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'pidgeot': [
        {
            'name': 'Pidgeot',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 18,
            'regional_pokedex_id': [18, 12, null, 18, null, 12, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['normal', 'flying'],
            'base_stats': [83, 80, 75, 70, 70, 101],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'raticate': [
        {
            'name': 'Raticate',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss', 'b2w2'],
            'national_pokedex_id': 20,
            'regional_pokedex_id': [20, 18, null, 20, null, 18, null, 60, null, null, null, null, null, null, null, null, null],
            'type': ['normal'],
            'base_stats': [55, 81, 60, 50, 70, 97],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'fearow': [
        {
            'name': 'Fearow',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 22,
            'regional_pokedex_id': [22, 14, null, 22, null, 14, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['normal', 'flying'],
            'base_stats': [65, 90, 65, 61, 61, 100],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'arbok': [
        {
            'name': 'Arbok',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 24,
            'regional_pokedex_id': [24, 51, null, 24, null, 51, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['poison'],
            'base_stats': [60, 95, 69, 65, 79, 80],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'raichu': [
        {
            'name': 'Raichu',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'dppt', 'hgss'],
            'national_pokedex_id': 26,
            'regional_pokedex_id': [26, 23, 157, 26, 105, 23, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['electric'],
            'base_stats': [60, 90, 55, 90, 80, 110],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        },
        {
            'name': 'Raichu',
            'games_featured': [],
            'national_pokedex_id': 26,
            'regional_pokedex_id': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['electric'],
            'base_stats': [60, 90, 55, 90, 80, 110],
            'ability': 'Lightning Rod',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'sandslash': [
        {
            'name': 'Sandslash',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'hgss', 'b2w2'],
            'national_pokedex_id': 28,
            'regional_pokedex_id': [28, 49, 113, 28, null, 49, null, 114, null, null, null, null, null, null, null, null, null],
            'type': ['ground'],
            'base_stats': [75, 100, 110, 45, 55, 65],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'nidoqueen': [
        {
            'name': 'Nidoqueen',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 31,
            'regional_pokedex_id': [31, 97, null, 31, null, 97, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['poison', 'ground'],
            'base_stats': [90, 92, 87, 75, 85, 76],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'nidoking': [
        {
            'name': 'Nidoking',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 34,
            'regional_pokedex_id': [34, 100, null, 34, null, 100, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['poison', 'ground'],
            'base_stats': [81, 102, 77, 85, 75, 85],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'clefable': [
        {
            'name': 'Clefable',
            'games_featured': ['rby', 'gsc', 'frlg', 'dppt', 'hgss', 'b2w2'],
            'national_pokedex_id': 36,
            'regional_pokedex_id': [36, 42, null, 36, 101, 42, null, 90, null, null, null, null, null, null, null, null, null],
            'type': ['normal'],
            'base_stats': [95, 70, 73, 95, 90, 60],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        },
        {
            'name': 'Clefable',
            'games_featured': [],
            'national_pokedex_id': 36,
            'regional_pokedex_id': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['fairy'],
            'base_stats': [95, 70, 73, 95, 90, 60],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'ninetales': [
        {
            'name': 'Ninetales',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'hgss', 'b2w2'],
            'national_pokedex_id': 38,
            'regional_pokedex_id': [38, 126, 154, 38, null, 128, null, 249, null, null, null, null, null, null, null, null, null],
            'type': ['fire'],
            'base_stats': [73, 76, 75, 81, 100, 100],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'wigglytuff': [
        {
            'name': 'Wigglytuff',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'hgss', 'b2w2'],
            'national_pokedex_id': 40,
            'regional_pokedex_id': [40, 45, 139, 40, null, 45, null, 283, null, null, null, null, null, null, null, null, null],
            'type': ['normal'],
            'base_stats': [140, 70, 45, 85, 50, 45],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        },
        {
            'name': 'Wigglytuff',
            'games_featured': [],
            'national_pokedex_id': 40,
            'regional_pokedex_id': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['normal', 'fairy'],
            'base_stats': [140, 70, 45, 85, 50, 45],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'golbat': [
        {
            'name': 'Golbat',
            'games_featured': ['rby', 'frlg'],
            'national_pokedex_id': 42,
            'regional_pokedex_id': [42, null, null, 42, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['poison', 'flying'],
            'base_stats': [75, 80, 70, 65, 75, 90],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'vileplume': [
        {
            'name': 'Vileplume',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'hgss'],
            'national_pokedex_id': 45,
            'regional_pokedex_id': [45, 85, 90, 45, null, 85, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['grass', 'poison'],
            'base_stats': [75, 80, 85, 110, 90, 50],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'parasect': [
        {
            'name': 'Parasect',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 47,
            'regional_pokedex_id': [47, 71, null, 47, null, 71, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['bug', 'grass'],
            'base_stats': [60, 95, 80, 60, 80, 30],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'venomoth': [
        {
            'name': 'Venomoth',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 49,
            'regional_pokedex_id': [49, 109, null, 49, null, 110, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['bug', 'poison'],
            'base_stats': [70, 65, 60, 90, 75, 90],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'dugtrio': [
        {
            'name': 'Dugtrio',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 51,
            'regional_pokedex_id': [51, 133, null, 51, null, 135, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['ground'],
            'base_stats': [35, 100, 50, 50, 70, 120],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'persian': [
        {
            'name': 'Persian',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 53,
            'regional_pokedex_id': [53, 137, null, 53, null, 139, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['normal'],
            'base_stats': [65, 70, 60, 65, 65, 115],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'golduck': [
        {
            'name': 'Golduck',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'dppt', 'hgss', 'b2w2'],
            'national_pokedex_id': 55,
            'regional_pokedex_id': [55, 139, 159, 55, 44, 141, null, 29, null, null, null, null, null, null, null, null, null],
            'type': ['water'],
            'base_stats': [80, 82, 78, 95, 80, 85],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'primeape': [
        {
            'name': 'Primeape',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 57,
            'regional_pokedex_id': [57, 135, null, 57, null, 137, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['fighting'],
            'base_stats': [65, 105, 60, 60, 70, 95],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'arcanine': [
        {
            'name': 'Arcanine',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss', 'b2w2'],
            'national_pokedex_id': 59,
            'regional_pokedex_id': [59, 128, null, 59, null, 130, null, 52, null, null, null, null, null, null, null, null, null],
            'type': ['fire'],
            'base_stats': [90, 110, 80, 100, 80, 95],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'poliwrath': [
        {
            'name': 'Poliwrath',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 62,
            'regional_pokedex_id': [62, 74, null, 62, null, 74, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['water', 'fighting'],
            'base_stats': [90, 95, 95, 70, 90, 70],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'alakazam': [
        {
            'name': 'Alakazam',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'dppt', 'hgss'],
            'national_pokedex_id': 65,
            'regional_pokedex_id': [65, 91, 41, 65, 22, 91, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['psychic'],
            'base_stats': [55, 50, 45, 135, 95, 120],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': true,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'machamp': [
        {
            'name': 'Machamp',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'dppt', 'hgss'],
            'national_pokedex_id': 68,
            'regional_pokedex_id': [68, 142, 75, 68, 42, 144, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['fighting'],
            'base_stats': [90, 130, 80, 65, 85, 55],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': true,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'victreebel': [
        {
            'name': 'Victreebel',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 71,
            'regional_pokedex_id': [71, 66, null, 71, null, 66, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['grass', 'poison'],
            'base_stats': [80, 105, 65, 100, 70, 70],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'tentacruel': [
        {
            'name': 'Tentacruel',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'dppt', 'hgss'],
            'national_pokedex_id': 73,
            'regional_pokedex_id': [73, 163, 67, 73, 137, 165, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['water', 'poison'],
            'base_stats': [80, 70, 65, 80, 120, 100],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'golem': [
        {
            'name': 'Golem',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'dppt', 'hgss'],
            'national_pokedex_id': 76,
            'regional_pokedex_id': [76, 36, 59, 76, 33, 36, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['rock', 'ground'],
            'base_stats': [80, 120, 130, 55, 65, 45],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': true,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'rapidash': [
        {
            'name': 'Rapidash',
            'games_featured': ['rby', 'gsc', 'frlg', 'dppt', 'hgss'],
            'national_pokedex_id': 78,
            'regional_pokedex_id': [78, 202, null, 78, 91, 207, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['fire'],
            'base_stats': [65, 100, 70, 80, 80, 105],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'slowbro': [
        {
            'name': 'Slowbro',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 80,
            'regional_pokedex_id': [80, 81, null, 80, null, 81, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['water', 'psychic'],
            'base_stats': [95, 75, 110, 100, 80, 30],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'magneton': [
        {
            'name': 'Magneton',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'hgss'],
            'national_pokedex_id': 82,
            'regional_pokedex_id': [82, 119, 83, 82, null, 120, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['electric', 'steel'],
            'base_stats': [50, 60, 95, 120, 70, 70],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'dodrio': [
        {
            'name': 'Dodrio',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'hgss'],
            'national_pokedex_id': 85,
            'regional_pokedex_id': [85, 200, 93, 85, null, 205, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['normal', 'flying'],
            'base_stats': [60, 110, 70, 60, 60, 110],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'dewgong': [
        {
            'name': 'Dewgong',
            'games_featured': ['rby', 'gsc', 'hgss', 'b2w2'],
            'national_pokedex_id': 87,
            'regional_pokedex_id': [87, 177, null, null, null, 179, null, 266, null, null, null, null, null, null, null, null, null],
            'type': ['water', 'ice'],
            'base_stats': [90, 70, 80, 70, 95, 70],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        },
        {
            'name': 'Dewgong',
            'games_featured': ['frlg', 'hgss', 'b2w2'],
            'national_pokedex_id': 87,
            'regional_pokedex_id': [null, null, null, 87, null, 179, null, 266, null, null, null, null, null, null, null, null, null],
            'type': ['water', 'ice'],
            'base_stats': [90, 70, 80, 70, 95, 70],
            'ability': 'Thick Fat',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'muk': [
        {
            'name': 'Muk',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'hgss', 'b2w2'],
            'national_pokedex_id': 89,
            'regional_pokedex_id': [89, 117, 107, 89, null, 118, null, 65, null, null, null, null, null, null, null, null, null],
            'type': ['poison'],
            'base_stats': [105, 105, 75, 65, 100, 50],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'cloyster': [
        {
            'name': 'Cloyster',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 91,
            'regional_pokedex_id': [91, 170, null, 91, null, 172, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['water', 'ice'],
            'base_stats': [50, 95, 180, 85, 45, 70],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'gengar': [
        {
            'name': 'Gengar',
            'games_featured': ['rby', 'gsc', 'frlg', 'dppt', 'hgss'],
            'national_pokedex_id': 94,
            'regional_pokedex_id': [94, 60, null, 94, 71, 60, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['ghost', 'poison'],
            'base_stats': [60, 65, 60, 130, 75, 110],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': true,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'onix': [
        {
            'name': 'Onix',
            'games_featured': ['rby', 'frlg'],
            'national_pokedex_id': 95,
            'regional_pokedex_id': [95, null, null, 95, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['rock', 'ground'],
            'base_stats': [35, 45, 160, 30, 45, 70],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'hypno': [
        {
            'name': 'Hypno',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 97,
            'regional_pokedex_id': [97, 88, null, 97, null, 88, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['psychic'],
            'base_stats': [85, 73, 70, 73, 115, 67],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'kingler': [
        {
            'name': 'Kingler',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 99,
            'regional_pokedex_id': [99, 165, null, 99, null, 167, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['water'],
            'base_stats': [55, 130, 115, 50, 50, 75],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'electrode': [
        {
            'name': 'Electrode',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'hgss'],
            'national_pokedex_id': 101,
            'regional_pokedex_id': [101, 121, 85, 101, null, 122, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['electric'],
            'base_stats': [60, 50, 70, 80, 80, 150],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'exeggutor': [
        {
            'name': 'Exeggutor',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 103,
            'regional_pokedex_id': [103, 105, null, 103, null, 106, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['grass', 'psychic'],
            'base_stats': [95, 95, 85, 125, 75, 55],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'marowak': [
        {
            'name': 'Marowak',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 105,
            'regional_pokedex_id': [105, 204, null, 105, null, 209, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['ground'],
            'base_stats': [60, 80, 110, 50, 80, 45],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'hitmonlee': [
        {
            'name': 'Hitmonlee',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 106,
            'regional_pokedex_id': [106, 144, null, 106, null, 146, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['fighting'],
            'base_stats': [50, 120, 53, 35, 110, 87],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'hitmonchan': [
        {
            'name': 'Hitmonchan',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 107,
            'regional_pokedex_id': [107, 145, null, 107, null, 147, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['fighting'],
            'base_stats': [50, 105, 79, 35, 110, 76],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'lickitung': [
        {
            'name': 'Lickitung',
            'games_featured': ['rby', 'gsc', 'frlg'],
            'national_pokedex_id': 108,
            'regional_pokedex_id': [108, 178, null, 108, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['normal'],
            'base_stats': [90, 55, 75, 60, 75, 30],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'weezing': [
        {
            'name': 'Weezing',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'hgss'],
            'national_pokedex_id': 110,
            'regional_pokedex_id': [110, 115, 109, 110, null, 116, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['poison'],
            'base_stats': [65, 90, 120, 85, 70, 60],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        },
        {
            'name': 'Weezing',
            'games_featured': ['rse', 'frlg', 'hgss'],
            'national_pokedex_id': 110,
            'regional_pokedex_id': [null, null, 109, 110, null, 116, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['poison'],
            'base_stats': [65, 90, 120, 85, 70, 60],
            'ability': 'Levitate',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'rhydon': [
        {
            'name': 'Rhydon',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'dppt', 'hgss'],
            'national_pokedex_id': 112,
            'regional_pokedex_id': [112, 207, 170, 112, 187, 212, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['ground', 'rock'],
            'base_stats': [105, 130, 120, 45, 45, 40],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'chansey': [
        {
            'name': 'Chansey',
            'games_featured': ['rby', 'frlg'],
            'national_pokedex_id': 113,
            'regional_pokedex_id': [113, null, null, 113, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['normal'],
            'base_stats': [250, 5, 5, 35, 105, 50],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'tangela': [
        {
            'name': 'Tangela',
            'games_featured': ['rby', 'gsc', 'frlg'],
            'national_pokedex_id': 114,
            'regional_pokedex_id': [114, 179, null, 114, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['grass'],
            'base_stats': [65, 55, 115, 100, 40, 60],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'kangaskhan': [
        {
            'name': 'Kangaskhan',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 115,
            'regional_pokedex_id': [115, 205, null, 115, null, 210, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['normal'],
            'base_stats': [105, 95, 80, 40, 80, 90],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'seadra': [
        {
            'name': 'Seadra',
            'games_featured': ['rby', 'frlg'],
            'national_pokedex_id': 117,
            'regional_pokedex_id': [117, null, null, 117, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['water'],
            'base_stats': [55, 65, 95, 95, 45, 85],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'seaking': [
        {
            'name': 'Seaking',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'dppt', 'hgss'],
            'national_pokedex_id': 119,
            'regional_pokedex_id': [119, 79, 51, 119, 79, 79, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['water'],
            'base_stats': [80, 92, 65, 65, 80, 68],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        },
        {
            'name': 'Seaking',
            'games_featured': [],
            'national_pokedex_id': 119,
            'regional_pokedex_id': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['water'],
            'base_stats': [80, 92, 65, 65, 80, 68],
            'ability': 'Lightning Rod',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'starmie': [
        {
            'name': 'Starmie',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'hgss', 'b2w2'],
            'national_pokedex_id': 121,
            'regional_pokedex_id': [121, 168, 144, 121, null, 170, null, 239, null, null, null, null, null, null, null, null, null],
            'type': ['water', 'psychic'],
            'base_stats': [60, 75, 85, 100, 85, 115],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'mr-mime': [
        {
            'name': 'Mr. Mime',
            'games_featured': ['rby', 'gsc', 'frlg', 'dppt', 'hgss'],
            'national_pokedex_id': 122,
            'regional_pokedex_id': [122, 156, null, 122, 95, 158, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['psychic'],
            'base_stats': [40, 45, 65, 100, 120, 90],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        },
        {
            'name': 'Mr. Mime',
            'games_featured': [],
            'national_pokedex_id': 122,
            'regional_pokedex_id': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['psychic', 'fairy'],
            'base_stats': [40, 45, 65, 100, 120, 90],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'scyther': [
        {
            'name': 'Scyther',
            'games_featured': ['rby', 'frlg'],
            'national_pokedex_id': 123,
            'regional_pokedex_id': [123, null, null, 123, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['bug', 'flying'],
            'base_stats': [70, 110, 80, 55, 80, 105],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'jynx': [
        {
            'name': 'Jynx',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 124,
            'regional_pokedex_id': [124, 153, null, 124, null, 155, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['ice', 'psychic'],
            'base_stats': [65, 50, 35, 115, 95, 95],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        },
        {
            'name': 'Jynx',
            'games_featured': [],
            'national_pokedex_id': 124,
            'regional_pokedex_id': [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['ice', 'psychic'],
            'base_stats': [65, 50, 35, 115, 95, 95],
            'ability': 'Dry Skin',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'electabuzz': [
        {
            'name': 'Electabuzz',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 125,
            'regional_pokedex_id': [125, 155, null, 125, null, 157, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['electric'],
            'base_stats': [65, 83, 57, 95, 85, 105],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'magmar': [
        {
            'name': 'Magmar',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 126,
            'regional_pokedex_id': [126, 151, null, 126, null, 153, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['fire'],
            'base_stats': [65, 95, 57, 100, 85, 93],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'pinsir': [
        {
            'name': 'Pinsir',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'hgss', 'b2w2'],
            'national_pokedex_id': 127,
            'regional_pokedex_id': [127, 112, 167, 127, null, 113, null, 146, null, null, null, null, null, null, null, null, null],
            'type': ['bug'],
            'base_stats': [65, 125, 100, 55, 70, 85],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'tauros': [
        {
            'name': 'Tauros',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 128,
            'regional_pokedex_id': [128, 148, null, 128, null, 150, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['normal'],
            'base_stats': [75, 100, 95, 40, 70, 110],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'gyarados': [
        {
            'name': 'Gyarados',
            'games_featured': ['rby', 'gsc', 'rse', 'frlg', 'dppt', 'hgss'],
            'national_pokedex_id': 130,
            'regional_pokedex_id': [130, 77, 53, 130, 24, 77, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['water', 'flying'],
            'base_stats': [95, 125, 79, 60, 100, 81],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'lapras': [
        {
            'name': 'Lapras',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss', 'b2w2'],
            'national_pokedex_id': 131,
            'regional_pokedex_id': [131, 219, null, 131, null, 224, null, 242, null, null, null, null, null, null, null, null, null],
            'type': ['water', 'ice'],
            'base_stats': [130, 85, 80, 85, 95, 60],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'ditto': [
        {
            'name': 'Ditto',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss', 'b2w2'],
            'national_pokedex_id': 132,
            'regional_pokedex_id': [132, 92, null, 132, null, 92, null, 261, null, null, null, null, null, null, null, null, null],
            'type': ['normal'],
            'base_stats': [48, 48, 48, 48, 48, 48],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'vaporeon': [
        {
            'name': 'Vaporeon',
            'games_featured': ['rby', 'gsc', 'frlg', 'dppt', 'hgss', 'b2w2'],
            'national_pokedex_id': 134,
            'regional_pokedex_id': [134, 181, null, 134, 164, 185, null, 92, null, null, null, null, null, null, null, null, null],
            'type': ['water'],
            'base_stats': [130, 65, 60, 110, 95, 65],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'jolteon': [
        {
            'name': 'Jolteon',
            'games_featured': ['rby', 'gsc', 'frlg', 'dppt', 'hgss', 'b2w2'],
            'national_pokedex_id': 135,
            'regional_pokedex_id': [135, 182, null, 135, 165, 186, null, 93, null, null, null, null, null, null, null, null, null],
            'type': ['electric'],
            'base_stats': [65, 65, 60, 110, 95, 130],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'flareon': [
        {
            'name': 'Flareon',
            'games_featured': ['rby', 'gsc', 'frlg', 'dppt', 'hgss', 'b2w2'],
            'national_pokedex_id': 136,
            'regional_pokedex_id': [136, 183, null, 136, 166, 187, null, 94, null, null, null, null, null, null, null, null, null],
            'type': ['fire'],
            'base_stats': [65, 130, 60, 95, 110, 65],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'porygon': [
        {
            'name': 'Porygon',
            'games_featured': ['rby', 'frlg'],
            'national_pokedex_id': 137,
            'regional_pokedex_id': [137, null, null, 137, null, null, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['normal'],
            'base_stats': [65, 60, 70, 85, 75, 40],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'omastar': [
        {
            'name': 'Omastar',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 139,
            'regional_pokedex_id': [139, 221, null, 139, null, 226, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['rock', 'water'],
            'base_stats': [70, 60, 125, 115, 70, 55],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'kabutops': [
        {
            'name': 'Kabutops',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 141,
            'regional_pokedex_id': [141, 223, null, 141, null, 228, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['rock', 'water'],
            'base_stats': [60, 115, 105, 65, 70, 80],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'aerodactyl': [
        {
            'name': 'Aerodactyl',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 142,
            'regional_pokedex_id': [142, 224, null, 142, null, 229, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['rock', 'flying'],
            'base_stats': [80, 105, 65, 60, 75, 130],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'snorlax': [
        {
            'name': 'Snorlax',
            'games_featured': ['rby', 'gsc', 'frlg', 'dppt', 'hgss'],
            'national_pokedex_id': 143,
            'regional_pokedex_id': [143, 225, null, 143, 113, 230, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['normal'],
            'base_stats': [160, 110, 65, 65, 110, 30],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        },
        {
            'name': 'Snorlax',
            'games_featured': ['frlg', 'dppt', 'hgss'],
            'national_pokedex_id': 143,
            'regional_pokedex_id': [null, null, null, 143, 113, 230, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['normal'],
            'base_stats': [160, 110, 65, 65, 110, 30],
            'ability': 'Thick Fat',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'articuno': [
        {
            'name': 'Articuno',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 144,
            'regional_pokedex_id': [144, 235, null, 144, null, 240, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['ice', 'flying'],
            'base_stats': [90, 85, 100, 95, 125, 85],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': true
        }
    ],
    'zapdos': [
        {
            'name': 'Zapdos',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 145,
            'regional_pokedex_id': [145, 236, null, 145, null, 241, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['electric', 'flying'],
            'base_stats': [90, 90, 85, 125, 90, 100],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': true
        }
    ],
    'moltres': [
        {
            'name': 'Moltres',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 146,
            'regional_pokedex_id': [146, 237, null, 146, null, 242, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['fire', 'flying'],
            'base_stats': [90, 100, 90, 125, 85, 90],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': true
        }
    ],
    'dragonite': [
        {
            'name': 'Dragonite',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 149,
            'regional_pokedex_id': [149, 243, null, 149, null, 248, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['dragon', 'flying'],
            'base_stats': [91, 134, 95, 100, 100, 80],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': false
        }
    ],
    'mewtwo': [
        {
            'name': 'Mewtwo',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 150,
            'regional_pokedex_id': [150, 249, null, 150, null, 254, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['psychic'],
            'base_stats': [106, 110, 90, 154, 90, 130],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': true
        }
    ],
    'mew': [
        {
            'name': 'Mew',
            'games_featured': ['rby', 'gsc', 'frlg', 'hgss'],
            'national_pokedex_id': 151,
            'regional_pokedex_id': [151, 250, null, 151, null, 255, null, null, null, null, null, null, null, null, null, null, null],
            'type': ['psychic'],
            'base_stats': [100, 100, 100, 100, 100, 100],
            'ability': 'default',
            'debut_generation': 1,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': true
        }
    ],

    //Generation 2

    'meganium': [
        {
            'name': 'Meganium',
            'games_featured': ['gsc', 'hgss'],
            'national_pokedex_id': 154,
            'regional_pokedex_id': [null, 3, null, null, null, 3, null, null, null, null, null, null, null, null, null, null, null],
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
            'games_featured': ['gsc', 'hgss'],
            'national_pokedex_id': 157,
            'regional_pokedex_id': [null, 6, null, null, null, 6, null, null, null, null, null, null, null, null, null, null, null],
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
            'games_featured': ['gsc', 'hgss'],
            'national_pokedex_id': 160,
            'regional_pokedex_id': [null, 9, null, null, null, 9, null, null, null, null, null, null, null, null, null, null, null],
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
            'games_featured': ['rse'],
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
            'games_featured': ['rse'],
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
            'games_featured': ['rse'],
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
            'name': 'Empoleon',
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

    //Generation 5

    'victini': [
        {
            'name': 'Victini',
            'games_featured': ['bw', 'b2w2'],
            'national_pokedex_id': 494,
            'regional_pokedex_id': [null, null, null, null, null, null, 0, 0, null, null, null, null, null, null, null, null, null],
            'type': ['psychic', 'fire'],
            'base_stats': [100, 100, 100, 100, 100, 100],
            'ability': 'default',
            'debut_generation': 5,
            'trade_evolve': false,
            'starter': false,
            'legendary/mythic': true
        }
    ],
    'serperior': [
        {
            'name': 'Serperior',
            'games_featured': ['bw', 'b2w2'],
            'national_pokedex_id': 497,
            'regional_pokedex_id': [null, null, null, null, null, null, 3, 3, null, null, null, null, null, null, null, null, null],
            'type': ['grass'],
            'base_stats': [75, 75, 95, 75, 95, 113],
            'ability': 'default',
            'debut_generation': 5,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'emboar': [
        {
            'name': 'Emboar',
            'games_featured': ['bw', 'b2w2'],
            'national_pokedex_id': 500,
            'regional_pokedex_id': [null, null, null, null, null, null, 6, 6, null, null, null, null, null, null, null, null, null],
            'type': ['fire', 'fighting'],
            'base_stats': [110, 123, 65, 100, 65, 65],
            'ability': 'default',
            'debut_generation': 5,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
    'samurott': [
        {
            'name': 'Samurott',
            'games_featured': ['bw', 'b2w2'],
            'national_pokedex_id': 503,
            'regional_pokedex_id': [null, null, null, null, null, null, 9, 9, null, null, null, null, null, null, null, null, null],
            'type': ['water'],
            'base_stats': [95, 100, 85, 108, 70, 70],
            'ability': 'default',
            'debut_generation': 5,
            'trade_evolve': false,
            'starter': true,
            'legendary/mythic': false
        }
    ],
}