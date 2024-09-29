'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
};

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// coding challenge 1
// #1
const [players1, players2] = game.players;
console.log(players1,players2);
// #2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// #3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);
// #4
const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);
// #5
const {team1, x:draw, team2} = game.odds;
console.log(team1,draw,team2);
// #6
const printGoals = function (...players) {
  console.log(`${players.length} goals were scored\nPlayers: ${players}`);
  console.log()
}
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davies', 'Muller');
printGoals(...game.scored);
// #7
team1 < team2 && console.log(`${game.team1} (Team 1) more likely to win`);
team2 < team1 && console.log(`${game.team2} (Team 2) more likely to win`);

// coding challenge 2
// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (const [i,player] of game.scored.entries()) {
  console.log(`Goal ${i}: ${player}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
let odds = Object.values(game.odds);
let average = 0;
for (const odd of odds) {
  average += odd;
}
console.log(`Average odd: ${average/odds.length}`);

/*
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw").
HINT: Note how the odds and the game objects have the same property names 😉
*/
for (const x of Object.keys(game.odds)) {
  let team = x == 'x' ? "draw" : `victory ${game[x]}`;
  console.log(`Odd of ${team}: ${game.odds[x]}`);
}

/*
BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties,
and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }
*/

let scorers = {};
for (const y of game.scored) {
  scorers[y] ? scorers[y]++ : (scorers[y] = 1);
}
console.log(scorers);