// let a = 34;
console.log("hello!1");
console.log("hello!2");
try {
  console.log(a);
} catch (e) {
  console.log("variable a is not defined");
  //   console.log(e);
}
console.log("hello!3");

// Arrow function:
const sum = (a, b) => {
  console.log(a + b);
};

sum(2, 9);
//  af2:
const cube = (n) => console.log(n * n * n);

cube(5);

// arrow 4:
const pow = (a, b) => {
  return Math.pow(a, b);
};
console.log(pow(10, 2));

//  implicit af:

let square = (n) => n * n;
console.log(square(8));
