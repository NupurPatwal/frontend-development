let input = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

// adding event listner onbtn:
btn.addEventListener("click", () => {
  let item = document.createElement("li");
  item.innerText = input.value;
  ul.appendChild(item);
  input.value = "";
  //   console.log("button clicked.");

  let delbtns = document.createElement("button");
  delbtns.innerText = "delete";
  delbtns.classList.add(".delbtn");
  item.appendChild(delbtns);
});

ul.addEventListener("click", (event) => {
  //   ul.remove();
  if (event.target.nodeName == "BUTTON") {
    event.target.parentElement.remove();
    console.log("delete");
  }
});

//  par ye haramara koi kaam ka nahi hai kuki isme cheeze auto h:-

// let delButtons = document.querySelectorAll(".delbtn");
// for (let delbtn of delButtons) {
//   delbtn.addEventListener("click", () => {
//     let delbtnParent = delbtn.parentElement;
//     delbtnParent.remove();
//   });
// }
