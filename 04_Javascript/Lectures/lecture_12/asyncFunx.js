// async function greet(params) {
//   // throw new Error("random error");

//   return "hello";
// }
// greet()
//   .then((result) => {
//     console.log("promise resloved");
//     console.log("the result was", result);
//   })
//   .catch((err) => {
//     console.log("Promise rejected with err:", err);
//   });

// 1. async arrow functioms:-

// let asyncFun = async () => {
//   return "ola amigio Kaise ho theek ho."; // returns a promise.
// };

// console.log(asyncFun());

// 2.
// function getNum() {
//   // console.log(5);
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let num = Math.floor(Math.random() * 10) + 1;
//       // return num;
//       console.log(num);
//       resolve();
//     }, 1000);
//   });
// }

// async function demo() {
//   await getNum();
//   await getNum();
//   await getNum();
//   getNum();
// }

// demo();

// 2. Await keyword:-

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let randomNum = Math.floor(Math.random() * 10) + 1;
      // return randomNum;
      console.log(randomNum);
      resolve();
    }, 1000);
  });
}

async function demo(params) {
  await getNum();
  await getNum();
  await getNum();
  getNum();
}

// 3. color change code:
// let h1 = document.querySelector("h1");

// function changeColor(color) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let newNum = Math.floor(Math.random() * 5) + 1;
//       if (newNum > 3) {
//         reject("promise rejected.");
//       }

//       h1.style.color = color;
//       console.log(`H1 color changes to ${color}`);
//       resolve();
//     }, 1000);
//   });
// }

// // changeColor("red");
// async function changeFun(params) {
//   try {
//     await changeColor("pink");
//     await changeColor("orange");
//     await changeColor("green");
//     await changeColor("yellow");
//     await changeColor("skyblue");
//     await changeColor("magenta");
//   } catch (error) {
//     console.log(error);
//     console.log("error caught");
//   }

//   let a = 10;
//   console.log(a);
//   console.log("new num: =", a + 3);
// }

// 4. Api:
// 5. Accessing some API:-
// 6. What is JSON
//7.Accessing Data from JSON :

let jsonResponse =
  '{"fact":"A cat has the ability to rotate their ears 180 degrees,with the help of 32 muscles that they use to control them.","length":113}';

console.log(jsonResponse);
console.log(jsonResponse.fact);

let validFormate = JSON.parse(jsonResponse);
console.log(validFormate); // it is now an js object.
console.log(validFormate.fact);
console.log(validFormate.length);

// json. stringufy:

let human = {
  fullName: "nupurP",
  age: 23,
};
console.log(human);
console.log(human.fullName);
console.log(human.age);

let parseData = JSON.stringify(human);
console.log(parseData);

// 8. Api testing tools:
// 9. http verbs:
