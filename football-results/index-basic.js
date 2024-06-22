const scores = [
  '1-1',
  '2-1',
  '2-2',
  '3-1',
  '2-0',
  '1-2',
  '1-0',
  '0-1',
  '0-2',
  '3-0',
  '1-3',
  '3-2',
  '0-0',
  '2-3',
  '4-1',
  '5-0',
  '1-4',
  '0-3',
  '4-2',
  '5-1',
  '4-0',
  '0-4',
  '2-4',
  '4-3',
  '3-3',
  '0-5',
  '0-6',
  '3-4',
  '4-4',
  '6-1',
  '5-2',
  '6-0',
  '0-8',
  '1-5',
  '2-5',
];

const weightings = [
  0.10,
  0.08,
  0.07,
  0.07,
  0.06,
  0.06,
  0.06,
  0.05,
  0.05,
  0.05,
  0.04,
  0.03,
  0.03,
  0.03,
  0.02,
  0.02,
  0.02,
  0.02,
  0.02,
  0.01,
  0.01,
  0.01,
  0.01,
  0.01,
  0.01,
  0.01,
  0.01,
  0.01,
  0.01,
  0.01,
  0.01,
  0.01,
  0.01,
  0.01,
  0.01,
];

const teams = [
  'Arsenal',
  'Aston Villa',
  'Bournemouth',
  'Brentford',
  'Brighton & Hove Albion',
  'Chelsea',
  'Crystal Palace',
  'Everton',
  'Fulham',
  'Ipswich Town',
  'Leicester City',
  'Liverpool',
  'Manchester City',
  'Manchester United',
  'Newcastle United',
  'Nottingham Forest',
  'Southampton',
  'Tottenham Hotspur',
  'West Ham United',
  'Wolverhampton Wanderers',
];

const referees = [
  'Michael Oliver',
  'Simon Hooper',
  'Craig Pawson',
  'Graham Scott',
  'Anthony Taylor',
  'Darren Bond',
  'Chris Kavanagh',
  'Matt Donohue',
  'John Brooks',
  'Andy Madley',
];


/**
 * Picks the random item based on its weight.
 * The items with higher weight will be picked more often (with a higher probability).
 *
 * For example:
 * - items = ['banana', 'orange', 'apple']
 * - weights = [0, 0.2, 0.8]
 * - weightedRandom(items, weights) in 80% of cases will return 'apple', in 20% of cases will return
 * 'orange' and it will never return 'banana' (because probability of picking the banana is 0%)
 *
 * @param {any[]} items
 * @param {number[]} weights
 * @returns {{item: any, index: number}}
 */
/* eslint-disable consistent-return */
function weightedRandom(items, weights) {
  if (items.length !== weights.length) {
    throw new Error('Items and weights must be of the same size');
  }

  if (!items.length) {
    throw new Error('Items must not be empty');
  }

  // Preparing the cumulative weights array.
  // For example:
  // - weights = [1, 4, 3]
  // - cumulativeWeights = [1, 5, 8]
  const cumulativeWeights = [];
  for (let i = 0; i < weights.length; i += 1) {
    cumulativeWeights[i] = weights[i] + (cumulativeWeights[i - 1] || 0);
  }

  // Getting the random number in a range of [0...sum(weights)]
  // For example:
  // - weights = [1, 4, 3]
  // - maxCumulativeWeight = 8
  // - range for the random number is [0...8]
  const maxCumulativeWeight = cumulativeWeights[cumulativeWeights.length - 1];
  const randomNumber = maxCumulativeWeight * Math.random();

  // Picking the random item based on its weight.
  // The items with higher weight will be picked more often.
  for (let itemIndex = 0; itemIndex < items.length; itemIndex += 1) {
    if (cumulativeWeights[itemIndex] >= randomNumber) {
      return {
        item: items[itemIndex],
        index: itemIndex,
      };
    }
  }
};

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

const splitArray = (arr, chunkSize) => {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

const getLongestName = (arr) => {
  let longest = arr.reduce(
    function (a, b) {
      return a.length > b.length ? a : b;
    }
  );
  return longest;
};

const shuffledTeams = shuffleArray(teams);
const shuffledRefs = shuffleArray(referees);
const split = splitArray(teams, teams.length/2);
let msg = '';
const longest = getLongestName(split[0]).length + 2;
const sep = ''.padEnd(longest*2 + 45, "-");
console.log('\n');
console.log(sep);
console.log('\n');
// console.log('longest: ', longest);

for (let i = 0; i < split[0].length; i++) {
  const score = weightedRandom(scores, weightings);
  const paddedScore = score.item.padEnd(5).padStart(7);
  const home = split[0][i].padEnd(longest).padStart(longest + 2);
  const visitor = split[1][i].padEnd(longest + 10).padStart(longest);
  msg = `${home}${paddedScore}${visitor}(Referee: ${shuffledRefs[i]})`;
  console.log(msg);
}

console.log('\n');
console.log(sep);
console.log('\n');

// const result = weightedRandom(scores, weightings);
// console.log('result: ', result);

// const percentToDecimal = (percentStr) => {
//   return parseFloat(percentStr) / 100;  
// };

// const c = document.querySelector('.contenthalf2 .wdwtablestth');
// const rows = c.querySelectorAll('.wttr2');
// let arr = [];
// rows.forEach(function(r){
//   let items = r.querySelectorAll('.wttd');
//   arr.push(
//     {
//       scoreline: items[0].textContent,
//       games: parseInt(items[1].textContent),
//       percentage: parseFloat(items[2].textContent)
//     }
//   );
// });
// console.table(arr);
// console.dir(arr);
// console.log(rows);
