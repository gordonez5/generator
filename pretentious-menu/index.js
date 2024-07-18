// const chalk = require('chalk');
const data = require('./modules/data');
const {
  pick,
  startsWithVowel,
  getOptionsCount,
  formatNumberWithCommas,
  formatNumberToText
} = require('./modules/utils');


const getMenu = () => {
  const options = getOptionsCount(data);
  const permutations = formatNumberWithCommas(options.permutations);
  const text = formatNumberToText(options.permutations);
  // console.log('Total options: ', options);
  // console.log('Total permutations: ', permutations);
  console.log();
  console.log(`Over ${permutations} (${text}) possible entrée combinations.... and you will be served:`);

  const adjective = pick(data.adjectives);
  const origin = pick(data.origin);
  const treatment = pick(data.treatments);
  const cut = pick(data.cut);
  const finish = pick(data.finishes);
  const finishAmount = pick(data.finishAmount);
  const vegPrep = pick(data.vegPrep);
  const veg = pick(data.veg);
  const selectionAdjective = pick(data.selectionAdjectives);
  const sauceFlavour = pick(data.sauceFlavours);
  const sauceType = pick(data.sauceType);
  const cook = pick(data.cook);
  const mainIngredient = pick(data.mainIngredient);
  const secondaryIngredient = pick(data.secondaryIngredient);
  const secondaryForm = pick(data.secondaryForm);
  const garnishOrigin = pick(data.garnishOrigin);
  const garnish = pick(data.garnish);

  const menu = `
    A${startsWithVowel(cook) ? 'n' : ''} ${cook} ${cut} of ${origin} ${treatment} ${mainIngredient},
    served with ${secondaryIngredient} ${secondaryForm}, ${vegPrep} ${veg}, ${sauceFlavour} ${sauceType},
    and ${finish} with ${finishAmount} ${garnishOrigin} ${garnish}.
  `;
  console.log(menu);

};

getMenu();
