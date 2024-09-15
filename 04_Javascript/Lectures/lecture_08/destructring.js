// let allPlayers = ["ram", "sam", "dam", "pam", "jam"];
// let [winner, runnerup, ...others] = allPlayers;
// console.log(winner, runnerup);
// console.log(others);

//  example of try and catch bss aise hi.
// let a = 10;
// console.log("hello1");
// console.log("hello2");
// try {
//   console.log(a);
// } catch (error) {
//   //   console.log("a is not defined");
//   console.log(error);
// }
// console.log("hello3");
// console.log("hello4");

//  Creating destructuring in an object:-
let student = {
  name: "ajabdeh",
  age: null,
  class: undefined,
  favSubj: [
    "maths",
    "physics",
    "chemistry",
    "english",
    "economics",
    "politics",
    "geo",
    "history",
    "international",
  ],
  username: "ajabdeh@imaginary",
  pass: "abcd",
};
// console.log(student.username);
// console.log(student.favSubj);

// Alternative method:
let { username, favSubj, name, age } = student;
console.log(username, favSubj, name, age);
