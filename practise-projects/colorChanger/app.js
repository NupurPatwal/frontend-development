//  selecting all buttons:
let allBtns = document.querySelectorAll(".button");
let body = document.querySelector("body");

allBtns.forEach((btn) => {
  console.log(btn);
  btn.addEventListener("click", () => {
    if (btn.id == "grey") {
      body.style.backgroundColor = btn.id;
    }
    if (btn.id == "white") {
      body.style.backgroundColor = btn.id;
    }
    if (btn.id == "blue") {
      body.style.backgroundColor = btn.id;
    }
    if (btn.id == "yellow") {
      body.style.backgroundColor = btn.id;
    }
  });
});
