import {
  addClass,
  removeClass,
  getTimeOutDuration,
  pick
} from '@/js/utils';
import { backgroundImages } from '@/js/data';

export const setBackgroundImage = () => {
  const bgImgEl = document.getElementById('bgImg');
  const img = pick(backgroundImages);

  removeClass(bgImgEl, 'show');

  setTimeout(() => {
    bgImgEl.setAttribute(
      'style', `background-image: url("./assets/bgImages/${img.src}.jpg"); background-position-y: ${img.align};`
    );
    addClass(bgImgEl, 'show');
  }, getTimeOutDuration());
};