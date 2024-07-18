// Returns a single random item from an array
const pick = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Checks if a string begins with a vowel
const startsWithVowel = (str) => {
  var vowelRegex = '^[aieouâêîôûäëïöüàéèùœAIEOUÂÊÎÔÛÄËÏÖÜÀÉÈÙŒ].*';
  return str.match(vowelRegex);
};

// Takes an object of arrays, and returns an object
// including the total number of array items and the total number of permutations
const getOptionsCount = (data) => {
  let total = 0;
  let odds = [];
  for (const [key, value] of Object.entries(data)) {
    // console.log(`${key}: ${value.length}`);
    total += value.length;
    odds.push(value.length);
  }
  return {
    total: total,
    permutations: odds.reduce((a, b)=> a*b, 1)
  };
};

// Takes number and returns the number formatted with comma separators
const formatNumberWithCommas = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const expo = (x, f) => {
  return Number.parseFloat(x).toExponential(f);
}

const formatNumberToExponent = (number, places) => {
  const exp = expo(number, places).split('e+');
  return `${exp[0]} x 10<sup>${exp[1]}</sup>`;
};

// Takes a number and returns a shortened form. eg. 1000000 returns '1 million'
const formatNumberToText = (number) => {
  if (number >= 1e18) {
    return (number / 1e18).toFixed(1) + ' quintillion';
  } else if (number >= 1e15) {
    return (number / 1e15).toFixed(1) + ' quadrillion';
  } else if (number >= 1e12) {
    return (number / 1e12).toFixed(1) + ' trillion';
  } else if (number >= 1e9) {
    return (number / 1e9).toFixed(1) + ' billion';
  } else if (number >= 1e6) {
    return (number / 1e6).toFixed(1) + ' million';
  } else if (number >= 1e3) {
    return (number / 1e3).toFixed(1) + ' thousand';
  } else {
    return number.toString();
  }
};

// Takes an array and shuffles it, returning the shuffled array
const shuffleArray = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
};

const hasClass = (el, className) => {
  if (el.classList) {
    return el.classList.contains(className);
  } else {
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
  }
};

const addClass = (el, className) => {
  if (el.classList) {
    el.classList.add(className);
  } else if (!hasClass(el, className)) {
    el.className += " " + className;
  }
};

const removeClass = (el, className) => {
  if (el.classList) {
    el.classList.remove(className);
  } else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
    el.className=el.className.replace(reg, ' ');
  }
};

const getTimeOutDuration = () => {
  return 400;
};

const getFromLocalStorage = (key) => {
  let items;
  if (localStorage.getItem(key) === null) {
      items = [];
  } else {
      items = JSON.parse(localStorage.getItem(key));
  }
  
  return items;
};

const saveToLocalStorage = (key, data) => {
  let arr = getFromLocalStorage(key);
  arr.push(data);
  localStorage.setItem(key, JSON.stringify(arr));
};

export {
  formatNumberToExponent,
  formatNumberToText,
  formatNumberWithCommas,
  getOptionsCount,
  pick,
  startsWithVowel,
  shuffleArray,
  hasClass,
  addClass,
  removeClass,
  getTimeOutDuration,
  getFromLocalStorage,
  saveToLocalStorage,
};