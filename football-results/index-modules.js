const chalk = require('chalk');
const data = require('./modules/data');
const getLongestName = require('./modules/getLongestName');
const weightedRandom = require('./modules/weightedRandom');
const shuffleArray = require('./modules/shuffleArray');
const splitArray = require('./modules/splitArray');

const shuffledTeams = shuffleArray(data.teams);
const shuffledRefs = shuffleArray(data.referees);
const split = splitArray(shuffledTeams, shuffledTeams.length/2);
let msg = '';
const longest = getLongestName(split[0]).length + 2;
const sep = ''.padEnd(longest*2 + 50, "-");

const splitScore = (scoreString) => {
  const scoreArr = scoreString.split('-');
  return {
    text: scoreString,
    homeScore: scoreArr[0],
    awayScore: scoreArr[1]
  }
};

console.log();
console.log(sep);
console.log();
console.log(chalk.bold('PREMIER LEAGUE RESULTS'));
console.log();

for (let i = 0; i < split[0].length; i++) {
  // Get random scoreline, weighted by probability
  const score = weightedRandom(data.scores, data.weightings);
  const scoreObj = splitScore(score.item);
  const formattedScore = `${scoreObj.homeScore} - ${scoreObj.awayScore}`;
  const paddedScore = formattedScore.padEnd(8).padStart(10);
  const homeWin = scoreObj.homeScore > scoreObj.awayScore;
  const awayWin = scoreObj.homeScore < scoreObj.awayScore;
  const home = split[0][i].padEnd(longest).padStart(longest + 2);
  const visitor = split[1][i].padEnd(longest + 10).padStart(longest);

  const homeFormat = homeWin ? chalk.bold.green : chalk.reset;
  const visitorFormat = awayWin ? chalk.bold.green : chalk.reset;

  msg = `${homeFormat(home)}${paddedScore}${visitorFormat(visitor)}(Referee: ${shuffledRefs[i]})`;

  console.log(msg);
}

console.log();
console.log(sep);
console.log();
