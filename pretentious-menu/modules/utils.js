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

// Takes a number and returns a shortened form. eg. 1000000 returns '1 million'
const formatNumberToText = (number) => {
  if (number >= 1e15) {
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


module.exports = {
  formatNumberToText,
  formatNumberWithCommas,
  getOptionsCount,
  pick,
  startsWithVowel,
  shuffleArray,
};