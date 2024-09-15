// settimeout (func, timeout) the first func here is callbacks

//  type 1...

/*
console.log("Hi! there");
setTimeout(fullName, 2000);
console.log("My name is ");

function fullName() {
  console.log("Nupur patwal");
}

*/

//  type 2...

// console.log("My name is");
// setTimeout(() => {
//   console.log("main duniya m akela hu...");
// }, 4000);
// console.log("Anthony gonsalves");

// set interval

// console.log("Apna hi saya dekh k tum");
// let id = setInterval(() => {
//   console.log("Abhi toh ye pehli manzil h... Tum toh abhi se gbraa gye....");
// }, 2000);
// console.log("oh jaane jaha sharma gye");
// clearInterval(id);

//  this with arrow functions...

const stud = {
  fullName: "nupur",
  marks: 95,
  prop: this,
  getName: function () {
    console.log(this); // yaha ka this is for the calling object.
    return this.fullName;
  },
  getMarks: () => {
    console.log(this); // yaha ka this mtlb parent's scope. and iska parent is object.
    return this.marks;
  },

  getinfo1: function () {
    setTimeout(() => {
      console.log(this); // student
    }, 1000);
  },

  getinfo2: function () {
    // calling object k this
    setTimeout(function () {
      console.log(this); // window
    }, 2000);
  },
}; // iss object k scope global hai.
console.log(stud);
console.log(stud.getName());
console.log(stud.getMarks());
