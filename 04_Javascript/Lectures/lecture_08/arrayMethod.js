// let fruits = ["apple", "mango", "grapes", "banana", "pineapple"];
// console.log(typeof fruits);

// for (let fruit of fruits) {
//   console.log(fruit);
// }

// let arr = [1, 2, 3, 4, 5, 6];
// function print(ele) {
//   console.log(ele);
// }
// arr.forEach(print);

// fruits.forEach((ele) => {
//   console.log(ele);
// });

// let print2 = (ele) => {
//   console.log(ele);
// };
// let print2 = function (ele) {
//   console.log(ele);
// };
// fruits.forEach(print2);

// Array of objects:

let newArr = [
  {
    fullName: "nupur patwal",
    marks: 99,
  },
  { fullName: "shradha", marks: 93 },
  {
    fullName: "aman dhats",
    marks: 94.4,
  },
];
// console.log(newArr);
// newArr.forEach((ele) => {
//   console.log(ele);
//   console.log(ele.marks);
// });

// Map method:

// let single = [2, 4, 6, 8, 10];
// let double = single.map((elem) => {
//   //   console.log(elem);
//   return elem * elem;
// });
// console.log(double);

// let gpa = newArr.map((elem) => {
//   return elem.marks / 10;
// });
// console.log(gpa);

// filter:
let num = [2, 4, 6, 0, -8, 10];
let numFilter = num.filter((num) => {
  if (num % 2 == 0) {
    console.log(num);
  }
});
let posti = num.every((element) => element > 0);
console.log(posti);

let some = num.some((element) => element < 0);
console.log(some);

let finalVal = num.reduce((result, element) => result * element);
console.log(finalVal); //0
