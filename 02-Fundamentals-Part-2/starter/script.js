// activate strice mode, add this line at the top of JS file
"use strict";

// Function & Function calling other Function
function cutFruitPieces(fruitNum) {
  return fruitNum * 4;
}
function fruitProcessor(applesNum, orangesNum) {
  const applePieces = cutFruitPieces(applesNum);
  const orangePieces = cutFruitPieces(orangesNum);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
  return juice;
}

// calling / running / invoking function
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

// Function declaration
//  - can invoke first and then delare
function calcAge1(birthYear) {
  return 2024 - birthYear;
}
const age1 = calcAge1(1999);

// Function expression
const calcAge2 = function (birthYear) {
  return 2024 - birthYear;
};
const age2 = calcAge2(1999);

console.log(age1, age2);

// Arrow Function
const calcAge3 = (birthYear) => 2024 - birthYear;
const age3 = calcAge3(1999);
console.log(age3);

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2024 - birthYear;
  const retirement = 65 - age;
  return `${firstName} retires in ${retirement}.`;
};
console.log(yearUntilRetirement(1999, "Smith"));

// Coding Challenge
const calcAverage = (scoreA, scoreB, scoreC) => {
  const averageScore = (scoreA + scoreB + scoreC) / 3;
  return averageScore;
};

const dolphinAverage = calcAverage(44, 23, 71);
const koalaAverage = calcAverage(65, 54, 49);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return `Dolphins win (${avgDolphins} VS. ${avgKoalas})`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Koalas win (${avgKoalas} VS. ${avgDolphins})`;
  } else {
    return `NO WINNER`;
  }
}

console.log(checkWinner(dolphinAverage, koalaAverage));

// Arrays: a special Object
// create
const friends = ["Michael", "Allen", "Jay"];
const years = new Array("1990", "1991", "1992");
// retrieve
console.log(friends[0], years.length);
// write
// values can't be changed with 'const' only works for primitive type(without array)
friends[0] = "Smith";
// array in array
const info = ["name", "job", 2024 - 1999, friends];
// Basic Array Operations(Methods)
// Add element
friends.push("Mary");
friends.unshift("Jane");
// Remove element
friends.pop();
friends.shift();
console.log(friends.indexOf("Allen"), friends.indexOf("Nancy")); // 1, -1
console.log(friends.includes("Allen"), friends.includes("Nancy")); // true, flase

// Coding Challenge
const calcTip = function (bill) {
  if (bill >= 50 && bill <= 300) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
};
const bills = new Array(125, 555, 44);
const tips = new Array(
  calcTip(bills[0]),
  calcTip(bills[1]),
  calcTip(bills[bills.length - 1])
);
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals);

// Objects
const personalInfo = {
  firstName: "John",
  lastName: "Doe",
  age: 2024 - 1999,
  job: "programmer",
  hobbies: ["sports", "reading", "Internet"],
};
// Dot VS. Bracket Notation
// Retrieve element
console.log(personalInfo.firstName, personalInfo["firstName"]);

// const interestedIn = prompt(
//   `What do in want to know about John Doe? Choose between firstName, lastName, age, job, or hobbies`
// );

// if (personalInfo[interestedIn]) {
//   console.log(personalInfo[interestedIn]);
// } else {
//   console.log(
//     `Wrong request! Choose between firstName, lastName, age, job, or hobbies.`
//   );
// }

// Add element
personalInfo.location = "Europe";
personalInfo["email"] = "me@example.com";
console.log(personalInfo);
// Exercise
// print this sentence without hardcode. `John has 3 hobbies, his favorite one is reading`
console.log(
  `${personalInfo.firstName} has ${personalInfo.hobbies.length} hobbies, his favorite one is ${personalInfo.hobbies[1]},`
);

// Object Methods: function as a value and methods as a property
const john = {
  firstName: "John",
  lastName: "Doe",
  birthYear: 1999,
  job: "programmer",
  hobbies: ["sports", "reading", "Internet"],
  hasDriverLicense: true,

  // calcAge: function (birthYear) {
  //   return 2024 - birthYear;
  // },

  // calAge: function () {
  //   return 2024 - this.birthYear;
  // },

  calAge: function () {
    // add property into Object
    this.age = 2024 - this.birthYear;
    return this.age;
  },
};
// `this` keyword / variable = object on which method is invoked
// `this` is the one who called method(calAge function), which is john Object
console.log(john.calAge());

console.log(john.age);
console.log(john["calAge"](1999));

// Exercise
// print: `Smith is a 25-year old programmer, he has a/no driver license.`
const smith = {
  firstName: "Smith",
  lastName: "Doe",
  birthYear: 1999,
  job: "programmer",
  hobbies: ["sports", "reading", "Internet"],
  hasDriverLicense: false,
  calAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
  getSummary: function () {
    return (this.summary = `${this.firstName} is a ${this.calAge()}-year old ${
      this.job
    }, he has ${this.hasDriverLicense ? "a" : "no"} driver license.`);
  },
};
console.log(smith.getSummary());
console.log(smith.summary);

// Coding Challenge
const markMiller = {
  firstName: "Mark",
  lastName: "Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

const johnSmith = {
  firstName: "John",
  lastName: "Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    return (this.bmi = this.mass / this.height ** 2);
  },
};

// let the method be excuted then the bmi property can hold a value
markMiller.calcBMI();
johnSmith.calcBMI();
console.log(markMiller.bmi, johnSmith.bmi);

if (markMiller.bmi > johnSmith.bmi) {
  console.log(
    `${markMiller.firstName} ${markMiller.lastName}'s BMI (${markMiller.bmi}) is higher than ${johnSmith.firstName} ${johnSmith.lastName}'s BMI (${johnSmith.bmi})`
  );
} else {
  console.log(
    `${johnSmith.firstName} ${johnSmith.lastName}'s BMI (${johnSmith.bmi}) is higher than ${markMiller.firstName} ${markMiller.lastName}'s BMI (${markMiller.bmi})`
  );
}

// For Loop
// for loop keeps running  while condition is TRUE
for (let rep = 1; rep < 11; rep++) {
  console.log(`Lifting weights repetion ${rep} 🏋️`);
}

// Looping Arrays
const diana = [
  "Diana",
  "Fitz",
  2024 - 1999,
  "teacher",
  ["sport", "youtube", "reading"],
  true,
];
const types = [];

for (let i = 0; i < diana.length; i++) {
  // Read from Array
  console.log(diana[i], typeof diana[i]);
  // Fill Array
  // types[i] = typeof diana[i];
  types.push(typeof diana[i]);
}
console.log(types);

// continue and break
console.log("------Only Strings------");
for (let i = 0; i < diana.length; i++) {
  if (typeof diana[i] !== "string") continue;
  console.log(diana[i], typeof diana[i]);
}

console.log("------Break with number------");
for (let i = 0; i < diana.length; i++) {
  if (typeof diana[i] === "number") break;
  console.log(diana[i], typeof diana[i]);
}

// Looping Backwords
console.log("---Looping Backwords---");
const fiona = [
  "Fiona",
  "Gosling",
  2024 - 1999,
  "teacher",
  ["sport", "youtube", "reading"],
  true,
];
for (let i = fiona.length - 1; i >= 0; i--) {
  console.log(fiona[i]);
}

// Loop in Loop
for (let exe = 1; exe < 4; exe++) {
  console.log(`---Exercise ${exe}---`);
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exe}: Lifting weight repetitin ${rep} 🏋️`);
  }
}

// While Loop
let i = 1;
while (i <= 10) {
  console.log(`WHILE LOOP: Lifting weight repetitin ${i} 🏋️`);
  i++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log(`You rolled a ${dice} and loop end here.`);
}

// Coding Challenge
// #1
const fees = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const extraFees = [];
const totalFees = [];

for (i = 0; i < fees.length; i++) {
  extraFees.push(calcTip(fees[i]));
  totalFees.push(calcTip(fees[i]) + fees[i]);
}
console.log(fees, extraFees, totalFees);
console.log("--------------");

// #2
const calcAve = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
};
console.log(calcAve(totalFees));
