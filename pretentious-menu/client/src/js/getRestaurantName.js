import {
  getTimeOutDuration,
  pick
} from '@/js/utils';
import { restaurantList } from '@/js/data';

export const getRestaurantName = () => {
  const restaurant = pick(restaurantList);
  const outerEl = document.getElementById('restaurantName');
  const innerEl = outerEl.querySelector('span');
  const spinnerEl = document.getElementById('nameLoader');
  outerEl.classList.add('hidden');
  spinnerEl.classList.remove('hidden');

  setTimeout(() => {
    outerEl.dataset.type = restaurant.type;
    outerEl.dataset.name = restaurant.name;
  
    innerEl.textContent = restaurant.name;
    spinnerEl.classList.add('hidden');
    outerEl.classList.remove('hidden');
  }, getTimeOutDuration());

  return restaurant;
};
