// let arr = [20, 30, 40, 50];
// let mulOf10 = arr.every((element) => element % 10 === 0);
// console.log(mulOf10);

// //  minimum in an array:

// let minArr = [23, 4, 56, 23, 657];
// let minimum = minArr.reduce((min, element) => {
//   if (min > element) {
//     min = element;
//   }
//   return min;
// });
// console.log(minimum);

// Default parameter:

// function sum(a, b = 3) {
//   return a + b;
// }

// console.log(sum(9));
// console.log("Minimum value through spread op:", Math.min(...minArr));
// console.log("Maximum value through spread op:", Math.max(...minArr));
// console.log(...minArr);

// let arr1 = [5, 4, 3, 2, 1];
// let arr2 = [...arr1];
// console.log(arr2);
// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8];
// let all = [...odd, ...even];
// console.log(all.sort());

// spread with object literals:

// let data = {
//   name: "sdf",
//   pass: 123,
// };
// console.log(...data);

//  2. destructuring the arrays:
let names = ["steve", "mark", "tony", "adam", "sony", "badam"];
let [winner, runnerup, ...others] = names;
// let winner = names[0];
// let runnerup = names[1];
// console.log(winner);
// console.log(runnerup);
// console.log(others);

// Destructuring for objects:
let student = {
  names: "stuvi",
  class: 22,
  subject: ["engl"],
};
