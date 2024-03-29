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
