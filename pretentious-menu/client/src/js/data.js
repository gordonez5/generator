// Royal Order of adjectives:
// opinion: beautiful, ugly, wonderful, terrible, cute, horrible
// size: big, small, tall, short, huge, tiny
// quality: soft, thick, blunt, rough, sturdy
// age: old, new, young, ancient
// shape: round, square, triangular, rectangular
// color: blue, red, yellow, green
// origin: French, German, Italian, Chinese
// material: wooden, plastic, metal, cotton
// purpose: cooking, decorative, educational

// MAIN
const cook = [
  'braised',
  'grilled',
  'hot sand fried',
  'oven-roasted',
  'pan-seared',
  'poached',
  'shallow fried',
  'sous vide',
  'spit-roasted',
  'warmed',
];

const cut = [
  'slab',
  'cut',
  'tranche',
  'cutlet',
  'steak',
  'croquette',
  'shard',
  'carpaccio',
];

const origin = [
  'artisanal',
  'ethically-sourced',
  'farm-reared',
  'foraged',
  'homemade',
  'kosher',
  'organic',
  'wild',
];

const treatments = [
  'brined',
  'candied',
  'charred',
  'maple-smoked',
  'pickled',
  'shaved',
  'smoked',
  'spiced',
];

const mainIngredient = [
  'Aberdeen Angus beef',
  'Albany beef',
  'belly of pork',
  'chicken',
  'chicken calf',
  'Chilean sea bass',
  'goat',
  'jack fruit',
  'langoustine',
  'monkfish',
  'Norfolk capon',
  'ojo de bife',
  'wood pigeon',
  'pork cheek',
  'pork loin',
  'red squirrel',
  'sailfish',
  'Tasmanian kangaroo',
  'venison',
  'Wagyu beef',
  'white roe',
];

// SECONDARY
const secondaryIngredient = [
  'artichoke',
  'beetroot',
  'celeriac',
  'Foie Gras',
  'gulf shrimp',
  'horseradish',
  'Irish apricot',
  'laverbread',
  'porcini',
  'Prairie oysters',
  'quail egg',
  'samphire',
  'scallop',
];

const secondaryForm = [
  'terrine',
  'mousse',
  'foam',
  'panna cotta',
  'risotto',
  'ravioli',
  'cous cous',
  'soufflé',
];

// VEG
const vegPrep = [
  'blanched',
  'buttered',
  'oven-dried',
  'honey-glazed',
  'caramelised',
  'sautéed',
  'toasted',
  'stewed',
  'steamed',
  'smashed',
  'umami',
];

const veg = [
  'beets',
  'bok choi',
  'broccolini',
  'cavolo nero',
  'haricots verts',
  'leaks',
  'mangetout',
  'pommes purée',
  'seasonal greens',
  'Swiss chard',
  'Bianchetto truffles',
];

// SAUCE
const sauceFlavours = [
  'tomato',
  'wild honey',
  'white chocolate',
  'butterscotch',
  'raisin',
  'dendelion',
  'citrus',
  'quince',
];

const sauceType = [
  'velouté',
  'coulis',
  'reduction',
  'gravy',
  'crème',
  'aioli',
  'sorbet',
  'emulsion',
  'molasses',
  'jelly',
];


// FINISH
const finishes = [
  'topped',
  'finished',
  'garnished',
];

const finishAmount = [
  'a pinch of',
  'a spoonful of',
  'a ladle of',
  'a generous helping of',
  'a handful of',
  'a soupçon of',
  'a dusting of',
  'a speck of',
  'a trace of',
  'stone-ground',
  'plentiful',
  '3.5g of',
  'twice-digested',
  'magnesium-infused',
];


// GARNISH
const garnishOrigin = [
  'Aegean',
  'Alpine',
  'Andalucian',
  'Bosphorus',
  'Haitian',
  'Hellenic',
  'Lithuanian',
  'Namibian',
  'Nordic',
  'Pembrokeshire',
  'Persian',
  'Tibetan',
  'Turkish',
  'Venetian',
  'Welsh',
];

const garnish = [
  'salt',
  'turmeric',
  'honeycomb',
  'white pepper',
  'black pepper',
  'chia seeds',
  'fennel seeds',
  'crostini',
  'gremolata',
  'crushed cornflakes',
  'brioche crumbs',
  'gold leaf',
  'pancetta flakes',
  'saffron',
  'ground cassia bark',
];



const adjectives = [
  'sumptious',
  'luxurious',
  'delectible',
  'sumptuous',
  'premium',
  'finest',
  'prime',
];

const selectionAdjectives = [
  'carefully curated',
  'hand-picked',
  'randomly picked',
];

const restaurantList = [
  {
    name: 'La Bonne Poire',
    type: 'fancy'
  },
  {
    name: 'Château Prétentieux',
    type: 'fancy'
  },
  {
    name: 'Le Client Crédule',
    type: 'fancy'
  },
  {
    name: 'Les Nouveaux Vêtements',
    type: 'fancy'
  },
  {
    name: 'Chez Salvatore',
    type: 'fancy'
  },
  {
    name: 'Sage & Salt',
    type: 'fancy'
  },
  {
    name: 'Tres Gatos',
    type: 'fancy'
  },
  {
    name: 'The Riverside Canteen',
    type: 'normal'
  },
  {
    name: 'Osteria Blanco',
    type: 'normal'
  },
  {
    name: 'Miroir Noir',
    type: 'cracked'
  },
  {
    name: 'Monsoon',
    type: 'neon1'
  },
  {
    name: 'Nomis',
    type: 'fancy'
  },
];

const backgroundImages = [
  {
    src: 'samuel-foster-LxD9fZYR2uw-unsplash',
    align: 'center',
  },
  {
    src: 'ibrahim-boran-aBNPslolmJM-unsplash',
    align: 'center',
  },
  {
    src: 'miguel-joya-GJzCc1IfP5g-unsplash',
    align: '40%',
  },
  {
    src: 'dmitry-spravko-wrW1mQTja7w-unsplash',
    align: '70%',
  },
  {
    src: 'pexels-pixabay-262047',
    align: 'top',
  },
  {
    src: 'pexels-valeriya-1484516',
    align: 'top',
  },
  {
    src: 'pexels-picjumbo-com-55570-225228',
    align: 'top',
  },
];

const btnText = [
  'Show another dish',
  'What else does the chef have?',
  'Anything else to offer?',
  'Surely you have something better?',
  'Next option, please!',
];


export {
  adjectives,
  origin,
  treatments,
  cut,
  finishes,
  finishAmount,
  vegPrep,
  veg,
  // selectionAdjectives,
  sauceFlavours,
  sauceType,
  cook,
  mainIngredient,
  secondaryIngredient,
  secondaryForm,
  garnishOrigin,
  garnish,
  restaurantList,
  backgroundImages,
  btnText
};
