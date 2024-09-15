// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", () => {
//   console.log("div was clicked");
// });

// ul.addEventListener("click", (event) => {
//   event.stopPropagation();
//   console.log("ul was clicked");
// });

// for (const li of lis) {
//   li.addEventListener("click", (event) => {
//     event.stopPropagation();
//     console.log("li was clicked");
//   });
// }

let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll("li");

// event listner for div:
div.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Div was clicked.");
});

// eventListner for li:

for (let li of lis) {
  li.addEventListener("click", (e) => {
    e.stopPropagation();
    console.log("li was clicked");
  });
}

// eventListners for ul tag:-

ul.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("ul was clicked.");
});
