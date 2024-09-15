// for (let i = 0; i < 10; i++) {
//   //   const element = array[i];
//   console.log(i);
// }
// console.log("");
// for (let x = 0; x <= 50; x += 4) {
//   console.log(x);
// }

/*
for (let i = 0; i <= 15; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
//  backwards:
for (let i = 15; i >= 0; i--) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

//  even numbers:
for (let i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

*/

// multiplication table:
// let num = 3;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${num} X ${i} = ${num * i}`);
// }

// nested loop:

// for (let i = 0; i <= 3; i++) {
//   console.log(`outer loop: ${i}`);
//   for (let j = 0; j <= 3; j++) {
//     console.log(j);
//   }
// }

// table:
// for (let i = 0; i <= 10; i++) {
//   console.log(`outer loop: Table of => ${i}`);
//   for (let j = 0; j <= 10; j++) {
//     console.log(`${i} X ${j} = ${i * j}`);
//   }
// }

// while loop:
// let i = 1;
// while (i <= 20) {
//   if (i % 5 == 0) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

// console.log("continue continue");

// let j = 1;
// while (j <= 20) {
//   j++;
//   if (j % 4 == 0) {
//     continue;
//   }
//   console.log(j);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   }
//   console.log("The number is " + i + "<br>");
// }

//  loops in arraus:
// let fruits = ["apple", "mango", "grapes", "banana", "papaya"];
// for (let i = 0; i < fruits.length; i++) {
//   if (i % 2 == 0) {
//     console.log(i, fruits[i]);
//   }
//   // console.log(i, fruits);
// }

// let numbers = [
//   ["carry", "triggared", "mortal"],
//   ["deshbhakt", "ravish kumar", "dhruv rathee", "sarthak"],
// ];

// for (let i = 0; i < numbers.length; i++) {
//   console.log(i, numbers[i], numbers[i].length);

//   for (let j = 0; j < numbers[i].length; j++) {
//     // ye wala single array k size that's why nums[i].length

//     console.log(`j= ${j} , ${numbers[i][j]}`);
//   }
// }

// let students = [
//   ["aman", 95],
//   ["shrads", 84],
//   ["asad", 100],
// ];
// for (let i = 0; i < students.length; i++) {
//   console.log(`info of student #${i + 1}`);
//   for (let j = 0; j < students[i].length; j++) {
//     console.log(students[i][j]);
//   }
// }

// let fruits = ["mango", "apple", "pineapple", "grapes"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// let name = "nupur patwal";
// for (let char of name) {
//   // console.log(name);
//   console.log(char);
// }

let eatables = [
  ["mango", "apple", "pineapple"],
  ["tomato", "onion"],
  ["raddish", "carrot"],
];
for (eats of eatables) {
  console.log(eats);
  for (eat of eats) {
    console.log(eat);
  }
}
