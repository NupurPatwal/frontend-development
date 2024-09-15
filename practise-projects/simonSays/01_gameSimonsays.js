let userSeq = [];
let gameSeq = [];

let started = false;
let level = 0;
let h2 = document.querySelector("h2");
let btns = ["plum", "yellow", "teal", "blue", "coral", "salmon"];

document.addEventListener("keypress", () => {
  if (started == false) {
    console.log("the game is started");
    started = true;

    levelUp(); //game start ho chuka h tera role aa chuka hai.
  }
});

function levelUp(params) {
  userSeq = [];
  level++;
  h2.innerText = `Level : ${level}`;

  //   random button choose:
  let randomIdx = Math.floor(Math.random() * 6);
  let randomColor = btns[randomIdx];
  let randomBtn = document.querySelector(`.${randomColor}`);

  gameSeq.push(randomColor);
  console.log(gameSeq);

  buttonFlash(randomBtn);
}

function buttonFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 200);
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  console.log(userColor);
  userSeq.push(userColor);
  checkAnswer(userSeq.length - 1);
}

function checkAnswer(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b> ${level}</b> \n Press any key to re-start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor =
        "rgba(194, 198, 202, 0.906)";
    }, 190);
    reset();
  }
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 200);
}

let allBtns = document.querySelectorAll(".btn");

for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
