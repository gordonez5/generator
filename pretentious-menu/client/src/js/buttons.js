import { run } from '@/js/run';
import {
  getTimeOutDuration,
  pick
} from '@/js/utils';
import { btnText } from '@/js/data';

export const createButton = () => {
  // Get container element from DOM
  const container = document.getElementById('menuContainer');

  // Create button element
  const btn = document.createElement('button');
  const spinner = document.createElement('span');
  const txt = document.createElement('span');

  txt.textContent = pick(btnText);

  txt.classList.add('text');
  spinner.classList.add('spinner');

  btn.append(txt);
  btn.prepend(spinner);
  // Set button text
  // btn.textContent = 'Show another menu';

  // Add class name to button to make styling easier
  // btn.classList.add('btn');
  btn.classList.add('button');
  btn.id = 'runButton';

  // Call render function on click of button
  btn.addEventListener('click', function() {
    run();
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'n') { 
      event.preventDefault(); 
      run(); 
    } 
  }); 

  // Add button to end of container element
  container.append(btn);
};

const changeButtonText = (el) => {
  const textEl = document.querySelector('#runButton .text');
  return textEl.textContent = pick(btnText)
};

export const transformButton = () => {
  const button = document.getElementById('runButton');
  button.classList.add('loading', 'disabled');
  
  setTimeout(() => {
    changeButtonText(button);
    button.classList.remove('loading', 'disabled');
    // spinnerEl.classList.add('hidden');
    // outerEl.classList.remove('hidden');
  }, getTimeOutDuration());

};