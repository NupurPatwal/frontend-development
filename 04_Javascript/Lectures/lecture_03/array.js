//  push and pop end se add end se delete.
/*
let cars = ["audi", "rr", "merc"];
cars.push("bmw");
console.log(cars);
cars.push("ferrari");
console.log(cars);
console.log(cars.pop());
console.log(cars);
*/

// to perform functions on the front we are used shift and unshift:
/*
cars.unshift("jaugar");
console.log(cars);
console.log(cars.shift());
console.log(cars);
*/

// Array at index of:
/*
let primary = ["red", "yellow", "blue", "nocolour"];
console.log(primary.indexOf("yellow"));
console.log(primary.indexOf("red"));
console.log(primary.indexOf("pink"));

// includes:
console.log(primary.includes("blue"));
console.log(primary.includes("colour"));

// Concate method:
let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10];

console.log(num1.concat(num2));
console.log(num2.concat(num1));
console.log(num1.concat(num1));

// reverse:
console.log(num1.reverse());
*/

// Slice:

let colors = ["red", "blue", "black", "yellow", "green"];
console.log(colors.slice(-1)); // green

console.log(colors.slice()); // allcolours
console.log(colors.slice(2)); // black yellow. green
console.log(colors); // array changed...
console.log(colors.slice(-1)); // green
console.log(colors.slice(1, 2)); //blue

// sort:
let num = [5, 4, 1, 3, 2];
console.log(num.sort());

// Nested arrays:
let nestedArr = [
  [1, 2],
  [2, 3, 4, [5, 6]],
];
// console.log(nestedArr);
console.log(nestedArr[1][3][0]);
// multi level nesting.
