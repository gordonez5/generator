import * as data from '@/js/data';
import {
  pick,
  startsWithVowel,
  getOptionsCount,
  formatNumberToExponent,
  formatNumberToText,
  formatNumberWithCommas,
  getTimeOutDuration,
  saveToLocalStorage,
} from '@/js/utils';


export const displayMenu = () => {
  // Get target elements from DOM
  const textEl = document.getElementById('menuText');
  const spinnerEl = document.getElementById('textLoader');
  const footnoteEl = document.getElementById('menuFootnote');
  
  const options = getOptionsCount(data);
  const combinations = formatNumberWithCommas(options.permutations);
  const text = formatNumberToText(options.permutations);
  const exponent = formatNumberToExponent(options.permutations, 2);
  // const exponentText = exponent.replace('');
  // console.log(exponent);

  const ui_adjective = pick(data.adjectives);
  const ui_cook = pick(data.cook);
  const ui_cut = pick(data.cut);
  const ui_origin = pick(data.origin);
  const ui_treatment = pick(data.treatments);
  // const selectionAdjective = pick(data.selectionAdjectives);
  const ui_mainIngredient = pick(data.mainIngredient);
  
  const ui_secondaryIngredient = pick(data.secondaryIngredient);
  const ui_secondaryForm = pick(data.secondaryForm);
  
  const ui_vegPrep = pick(data.vegPrep);
  const ui_veg = pick(data.veg);
  
  const ui_sauceFlavour = pick(data.sauceFlavours);
  const ui_sauceType = pick(data.sauceType);
  
  const ui_finish = pick(data.finishes);
  const ui_finishAmount = pick(data.finishAmount);
  
  const ui_garnishOrigin = pick(data.garnishOrigin);
  const ui_garnish = pick(data.garnish);

  const finalEntree = `A${startsWithVowel(ui_cook) ? 'n' : ''} ${ui_cook} ${ui_cut} of ${ui_origin} ${ui_treatment} ${ui_mainIngredient}, served with ${ui_secondaryIngredient} ${ui_secondaryForm}, ${ui_vegPrep} ${ui_veg}, ${ui_sauceFlavour} ${ui_sauceType}, and ${ui_finish} with ${ui_finishAmount} ${ui_adjective} ${ui_garnishOrigin} ${ui_garnish}.`;
  const finalCombinationsText = `${exponent} (~${text.replace('.0', '')}) possible combinations.`;
  // console.log(finalEntree);

  textEl.classList.add('hidden');
  spinnerEl.classList.remove('hidden');

  setTimeout(() => {
    saveToLocalStorage('menuItems', finalEntree);
    textEl.innerText = finalEntree;
    footnoteEl.innerHTML = finalCombinationsText;
      
    spinnerEl.classList.add('hidden');
    textEl.classList.remove('hidden');
  }, getTimeOutDuration());


  // Set content of element with 'menuText' id
  // textEl.innerText = finalEntree;

  // Set content of element with 'menuText' id
  // footnoteEl.innerText = finalCombinationsText;

  return {
    entree: finalEntree,
    combinations: finalCombinationsText,
  };

};