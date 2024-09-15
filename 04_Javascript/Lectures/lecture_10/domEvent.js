// let btn = document.querySelector("button");
// console.log(btn);
// console.dir(btn);

//  type 1:
// btn.onclick = function () {
//   console.log("Button was clicked.");
//   alert("Its clicked!");
// };

// // alter 2:
// function sayHello() {
//   console.log("Hello! Everyone.");
//   alert("clicked");
// }

//  When we wanna choose different elements:
// let buttons = document.querySelectorAll("button");
//  appplying the for oof loop:
// for (const btn of buttons) {
//   console.log(btn);
//   btn.onmouseleave = sayHello;
//   btn.onmouseout = sayHello;
//   btn.onmouseover = sayHello;
//   btn.onmouseup = sayHello;
//   btn.onmousemove = sayHello;
//   btn.onmousedown = sayHello;
//   btn.onmouseenter = sayHello;

//   btn.onclick = sayHello;
//   btn.onmouseenter = function () {
//     console.log("You are in the element.");
//   };
// }

// btn.onclick = sayHello;

// let btn = document.querySelectorAll("button");
// btn.addEventListener("click", function () {
//   console.log("Button clicked.");
// });

//  for single button:
// let btn = document.querySelector("button");
// btn.addEventListener("click", function () {
//   console.log("button clicked");
// });

// for multiple button:

// let btns = document.querySelectorAll("button");
// for (const btn of btns) {
//   btn.addEventListener("click", function () {
//     console.log("button clicked");
//   });
// }

// function sayHello() {
//   console.log("Hello Ji !");
// }
// function sayName() {
//   console.log("sayname is running");
// }

// for (let btn of btns) {
//   //   btn.addEventListener("click", sayHello);
//   //   btn.addEventListener("click", sayName);
//   btn.addEventListener("dblclick", () => {
//     console.log("You double clicked me");
//   });
// }

// let para = document.querySelector("p");
// para.addEventListener("click", () => {
//   console.log("The mouse is on paragraph.");
// });

// let btn = document.querySelector("button");
// btn.addEventListener("click", function (event) {
//   console.log(this.innerText);
//   console.log(event);

//   this.style.backgroundColor = "plum";
// });
// btn.addEventListener("dblclick", function (event) {
//   console.log(this.innerText);
//   console.log(event);

//   this.style.backgroundColor = "plum";
// });
// btn.addEventListener("click", () => {
//   console.log(this);
// });

// let input = document.querySelector("input");
// let heading = document.querySelector("h1");
// let h2 = document.querySelector("h2");
// let h3 = document.querySelector("h3");
// let h4 = document.querySelector("h4");
// let h5 = document.querySelector("h5");
// let h6 = document.querySelector("h6");
// let p = document.querySelector("p");
// let btn = document.querySelector("button");

// This is a lengthy code.

// let randomColor = () => {
//   let red = Math.floor(Math.random() * 256);
//   let green = Math.floor(Math.random() * 256);
//   let blue = Math.floor(Math.random() * 256);
//   // return `rgb${(red, green, blue)}`;
//   return `rgb(${red}, ${green}, ${blue})`;
// };

// let changeColor = function () {
//   console.dir(this.innerText);
//   // console.log(this.innerText);
//   this.style.background = randomColor();
// };

// btn.addEventListener("click", changeColor);

// heading.addEventListener("click", changeColor);
// h2.addEventListener("click", changeColor);
// h3.addEventListener("click", changeColor);
// h4.addEventListener("click", changeColor);
// h5.addEventListener("click", changeColor);
// h6.addEventListener("click", changeColor);

// heading.addEventListener("click", function () {
//   console.dir(this.innerText);
//   // console.log(this.innerText);
//   this.style.background = "yellow";
// });

// p.addEventListener("click", changeColor);
// p.addEventListener("click", function () {
//   console.dir(this.innerText);
//   // console.log(this.innerText);
//   this.style.background = "grey";
// });

// input.addEventListener("click", changeColor);
// input.addEventListener("click", function () {
//   console.dir(this.innerText);
//   // console.log(this.innerText);
//   this.style.background = "pink";
// });

//Keyboard events:->

let btn = document.querySelector("button");
let input = document.querySelector("input");
// btn.addEventListener("click", (event) => {
//   console.log(event);

//   console.log("Button Clicked ");
// });
btn.addEventListener("dblclick", (event) => {
  console.log(event);

  console.log("Button Clicked ");
});

// for keydown:

// input.addEventListener("keydown", (e) => {
//   console.log("key = ", e.key);
//   console.log("code = ", e.code);
//   console.log("key was pressed.");
// });

// for keyup:
// input.addEventListener("keyup", () => {
//   console.log("key was pressed.");
// });

// input.addEventListener("keypress", (e) => {
//   console.log(e);

//   console.log("key was pressed.");
// });

// for key:
input.addEventListener("keydown", (event) => {
  console.log("code = ", event.code);
  if (event.code == "KeyU") {
    console.log("'move upward.");
  } else if (event.code == "KeyD") {
    console.log("'move down.");
  } else if (event.code == "KeyL") {
    console.log("'move left");
  } else if (event.code == "KeyR") {
    console.log("'move Right.");
  }
});
