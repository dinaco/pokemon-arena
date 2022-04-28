const data = [
  {
    id: 0,
    name: "tree",
    level: Infinity,
    hp: Infinity,
    sp: Infinity,
    attackPower: {
      power: Infinity,
      weakness: { type: null, penalty: 1 },
      bonus: { type: null, powerBonus: 1 },
    },
    type: null,
    img: {
      url: {
        normal: ["docs/assets/imgs/trees.png", "docs/assets/imgs/trees.png"],
      },
      sizeX: 50,
      sizeY: 50,
      size: 75,
    },
    accuracy: 100,
    attackImg: null,
    evolve: false,
    evolveScore: null,
  },
  {
    id: 1,
    name: "Bulbasaur",
    level: 1,
    hp: 10,
    sp: 10,
    attackPower: {
      power: 2,
      weakness: { type: "fire", penalty: 0.8 },
      bonus: { type: "water", powerBonus: 1.2 },
    },
    type: "grass",
    img: {
      url: {
        normal: [
          "docs/assets/imgs/pokemons/bulbasaur.png",
          "docs/assets/imgs/pokemons/bulbasaur-right.png",
        ],
        shiny: [
          "docs/assets/imgs/pokemons/bulbasaur-shiny.png",
          "docs/assets/imgs/pokemons/bulbasaur-shiny-right.png",
        ],
      },
      sizeX: 120,
      sizeY: 120,
      size: 100,
    },
    accuracy: 50,
    attackImg: {
      url: [
        "docs/assets/imgs/attacks/grass-attack.png",
        "docs/assets/imgs/attacks/grass-attack-right.png",
      ],
      sizeX: 25,
      sizeY: 25,
    },
    evolve: true,
    evolveScore: 100,
  },
  {
    id: 2,
    name: "Ivysaur",
    level: 2,
    hp: 20,
    sp: 20,
    attackPower: {
      power: 3,
      weakness: { type: "fire", penalty: 0.8 },
      bonus: { type: "water", powerBonus: 1.2 },
    },
    type: "grass",
    img: {
      url: {
        normal: [
          "docs/assets/imgs/pokemons/ivysaur.png",
          "docs/assets/imgs/pokemons/ivysaur-right.png",
        ],
        shiny: [
          "docs/assets/imgs/pokemons/ivysaur-shiny.png",
          "docs/assets/imgs/pokemons/ivysaur-shiny-right.png",
        ],
      },
      sizeX: 120,
      sizeY: 120,
      size: 100,
    },
    accuracy: 70,
    attackImg: {
      url: [
        "docs/assets/imgs/attacks/grass-attack.png",
        "docs/assets/imgs/attacks/grass-attack-right.png",
      ],
      sizeX: 50,
      sizeY: 50,
    },
    evolve: true,
    evolveScore: 300,
  },
  {
    id: 3,
    name: "Venusaur",
    level: 3,
    hp: 50,
    sp: 50,
    attackPower: {
      power: 4,
      weakness: { type: "fire", penalty: 0.8 },
      bonus: { type: "water", powerBonus: 1.2 },
    },
    type: "grass",
    img: {
      url: {
        normal: [
          "docs/assets/imgs/pokemons/venusaur.png",
          "docs/assets/imgs/pokemons/venusaur-right.png",
        ],
        shiny: [
          "docs/assets/imgs/pokemons/venusaur-shiny.png",
          "docs/assets/imgs/pokemons/venusaur-shiny-right.png",
        ],
      },
      sizeX: 120,
      sizeY: 120,
      size: 100,
    },
    accuracy: 90,
    attackImg: {
      url: [
        "docs/assets/imgs/attacks/grass-attack.png",
        "docs/assets/imgs/attacks/grass-attack-right.png",
      ],
      sizeX: 75,
      sizeY: 75,
    },
    evolve: false,
    evolveScore: null,
  },
  {
    id: 4,
    name: "Charmander",
    level: 1,
    hp: 10,
    sp: 10,
    attackPower: {
      power: 2,
      weakness: { type: "water", penalty: 0.8 },
      bonus: { type: "grass", powerBonus: 1.2 },
    },
    type: "fire",
    img: {
      url: {
        normal: [
          "docs/assets/imgs/pokemons/charmander.png",
          "docs/assets/imgs/pokemons/charmander-right.png",
        ],
        shiny: [
          "docs/assets/imgs/pokemons/charmander-shiny.png",
          "docs/assets/imgs/pokemons/charmander-shiny-right.png",
        ],
      },
      sizeX: 120,
      sizeY: 120,
      size: 100,
    },
    accuracy: 50,
    attackImg: {
      url: [
        "docs/assets/imgs/attacks/fire-ball.png",
        "docs/assets/imgs/attacks/fire-ball-right.png",
      ],
      sizeX: 25,
      sizeY: 25,
    },
    evolve: true,
    evolveScore: 100,
  },
  {
    id: 5,
    name: "Charmeleon",
    level: 2,
    hp: 20,
    sp: 20,
    attackPower: {
      power: 3,
      weakness: { type: "water", penalty: 0.8 },
      bonus: { type: "grass", powerBonus: 1.2 },
    },
    type: "fire",
    img: {
      url: {
        normal: [
          "docs/assets/imgs/pokemons/charmeleon.png",
          "docs/assets/imgs/pokemons/charmeleon-right.png",
        ],
        shiny: [
          "docs/assets/imgs/pokemons/charmeleon-shiny.png",
          "docs/assets/imgs/pokemons/charmeleon-shiny-right.png",
        ],
      },
      sizeX: 120,
      sizeY: 120,
      size: 100,
    },
    accuracy: 70,
    attackImg: {
      url: [
        "docs/assets/imgs/attacks/fire-ball.png",
        "docs/assets/imgs/attacks/fire-ball-right.png",
      ],
      sizeX: 50,
      sizeY: 50,
    },
    evolve: true,
    evolveScore: 300,
  },
  {
    id: 6,
    name: "Charizard",
    level: 3,
    hp: 50,
    sp: 50,
    attackPower: {
      power: 4,
      weakness: { type: "water", penalty: 0.8 },
      bonus: { type: "grass", powerBonus: 1.2 },
    },
    type: "fire",
    img: {
      url: {
        normal: [
          "docs/assets/imgs/pokemons/charizard.png",
          "docs/assets/imgs/pokemons/charizard-right.png",
        ],
        shiny: [
          "docs/assets/imgs/pokemons/charizard-shiny.png",
          "docs/assets/imgs/pokemons/charizard-shiny-right.png",
        ],
      },
      sizeX: 137,
      sizeY: 120,
      size: 100,
    },
    accuracy: 90,
    attackImg: {
      url: [
        "docs/assets/imgs/attacks/fire-ball.png",
        "docs/assets/imgs/attacks/fire-ball-right.png",
      ],
      sizeX: 75,
      sizeY: 75,
    },
    evolve: false,
    evolveScore: null,
  },
  {
    id: 7,
    name: "Squirtle",
    level: 1,
    hp: 10,
    sp: 10,
    attackPower: {
      power: 2,
      weakness: { type: "electric", penalty: 0.8 },
      bonus: { type: "fire", powerBonus: 1.2 },
    },
    type: "water",
    img: {
      url: {
        normal: [
          "docs/assets/imgs/pokemons/squirtle.png",
          "docs/assets/imgs/pokemons/squirtle-right.png",
        ],
        shiny: [
          "docs/assets/imgs/pokemons/squirtle-shiny.png",
          "docs/assets/imgs/pokemons/squirtle-shiny-right.png",
        ],
      },
      sizeX: 120,
      sizeY: 120,
      size: 100,
    },
    accuracy: 50,
    attackImg: {
      url: [
        "docs/assets/imgs/attacks/water-attack.png",
        "docs/assets/imgs/attacks/water-attack-right.png",
      ],
      sizeX: 25,
      sizeY: 25,
    },
    evolve: true,
    evolveScore: 100,
  },
  {
    id: 8,
    name: "Wartortle",
    level: 2,
    hp: 20,
    sp: 20,
    attackPower: {
      power: 3,
      weakness: { type: "electric", penalty: 0.8 },
      bonus: { type: "fire", powerBonus: 1.2 },
    },
    type: "water",
    img: {
      url: {
        normal: [
          "docs/assets/imgs/pokemons/wartortle.png",
          "docs/assets/imgs/pokemons/wartortle-right.png",
        ],
        shiny: [
          "docs/assets/imgs/pokemons/wartortle-shiny.png",
          "docs/assets/imgs/pokemons/wartortle-shiny-right.png",
        ],
      },
      sizeX: 120,
      sizeY: 120,
      size: 100,
    },
    accuracy: 70,
    attackImg: {
      url: [
        "docs/assets/imgs/attacks/water-attack.png",
        "docs/assets/imgs/attacks/water-attack-right.png",
      ],
      sizeX: 50,
      sizeY: 50,
    },
    evolve: true,
    evolveScore: 300,
  },
  {
    id: 9,
    name: "Blastoise",
    level: 3,
    hp: 50,
    sp: 50,
    attackPower: {
      power: 4,
      weakness: { type: "electric", penalty: 0.8 },
      bonus: { type: "fire", powerBonus: 1.2 },
    },
    type: "water",
    img: {
      url: {
        normal: [
          "docs/assets/imgs/pokemons/blastoise.png",
          "docs/assets/imgs/pokemons/blastoise-right.png",
        ],
        shiny: [
          "docs/assets/imgs/pokemons/blastoise-shiny.png",
          "docs/assets/imgs/pokemons/blastoise-shiny-right.png",
        ],
      },
      sizeX: 120,
      sizeY: 120,
      size: 100,
    },
    accuracy: 90,
    attackImg: {
      url: [
        "docs/assets/imgs/attacks/water-attack.png",
        "docs/assets/imgs/attacks/water-attack-right.png",
      ],
      sizeX: 75,
      sizeY: 75,
    },
    evolve: false,
    evolveScore: null,
  },
  {
    id: 10,
    name: "Pikachu",
    level: 1,
    hp: 10,
    sp: 10,
    attackPower: {
      power: 2,
      weakness: { type: "grass", penalty: 0.8 },
      bonus: { type: "water", powerBonus: 1.2 },
    },
    type: "electric",
    img: {
      url: {
        normal: [
          "docs/assets/imgs/pokemons/pikachu.png",
          "docs/assets/imgs/pokemons/pikachu-right.png",
        ],
        shiny: [
          "docs/assets/imgs/pokemons/pikachu-shiny.png",
          "docs/assets/imgs/pokemons/pikachu-shiny-right.png",
        ],
      },
      sizeX: 120,
      sizeY: 120,
      size: 100,
    },
    accuracy: 50,
    attackImg: {
      url: [
        "docs/assets/imgs/attacks/electric-attack.png",
        "docs/assets/imgs/attacks/electric-attack-right.png",
      ],
      sizeX: 25,
      sizeY: 25,
    },
    evolve: true,
    evolveScore: 150,
  },
  {
    id: 11,
    name: "Raichu",
    level: 2,
    hp: 20,
    sp: 20,
    attackPower: {
      power: 3,
      weakness: { type: "grass", penalty: 0.8 },
      bonus: { type: "water", powerBonus: 1.2 },
    },
    type: "electric",
    img: {
      url: {
        normal: [
          "docs/assets/imgs/pokemons/raichu.png",
          "docs/assets/imgs/pokemons/raichu-right.png",
        ],
        shiny: [
          "docs/assets/imgs/pokemons/raichu-shiny.png",
          "docs/assets/imgs/pokemons/raichu-shiny-right.png",
        ],
      },
      sizeX: 120,
      sizeY: 120,
      size: 100,
    },
    accuracy: 70,
    attackImg: {
      url: [
        "docs/assets/imgs/attacks/electric-attack.png",
        "docs/assets/imgs/attacks/electric-attack-right.png",
      ],
      sizeX: 50,
      sizeY: 50,
    },
    evolve: false,
    evolveScore: null,
  },
  {
    id: 12,
    name: "Mew",
    level: 10,
    hp: 200,
    sp: 200,
    attackPower: {
      power: 200,
      weakness: { type: null, penalty: 1 },
      bonus: { type: null, powerBonus: 1 },
    },
    type: "mystic",
    img: {
      url: {
        normal: [
          "docs/assets/imgs/pokemons/mew.png",
          "docs/assets/imgs/pokemons/mew-right.png",
        ],
        shiny: [
          "docs/assets/imgs/pokemons/mew-shiny.png",
          "docs/assets/imgs/pokemons/mew-shiny-right.png",
        ],
      },
      sizeX: 120,
      sizeY: 120,
      size: 100,
    },
    accuracy: 100,
    attackImg: {
      url: [
        "docs/assets/imgs/attacks/mew-attack.png",
        "docs/assets/imgs/attacks/mew-attack-right.png",
      ],
      sizeX: 75,
      sizeY: 75,
    },
    evolve: false,
    evolveScore: null,
  },
  {
    id: 13,
    name: "Mewtwo",
    level: Infinity,
    hp: Infinity,
    sp: Infinity,
    attackPower: {
      power: Infinity,
      weakness: { type: null, penalty: 1 },
      bonus: { type: null, powerBonus: 1 },
    },
    type: "mystic",
    img: {
      url: {
        normal: [
          "docs/assets/imgs/pokemons/mewtwo.png",
          "docs/assets/imgs/pokemons/mewtwo-right.png",
        ],
        shiny: [
          "docs/assets/imgs/pokemons/mewtwo-shiny.png",
          "docs/assets/imgs/pokemons/mewtwo-shiny-right.png",
        ],
      },
      sizeX: 120,
      sizeY: 120,
      size: 100,
    },
    accuracy: 100,
    attackImg: {
      url: [
        "docs/assets/imgs/attacks/mew-attack.png",
        "docs/assets/imgs/attacks/mew-attack-right.png",
      ],
      sizeX: 75,
      sizeY: 75,
    },
    evolve: false,
    evolveScore: null,
  },
];
