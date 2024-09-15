let arr = [212, 3, 56, 3, 8, 36, 4, 23, 9];
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

// let ans = arr.reduce((max, element) => {
//   if (max < element) {
//     max = element;
//   }
//   return max;
// });
// console.log(ans);

// let char = [..."nupur"];
// console.log(char);
// let odd = [1, 3, 5, 7, 9];
// let even = [2, 4, 6, 8];
// let allNum = [...odd, ...even];
// console.log(allNum);
// console.log(allNum.sort());

let data = {
  name: "asjhd",
  pass: 1213,
};

let dataCopy = { ...data, id: "pass" };
console.log(dataCopy);
let obj2 = { ..."hellllllooooohhhh" };
// console.log(obj2);

// rest:

// function sum(...para) {
//   return para.reduce((add, el) => add * el);
// }

// console.log(sum(3, 3, 5, 6, 0));

// function fact(...args) {
//   // let fac = 1;
//   for (let i = 0; i < args.length; i++) {
//     console.log("answer is ", args[i]);
//   }
// }
// fact(3, 4, 5);

// function min(a, b, c, d) {
//   console.log(arguments);
//   console.log(arguments.length);
// }
// min("alpha", "barvo", "charlie", "delta");

//  minimum and maximum value:
function min(...args) {
  return args.reduce((min, elemnet) => {
    if (min < elemnet) {
      return min;
    } else {
      return elemnet;
    }
  });
}
console.log(min(2345, 23, 2354, 76, 9, 23, 321));
