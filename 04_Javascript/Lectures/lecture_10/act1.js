//  calling all the html tags as objects:
let heading = document.querySelector("h1");
let button = document.querySelector("button");
let div = document.querySelector("div");

let randomcolor = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green},${blue})`;
};

button.addEventListener("click", () => {
  let randomColors = randomcolor();
  console.log((heading.innerText = randomColors));
  console.log("color updated");
  div.style.backgroundColor = randomColors;

  //   console.log(randomcolor());
});
