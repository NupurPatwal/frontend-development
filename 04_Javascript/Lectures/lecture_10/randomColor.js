let btn = document.querySelector("button");
let div = document.querySelector("div");

btn.addEventListener("click", function () {
  let heading = document.querySelector("h1");
  //   console.log("Button was clicked.");
  let randomColor = rcGenerator();
  //   console.log(rcGenerator());
  console.log(randomColor);
  heading.innerText = randomColor;
  div.style.background = randomColor;
});

//  random color generateor:

function rcGenerator() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return `rgb(${red},${green},${blue})`;
}
