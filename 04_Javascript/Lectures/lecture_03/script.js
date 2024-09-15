// let str = "      jiewhid ";
// console.log(str.trim());
// console.log(str);

// let pass = prompt("enter tge password?");
// let newPass = pass.trim();
// console.log(newPass);

// let name = "nupur patwal";
// console.log(name.toUpperCase());

// console.log(name.indexOf("c"));
// console.log(name.indexOf("u"));
// console.log(name.indexOf("U"));

//  Method chaining:

// let text = "                 hello      js        ";
// console.log(text);
// console.log(text.toUpperCase().trim());
// console.log(text.trim().toUpperCase());

//  Slice:
/*
let newMsg = "Hello JavaScript";
console.log(newMsg.slice(0, 4));
console.log(newMsg.slice(6, 16));
console.log(newMsg.slice(6));
console.log(newMsg.slice(6, newMsg.length));
console.log(newMsg.slice(6, newMsg.length - 1));
console.log(newMsg.slice(-1)); // str.length -1;
*/

//  Replace:
/*
let msg2 = "I love coding";
console.log(msg2.replace("love", "do"));

*/
//  Replace All:
/*

let mesg3 =
  "Nupur is very intelligent. She is very smart. She is very kind. She is akru. She is diligent. She is a billionaire";
console.log(mesg3.replaceAll("She", "Nupur"));

*/

//  Repeat:
// let rep = `Nupur Patwal  `;
// let rep = "Nupur Patwal  ";
// console.log(rep.repeat(3));

// Array:
// let names = ["nupur", "stuvi", "nikunj", "rupun"];
// console.log(names);
// console.log(names[2]);

// Mixed Array:
// let info = ["nupur", 22, "30LPA"];
// console.log(info);
// let empArr = [];
// console.log(empArr.length);
// console.log([1, 2, 3, 4, 5, 6, 7, 8].length);
// console.log(info[0][0]);
// console.log(info[0].length);

// Arrays are mutable but strings are immutable:-

let str = "rupun";
console.log((str[0] = "n"));
// console.log(str);

let arr = ["rupun", "patwal"];
console.log(arr);
arr[0] = "nupur";
console.log(arr);
arr[6] = "microsoft";
console.log(arr);
