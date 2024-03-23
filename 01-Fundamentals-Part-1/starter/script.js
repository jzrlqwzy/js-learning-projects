let js = "amazing";
// if (js === "amazing") alert("JS is Fun!");
console.log(40 - 5);

/*
  7 Primitive data type:
  - String
  - Number
  - Boolean
  - undefined
    - both value and type of the value
  - null
    - both value and type of the value
  - Symbol
  - BigInt
*/

let year;
console.log(year);
console.log(typeof year);
// Bug: output Object but it should be null
console.log(typeof null);

// let declare muttable variable or empty
let age = 31;
age = 32;
// const declare immutable variable
const birthYear = 2024;
// NEVER USE var
var job = "teacher";
job = "programmer";

// Basic operators
// Math operators: +, -, *, /
// Assignment operators: =, +=, *=, ++, --
// Comparison operators: >, <, >=, <=

// Operator Precedence
// Reference: MDN table
let x, y;
x = y = 25 - 10 - 5;
console.log(x, y);

// Coding challenge #1
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;

const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;
console.log(markBMI, johnBMI, markHigherBMI);

// Template String in ES6
const firstName = "john";
const occupation = "programmer";
const cYear = 2024;
const bYear = 2000;

console.log(`I'm ${firstName}, a ${cYear - bYear} year old ${occupation}`);

console.log(
  "String with \n\
multiple \n\
lines"
);

console.log(`String with
multiple
lines`);

// if-else statement
const yearNow = 2012;
let century;
if (yearNow >= 2000) {
  century = 21;
} else {
  century = 20;
}
console.log(century);

// Coding challenge #2
if (markHigherBMI) {
  console.log(
    `Mark's BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`
  );
} else {
  console.log(
    `John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`
  );
}

// Type Conversion: explicitly convert
//  - JS can only convert to String, number, Boolean
const inputYear = "2000";
console.log(Number(inputYear), inputYear, inputYear + 18);
// NaN: not a number, still a number but invalid
console.log(Number("Smith"));
console.log(typeof NaN);

console.log(String(23), 23);

// Type Cooercion: implicitly convert
console.log("I am " + 23 + " year old now.");
console.log("23" - "10" - 3);
console.log("24" * "2");

let n = "1" + 1; // '11'
n -= 1; // 10
console.log(n);
// 2+3+4+'5'          -> '95'
//'10'-'4'-'3'-2+'5'  -> '15'

// falsy value:  become flase when convert them to Boolean
//  - 0, '',undefined, null, NaN / Only explicitly
//  - other than these 5, all beacome true when covert to Boolean

console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Smith"));
console.log(Boolean({}));
console.log(Boolean(""));

const money = 0;
if (money) {
  console.log(`Don't spend it all :)`);
} else {
  console.log(`You need to get a job!`);
}

let height; // let height = 0;
if (height) {
  console.log(`YAY! Height is defined!`);
} else {
  console.log(`Height is UNDEFINED! `);
}

// ===(strict) VS. ==(loose)
// !==(strict) VS. !=(loose)
// NEVER USE lOOSE!
const num = "18";
if (num === 18) console.log(`You just became an adult (strict)`);
// Type Coercion
if (num == 18) console.log(`You just became an adult (loose)`);

// Logical Operators
const hasDriverLicense = true;
const hasGoodVision = true;
const isTired = true;
// AND
console.log(hasDriverLicense && hasGoodVision);
// OR
console.log(hasDriverLicense || hasGoodVision);
// NOT
console.log(!hasDriverLicense);

if (hasDriverLicense && hasGoodVision && !isTired) {
  console.log(`Smith is able to drive.`);
} else {
  console.log(`Someone else should drive.`);
}

// Code Challenges #3
// case 1
const dolphinAvSvore = (96 + 108 + 89) / 3;
const koalaAvScore = (88 + 91 + 110) / 3;
console.log(dolphinAvSvore, koalaAvScore);
if (dolphinAvSvore > koalaAvScore) {
  console.log(`Congrats to Dolphins!`);
} else if (dolphinAvSvore < koalaAvScore) {
  console.log(`Congrats to Koalas!`);
} else {
  console.log(`DRAW!`);
}
//case 2
const dScoreA = 97;
const dScoreB = 112;
const dScoreC = 101;
const kScoreA = 109;
const kScoreB = 95;
const kScoreC = 123;

const dAvScore = (dScoreA + dScoreB + dScoreC) / 3;
const kAvScore = (kScoreA + kScoreB + kScoreC) / 3;
if (dAvScore > kAvScore && dAvScore >= 100) {
  console.log(`Congrats to Dolphins!`);
} else if (kAvScore > dAvScore && kAvScore >= 100) {
  console.log(`Congrats to Koalas!`);
} else {
  console.log(`NO WINNER!`);
}

// Switch statement
const day = "Monday";

switch (day) {
  case "Monday": // day === 'Monday'
    console.log(`Go to coding meetup`);
    break;
  case "Tuesday":
    console.log(`Write code examples`);
    break;
  default:
    console.log(`Not a valid day`);
}

// Expression VS. Statement
//  - Expression(and Operator) produce values
//  - Statement do NOT produce values

// Conditional Operator
const ageNum = 18;
const drink = ageNum >= 18 ? "wine 🍷" : "water 💧";
console.log(drink);

// Coding Challenge #4
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
const finalValue = bill + tip;
console.log(
  `The bill is ${bill}, the tip is ${tip}, and the final value is ${finalValue}.`
);
