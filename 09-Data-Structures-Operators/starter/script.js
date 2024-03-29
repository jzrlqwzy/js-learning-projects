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

  orderDelivery: function ({
    mainIndex = 0,
    starterIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole, 21',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del sole, 21',
  starterIndex: 2,
});

// Destruct Objects with default value
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

// Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

// Nested objects
const { openingHours } = restaurant;
console.log(openingHours);

const { fri } = openingHours;
console.log(fri);

const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);

// Spread Operator
// Take all elements out of arrays but doesn't create new variable
// When to use: 1. Pass arguements into function 2. Build new array
// Where to use: where values are separated by comma
const arr = [7, 8, 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const goodNewArr = [1, 2, ...arr];
console.log(goodNewArr);
console.log(...goodNewArr);

const newMainMenu = [...restaurant.mainMenu, 'burger'];
console.log(newMainMenu);

// Shallow Copy array
const mainMenuCopy = [...restaurant.mainMenu];
// merge main and starter menu arrays
const mergeMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(mergeMenu);
// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'John';
const newStr = [...str, '', 'D', 'o', 'e'];
console.log(newStr);
// Wrong: Not a place expects multiple values separete by comma
// console.log(`${...str} Doe`);

// Real-world example
const ingredients = ['mushrooms', 'cheese', 'asparagus'];
restaurant.orderPasta(...ingredients);

// Object(since ES2018)
const newRestaurant = { foundedIn: 1999, ...restaurant, founder: 'John Doe' };
console.log(newRestaurant);
// Shallow Copy(compared with another shallow copy: const shallowCopy = Object.assign({}, originalObj))
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Chinese Flavour';
restaurantCopy.mainMenu.push('aaa');
console.log(restaurant);
console.log(restaurantCopy);

// 1) Destructuring

// Rest pattern: on LEFT side of =
// Pack multiple numbers / values into one array
// When to use: where variable names are separated by comma
const [i, j, k, ...others] = [1, 2, 3, 4, 5];
console.log(i, j, k, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

// Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(sat, weekdays);

// 2) Functions
// case 1
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
// case 2
const x = [1, 2, 3];
// ...x is spraed operator destructing array then pass separate values to ...numbers which pack them in one array
add(...x);

restaurant.orderPizza('mushrooms', 'pepper', 'cheese');

// Logical operators
// use ANY data type, return ANY data type, short-circuiting

// RETURN the first truthy value or the last value if all of them are falsy
console.log('----- OR -----');
console.log(undefined || 0 || '' || 'hello' || 23);

restaurant.numGuests = 0;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);

const guest2 = restaurant.numGuests || 10;
console.log(guest2);
// Nullish Coalescing operator:??(since ES2020)
// Nullish: null or undefined (NOT 0 or '')
// Meaning: value is nullish ? go on : short circuit
const guest3 = restaurant.numGuests ?? 10;
console.log(guest3);

// RETURN the first falsy value or the last value if all of them are truthy
console.log('----- AND -----');
console.log('hello' && 23 && null && 'john');

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'cheese');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'cheese');

// Logical Assignment Operators(since ES2021)
const rest1 = {
  name: 'Caprri',
  // numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1, rest2);

// Coding Challenge
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
  printGoals: function (...players) {
    let numgoals = 0;
    for (let i = 0; i < players.length; i++) {
      numgoals++;
      console.log(
        `${players[i]} scored! Now, total number of goals: ${numgoals}`
      );
    }
  },
};

const [player1, player2] = game.players;
console.log(player1, player2);

const [gk, ...fieldPlayers] = player1;
console.log(gk, fieldPlayers);

const allPlayers = [...player1, ...player2];
console.log(allPlayers);

const player1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(player1Final);

// const { team1, x: draw, team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

game.printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
console.log('----------------------');
game.printGoals(...game.scored);

team1 < team2 && console.log(`Team 1 is more likely to win.`);

for (const [i, el] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${el}`);
}

const oddsValues = Object.values(game.odds);
let total = 0;
for (const value of oddsValues) {
  total += value;
}
console.log(total / oddsValues.length);

const oddsEntries = Object.entries(game.odds);
for (const [key, value] of oddsEntries) {
  const teamStr = key === 'x' ? 'draw' : `victory of ${game[key]}`;
  console.log(`Odd of ${teamStr}: ${value}`);
}

// For-of Loop
const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
for (const item of menu1) {
  console.log(item);
}

for (const item of menu1.entries()) {
  console.log(item);
}

for (const item of menu1.entries()) {
  console.log(`${item[0] + 1}: ${item[1]}`);
}

for (const [i, el] of menu1.entries()) {
  console.log(`${i + 1}: ${el}`);
}

console.log([...menu1.entries()]);

// Enhacned Object Literals
const weekday = ['mon', 'tue', 'weds', 'thur', 'fri', 'sat', 'sun'];
const hours = {
  [weekday[3]]: {
    open: 12,
    close: 22,
  },
  [weekday[4]]: {
    open: 11,
    close: 23,
  },
  [weekday[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

const restaurant1 = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  // Enhacned Object Literals
  hours,
  orderDelivery({ mainIndex = 0, starterIndex = 1, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredients, ...otherIngredients) {
    console.log(mainIngredients);
    console.log(otherIngredients);
  },
};

// Optional Chaining(ES2020)
// On property
if (restaurant1.hours && restaurant1.hours.mon) {
  console.log(restaurant1.hours.mon.open);
}

console.log(restaurant1.hours.mon?.open);
console.log(restaurant1.hours?.mon?.open);

// Real Example
for (const day of weekday) {
  const open = restaurant1.hours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}

// On Methods
console.log(
  restaurant1.orderDumplings?.('pork', 'asparagus') ?? "Method doesn' exist."
);

// On Arrays
// const john = [{ name: 'John', age: 18 }];
const john = [];
console.log(john[0]?.name ?? 'Array is empty');

// For Loop Objects in a indirect way
// Property names(keys)
const keys = Object.keys(hours);
console.log(keys);

let openStr = `we are open on ${keys.length} days: `;
for (const day of keys) {
  openStr += `${day},`;
}
console.log(openStr);

// Property Values
const values = Object.values(hours);

// Entire Object
const entries = Object.entries(hours);

for (const [key, { open, close }] of entries) {
  console.log(`On ${key}, we open at ${open} and close at ${close}`);
}

// Sets
const ordersSet = new Set([
  'pasta',
  'pizza',
  'pizza',
  'risotto',
  'pasta',
  'pizza',
]);

console.log(ordersSet);
console.log(new Set('John'));
console.log(ordersSet.size);
console.log(ordersSet.has('burger'));
ordersSet.add('rice');
ordersSet.add('rice');
ordersSet.delete('risotto');
// ordersSet.clear();
console.log(ordersSet);

for (const order of ordersSet) console.log(order);

const staff = ['waiter', 'chef', 'manager', 'waiter', 'chef'];
const staffUnique = new Set(staff);
console.log(staffUnique);

console.log(new Set(['waiter', 'chef', 'manager', 'waiter', 'chef']).size);
console.log(new Set('John').size);

// Maps
// create
const rest = new Map();
// key-value pair
rest.set('name', 'Classico Italiano');
rest.set(1, 'Firenze, Italy');
console.log(rest.set(2, 'Lisbon, Portugal'));

rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'we are open <3')
  .set(false, 'we are closed :(');

const time = 19;
console.log(rest.get(time >= rest.get('open') && time <= rest.get('close')));
console.log(rest.has('categories'));
rest.delete(2);

const array = [1, 2];
rest.set(array, 'Test');
console.log(rest.get(array));

rest.set(document.querySelector('h1'), 'heading');

console.log(rest);
console.log(rest.size);
// rest.clear();

// Create with Array
const question = new Map([
  ['question', 'what is the best programming language?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct!'],
  [false, 'Try again!'],
]);

console.log(question);

// Convert Object to Map
// Object -> entrie -> Map
console.log(Object.entries(hours));
const hoursMap = new Map(Object.entries(hours));
console.log(hoursMap);

// Iteration
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Anwser ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer:'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

// Covert map to array
console.log(question);

console.log([...question]);
console.log(question.entries());
console.log(question.keys());
console.log([...question.keys()]);
console.log(question.values());
console.log([...question.values()]);

// Date Structures Overview

// Source of Data
// 1) From program itself:Written in source code
// 2) From UI: Input from the user or written in DOM
// 3) *From external Source: Fetched from example from web API(Form: JSON)
// Souce of Data => Collection of Data => Data Structure =>
// simple list? Arrays or Sets
// key/value pairs? Objects or Maps (key allow to describe values)

// Arrays VS. Sets
// Array:
// 1. ordered list
// 2. might have duplicates
// 3. manipulate data

// Set:
// 1. unique values
// 2. `high-performance` is important
// 3. remove duplicates form array

// Objects VS. Maps
// Object:
// 1.easy to write and access with . and []
// 2. use when need to include functions(methods)
// 3. use when working with JSON(can be converted to Map but NOT recommended)

// Map：
// 1. better performance
// 2. have ANY data tyoe
// 3. easy to iterate
// 4. easy to compute size
// 5. simply need map key to value
// 6. need key that are not string

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have a map with a log of the events that happened during the game. The values are the events themselves, and the keys are the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

const gameEvents = new Map([
  [17, '⚽️ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽️ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽️ GOAL'],
  [80, '⚽️ GOAL'],
  [92, '🔶 Yellow card'],
]);

const events = new Set(gameEvents.values());
console.log(events);

gameEvents.delete(64);
console.log(gameEvents);

const mins = new Set(gameEvents.keys());
console.log(`An event happened, on average, every ${90 / mins.size} minutes`);

for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${key}: ${value}`);
}
