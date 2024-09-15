let button = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

button.addEventListener("click", () => {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delBtn = document.createElement("button");

  delBtn.innerText = "delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item);
  inp.value = "";
});
let li = document.querySelector("li");
// let deleteBtns = document.querySelectorAll(".delete");
for (let deleteBtn of li) {
  deleteBtn.addEventListener("click", () => {
    // deleteBtn.addEventListener("click", () => {
    let par = deleteBtn.parentElement;
    // let par = this.parentElement;
    console.log(par);
    par.remove();
    // console.log("element deleted");
  });
}

// let div = document.querySelector(".divClass");
// let div = document.querySelector("div");
// console.log(div.classList);
// // div.classList.add("class4");
// div.classList.add("class9");
