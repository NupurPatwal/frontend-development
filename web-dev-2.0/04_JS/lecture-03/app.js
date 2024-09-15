// let str = new String("Nupur");
// console.log(str);
// let lastName = "Patwal";
// let ln = lastName.includes("a");
// console.log(typeof ln);

// let msg = `This is
// my
// first message by
// love Babber`;
// console.log(msg);
// const today = new Date();
// console.log(today);

// let courses = [
//   { no: 1, naam: "delta" },
//   { no: 2, naam: "supre" },
// ];
// let course2 = [
//   { no: 3, naam: "jhj" },
//   { no: 4, naam: "kld" },
// ];

// let combiing = course2.concat(courses);
// console.log(combiing.slice(0, 1));

// let newCourse = courses.find(function (course) {
//   return course.no == 2;
// });

// console.log(newCourse);
// let arr = [1, 2, 3, 4, 5, 6];

// let arr = [10, 20, 30, 40, 50, 60];
// let arr2 = [300, 400, 500];
// let full = arr.join(",");
// console.log(full);

// arr.forEach(function (num) {
//   console.log(num);
// });

// for (const ar of arr) {
//   console.log(ar);
// }

// for (const subject in arr) {
//   console.log(subject);
// }

// let msg = "This is the message";
// console.log(msg);

// let split = msg.split("");
// console.log(split);

// let join = split.join("_");
// console.log(join);

// let arr = [3, 4, 5, 6, 7];
// let filterM = arr.filter((val) => {
//   return val > 3;
// });
// console.log(filterM);

// let arr2 = [6, 7, 8, 9];
// let mapM = arr2.map((val) => {
//   return val;
// });

// console.log(mapM);

// object chainng:-
// let num = [1, 2, -1, 4];
// let filtered = num.filter((val) => {
//   return val > 0;
// });

// console.log(filtered);

// let items = filtered.map((val) => {
//   return { num: val };
// });
// console.log(items);

// Method Chaining:

let num = [1, 2, -1, 4];
let items = num
  .filter((val) => val > 0)
  .map((val) => {
    num: val;
  });
console.log(items);
