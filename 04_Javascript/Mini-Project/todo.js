let inp = document.querySelector("input");
let btn = document.querySelector("button");
let ul = document.querySelector("ul");

btn.addEventListener("click", () => {
  let item = document.createElement("li");
  item.innerText = inp.value;
  ul.appendChild(item);
  inp.value = "";

  let delButton = document.createElement("button");
  delButton.innerText = "delete";
  delButton.classList.add("deleteButton");

  item.appendChild(delButton);
});

ul.addEventListener("click", (event) => {
  if (event.target.nodeName == "BUTTON") {
    event.target.parentElement.remove();
    console.log("delete");
  }
});

// let deleteBtns = document.querySelectorAll(".deleteButton");
// for (let deleteBtn of deleteBtns) {
//   deleteBtn.addEventListener("click", () => {
//     // let deleteParent = this.parentElement;
//     let deleteParent = deleteBtn.parentElement;
//     console.log(deleteParent);
//     deleteParent.remove();

//     // deleteParent.remove();
//   });
// }
