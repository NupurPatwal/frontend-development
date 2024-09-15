let para = document.querySelector("p");
let inp = document.querySelector("#inp");
let btn = document.querySelector("button");

inp.addEventListener("input", function () {
  para.append(this.value);
  console.log(para);
  console.log(this.value);
});
