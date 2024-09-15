console.log("chailye shuru krte hai");
//  create object:
// let length = {
//   l: 20,
//   b: 30,

//   area: function () {
//     console.log("hello");
//   },
// };

// console.log(length.area());

// factory function:

function factoryFunction() {
  return (newRect = {
    l: 20,
    b: 30,

    area() {
      console.log("hello");
    },
  });
  //   return newRect;
}

// newRect.area();
// console.log(factoryFunction().area());

// let rectangleObj = factoryFunction();

// let a = 10;
// let b = a;
// a++;
// console.log(a);
// console.log(b);

// let c = {
//   value: 10,
// };
// let d = c;
// c.value++;
// console.log(c.value);
// console.log(d.value);

// for in loop:-
// let rectangle = {
//   length: 23,
//   breadth: 34,
// };

// for (const key in rectangle) {
//   console.log(key, rectangle[key]);
// }

// Object clone #1
// let src = {
//   a: 10,
//   b: 20,
//   c: 30,
// };

// let dest = {};
// for (const key in src) {
//   dest[key] = src[key];
// }
// console.log(dest);

// Object clone #2:

let src = {
  a: 10,
  b: 20,
  c: 30,
};

let des = Object.assign({}, src);
src.a++;
console.log(des);

// Object clone #3:

let src2 = {
  a: 23,
  b: 32,
  c: 43,
};
let des2 = { ...src2 };
console.log(des2);
