let button = document.querySelector("button");
let heading = document.querySelector("h1");
let div = document.querySelector("div");

const randomColor = () => {
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);

  return `rgb(${r},${g},${b})`;
};
button.addEventListener("click", () => {
  console.log((heading.innerText = `# ${randomColor()}`));
  //   heading.innerText = `# ${randomColor()}`;
  console.log("color updated");
  div.style.background = randomColor();
});
