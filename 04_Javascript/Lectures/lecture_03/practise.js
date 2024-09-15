// let msg = "  help!      ";
// console.log(msg.trim().toUpperCase());

// let str = "Apna college";
// console.log(str.slice(4, 9));
// console.log(str.indexOf("na"));
// console.log(str.replace("Apna", "our"));
// console.log(str.slice(4).replaceAll("l", "t"));

// let months = ["jan", "july", "march", "aug"];
// months.shift();
// months.shift();
// console.log(months);
// months.unshift("july", "june");
// console.log(months);

// let start = ["jan", "july", "march", "aug"];
// start.splice(0, 2, "july", "june");
// console.log(start);

let tech = ["c", "cpp", "html", "javascript", "python", "java", "C#", "sql"];

console.log(tech.indexOf("javascript"));
console.log(tech.reverse().indexOf("javascript"));

// practise Ques 2:
// 2 D tic tac toe:

let ticTac = [
  [
    ["X", null, "O"],
    [null, "X", null],
    ["O", null, "X"],
  ],
  [
    ["X", "", "O"],
    ["", "X", ""],
    ["O", "", "X"],
  ],
];
// console.log(ticTac);
ticTac[0][0][1] = "O";
console.log(ticTac[0][0][1]);
console.log(ticTac);
