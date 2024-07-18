import { setBackgroundImage } from '@/js/setBackgroundImage';
import { getRestaurantName } from '@/js/getRestaurantName';
import { displayMenu } from '@/js/displayMenu';
import { transformButton } from './buttons';

export const run = () => {
  transformButton();
  setBackgroundImage();
  getRestaurantName();
  displayMenu();
};