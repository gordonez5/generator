const chalk = require('chalk');
const cards = require('./modules/data');
const shuffleArray = require('./modules/shuffleArray');

const allCards = (cards) => {
  let allCards = [];
  for (let i = 0; i < cards.values.length; i++) {
    allCards.push({value: cards.values[i], suit: cards.suits[0]});
    allCards.push({value: cards.values[i], suit: cards.suits[1]});
    allCards.push({value: cards.values[i], suit: cards.suits[2]});
    allCards.push({value: cards.values[i], suit: cards.suits[3]});
  }
  return allCards;
};

const all = allCards(cards);
const shuffled = shuffleArray(all);

const getCards = (num) => {
  return shuffled.slice(0, num)
};

const displayCards = (num = 1) => {
  const hand = getCards(num);
  let msg = '';
  
  hand.forEach(card => {
    if (card.suit.short === 'D' || card.suit.short === 'H') {
      msg += `${chalk.bgWhite.red(card.value.short + card.suit.icon)}  `;
    } else {
      msg += `${chalk.bgWhite.black(card.value.short + card.suit.icon)}  `;
    }
  });
  console.log();
  console.log(msg);
  console.log();
}

displayCards(process.argv[2] || 5);