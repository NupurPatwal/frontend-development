function hello() {
  console.warn("Hello! there it's warn");
  console.log("Hello! I am log");
  console.error("Hey! I am aerror");
}
// hello();
// hello();
// hello();
// hello();
function printName() {
  console.log(`My name is Nupur Patwal`);
}
// printName();
// printName();
// printName();

//  Practise 1:

function printPoem(params) {
  console.log(`When ships were made of wood,
And men were made of steel,
They sailed the mighty seas,
With courage and with zeal.

They braved the stormy weather,
And faced the raging waves,
Their hearts were filled with valor,
Their souls were strong and brave.`);
}

// printPoem();

//  Practise 2:
function rollDice() {
  console.log(Math.floor(Math.random() * 6) + 1);
}
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();

function printN(name) {
  // argument
  console.log(name);
}
// printN("nupur patwal"); // parameter

// practise Q3:
function avg3num(a, b, c) {
  console.log((a + b + c) / 3);
}
// avg3num(3, 4, 5);

//  Practise Qs.4:
function mulTable(num) {
  for (let i = 0; i <= 10; i++) {
    console.log(`${num} X ${i} = ${num * i}`);
  }
}
// mulTable(5);

// return stt:
function rtrn(a, b) {
  console.log("hello1");

  return a + b;
  console.log("hello3");
}
// console.log("hello2");

// console.log(rtrn(3, 6));

// practise :

function sumOfn(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) sum += i;
  //   console.log(sum);
  return sum;
}
// sumOfn(5);
// console.log(sumOfn(5));

let arrStr = ["abhi ", "toh ", "ye ", "pehli ", "manzil ", "hai "];

function concateStr(arrStr) {
  let result = "";
  //   let result;
  for (let i = 0; i < arrStr.length; i++) {
    result += arrStr[i];
  }
  //   console.log(result);
  return result;
}

// console.log(concateStr(arrStr));

//  practise:

// let greet = "hello!";
// function changeGreet() {
//   let greet = "nameste";
//   console.log(greet);
//   function innerGreet() {
//     console.log(greet);
//   }
// }
// console.log(greet); // hello
// changeGreet(); // nameste *2

// let name = "nupur";
// let sum = function (a, b) {
//   return a + b;
// };

// console.log(sum(2, 3));
function multipleGreet(fn, n) {
  for (let i = 1; i <= n; i++) {
    fn();
  }
}
let gtt = function () {
  console.log("hello");
};

multipleGreet(gtt, 3);

// function french(func, count) {
//   for (let i = 1; i <= count; i++) {
//     func();
//   }
// }
// let ola = function () {
//   console.log("ola! Amigo");
// };
// french(ola, 4);
// console.log("kaise ho theek ho");

let num = {
  add: function (a, b) {
    return a + b;
  },
  sub: function (a, b) {
    return a - b;
  },
  mul: function (a, b) {
    return a * b;
  },
};

console.log(num.mul(5, 10));
//  shorthand of using a method
let num2 = {
  add(a, b) {
    return a + b;
  },
  sub(a, b) {
    return a - b;
  },
  mul(a, b) {
    return a * b;
  },
};

console.log(num2.sub(5, 10));
