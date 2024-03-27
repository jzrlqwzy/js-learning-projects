// Remember, we're gonna use strict mode in all scripts now!
"use strict";
const a = "a";
const b = "b";
console.log(a + b);

// Code Chanllenge
const printForecast = function (arr) {
  let print = ``;
  for (let i = 0; i < arr.length; i++) {
    print += `${arr[i]}C in ${i + 1} days...`;
  }
  console.log("..." + print);
};
printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
