// function hello() {
//   console.log("inside hello function.");

//   console.log("hello world.");
// }

// function demo() {
//   console.log("calling hello function.");
//   hello();
// }

// console.log("calling demo function.");
// demo();
// console.log("Done! Good Bye..");

// 2. Visualising the call stack:-

// function one() {
//   return 1;
// }
// function two() {
//   return one() + one();
// }

// function three() {
//   let ans = two() + one();
//   console.log(ans);
// }

// three();

// 3. js is single threaded:-

// let a = 10;
// console.log(a);
// let b = 5;
// console.log(b);
// console.log(a + b);

// 4. callback:
// setTimeout(() => {
//   console.log("My name is Nupur PAtwal");
// }, 3000);
// setTimeout(() => {
//   console.log("My name is Nupur");
// }, 3000);
// console.log("hello world");

// 5. call back hell:

// let h1 = document.querySelector("h1");

// function changeColor(color, timeout, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, timeout);
// }

// //  nesting of call backs:-
// changeColor("plum", 1000, () => {
//   changeColor("magenta", 1000, () => {
//     changeColor("purple", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("skyblue", 1000);
//       });
//     });
//   });
// });

// 6. promises:
// a. setting up promises.

// function saveToDB(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     success();
//   } else {
//     failure();
//   }
// }
// saveToDB(
//   "Nupur patwal",
//   () => {
//     console.log("Success:your data is saved.");
//     saveToDB(
//       "helloworld",
//       () => {
//         console.log("Success2: data2 saved.");
//         saveToDB(
//           "data3",
//           () => {
//             console.log("success3: data 3 saved");
//           },
//           () => {
//             console.log("failure 3: data 3 not saved");
//           }
//         );
//       },
//       () => {
//         console.log("failure of S1: data2 not saved");
//       }
//     );
//   },
//   () => {
//     console.log("Failure: Weak connection.data is not saved.");
//   }
// );

// 7. Refactoring with promises:-

// Brute force:

// function saveToDB(data) {
//   return new Promise((success, failure) => {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if (internetSpeed > 4) {
//       success("data saved");
//     } else failure("weak connection");
//   });
// }

// console.log(saveToDB("nupur"));

// optimised:

function saveToDB(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("success : Good Connection");
    } else reject("failure :weak connection");
  });
}

// let request = saveToDB("apna college"); // req == promise k object

// request
//   .then(() => {
//     console.log("promise was resolved");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//     console.log(request);
//   });

// another short and compact way of writing this.

// saveToDB("apna college")
//   .then(() => {
//     console.log("promise was resolved");
//   })
//   .catch(() => {
//     console.log("promise rejected");
//   })
//   .finally(() => {
//     console.log("next promise");
//   });

// 8. promise chaining:

// saveToDB("apna college")
//   .then(() => {
//     console.log("data 1 saved promise was resolved");
//     saveToDB("nupur").then(() => {
//       console.log("data 2 saved");
//     });
//   })
//   .catch(() => {
//     console.log("promise rejected");
//   })
//   .finally(() => {
//     console.log("next promise");
//   });

// Optimised way of promise chaining:

// saveToDB("apna college")
//   .then(() => {
//     console.log("data 1 saved promise was resolved");
//     return saveToDB("nupur");
//   })
//   .then(() => {
//     console.log("Data 2 saved");
//     return saveToDB("patwal");
//   })
//   .then(() => {
//     console.log("data 3 saved");
//   })
//   .catch(() => {
//     console.log("promise rejected");
//   })
//   .finally(() => {
//     console.log("next promise");
//   });

// 9. Result and Error in Promises.

/*
saveToDB("apna college") // db k ander first data save krwao
  .then((Result) => {
    console.log("data 1 saved promise was resolved"); // agar save ho gya
    console.log("Result of promise :=> ", Result);

    return saveToDB("nupur"); // toh next data save krwao
  })
  .then((Result) => {
    console.log("Data 2 saved"); // agar save ho gya toh next
    console.log("Result of promise :=> ", Result);

    return saveToDB("patwal");
  })
  .then((Result) => {
    console.log("data 3 saved");
    console.log("Result of promise :=> ", Result);
  })
  .catch((Error) => {
    // agar save nahi hua
    console.log("promise rejected"); // reject karwao
    console.log("Error of promise :- ", Error);
  })
  .finally(() => {
    console.log("next promise");
  });

  */

//  10. refactoring the old code:
let h1 = document.querySelector("h1");

// function changeColor(color, timeout, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, timeout);
// }

// //  nesting of call backs:-
// changeColor("plum", 1000, () => {
//   changeColor("magenta", 1000, () => {
//     changeColor("purple", 1000, () => {
//       changeColor("yellow", 1000, () => {
//         changeColor("skyblue", 1000);
//       });
//     });
//   });
// });

function colorChange(color, timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed");
    }, timeout);
  });
}

colorChange("red", 1000)
  .then(() => {
    console.log("red color changed");
    return colorChange("pink", 1000);
  })
  .then(() => {
    console.log("pink color changed");
    return colorChange("blue", 1000);
  })
  .then(() => {
    console.log("changed to blue.");
    return colorChange("magenta", 1000);
  })
  .then(() => {
    console.log("changed to magenta");
  });
