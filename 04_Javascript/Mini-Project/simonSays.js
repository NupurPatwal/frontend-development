let userSeq = [];
let gameSeq = [];

let started = false; // jb game start nahi hua.
let level = 0; // abhi hamara level h wo 0 hai.
let h2 = document.querySelector("h2");
let btns = ["plum", "yellow", "teal", "blue"]; // jo bhi buttons h unki value ko choose krne k liye its an array.

//  step 1:-
// jaise hi hamari keypress ho toh waise hi hamara ek callback invoke ho ko print krwaye the game is started.

// 2. jb tak hamare started ki value false h ussi case m game ko start krege.

document.addEventListener("keypress", () => {
  if (started == false) {
    console.log("the game is started");
    started = true;

    levelUp(); //game start ho chuka h tera role aa chuka hai.
  }
});

//  Step 2:
// 1.Sbse phle level ko ++ krna h mtlb badhana h.
// 2.button mo flash karwana hai. or level ki vakue update krni hai.

// 1. jaise hi level up hora h hum level ko bhada denge. ++ kr denge.
// 2. h2. innerText m level update krddenge.
// 3. phir ek random index choose krege. 1- 4 tak
// 4. random index se color choose krege btn ka.
// 5. uss color ki help se ek class banayege.
// 6. class ki help se wo btn hi choose kr lenge.
// 7. phir button flash se wo button flash krwa denge.

function levelUp(params) {
  userSeq = [];
  level++;
  h2.innerText = `Level : ${level}`;

  //   random button choose:
  let randomIdx = Math.floor(Math.random() * 4);
  let randomColor = btns[randomIdx];
  let randomBtn = document.querySelector(`.${randomColor}`);

  gameSeq.push(randomColor);
  console.log(gameSeq);

  buttonFlash(randomBtn);
}

// Step 3: button flash class.
function buttonFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 200);
}

// Step 4: Button was pressed. and flshed
// step 5: tackle the empty array
function btnPress() {
  // console.log("button was presed.");
  // console.log(this);
  let btn = this;
  userFlash(btn);
  // userFlash(this);

  //  step 6:-> user Sequence ko add krna hai.
  // ab gameSq k ander add ho gya btn ab userSq k ander bhi ho jana chaiye.
  // userColor = this.getAttribute("id");
  userColor = btn.getAttribute("id"); // jo bhi iski id h wo print ho jayegi.
  console.log(userColor);
  userSeq.push(userColor);
  checkAnswer(userSeq.length - 1);
}

//  step 6:-> user Sequence ko add krna hai.
// jb user btn ko press krega toh user sq. k ander bhi user k btn hona chaiye.
// 2. apne color se getAtt. kro id Att ki value.
// 3. phir print krwa denge user ne konsa color ka btn enter kiya.
// 4. hame sahi id mil rahi h mtlb correct color
// 5. toh ab user sq. k ander push krwa denge userId ko.
// ab check bhi krwana padega ko user ne jo sequence diya h kya wo sahi hai.
// 6. last sq. ki user ne jo color check kiya h kya wo game seq k saath match krta hai.

function checkAnswer(idx) {
  // console.log("current level ", level);
  // let idx = level - 1;
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
    // console.log("same value");
  } else {
    // console.log("game over");
    h2.innerHTML = `Game Over! Your score was <b> ${level}</b> \n Press any key to re-start.`;
    document.querySelector("body").style.backgroundColor = "red";
    setTimeout(() => {
      document.querySelector("body").style.backgroundColor =
        "rgba(194, 198, 202, 0.906)";
    }, 190);
    // console.log("game over!");
    reset();
  }
}

// user Flash:
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
