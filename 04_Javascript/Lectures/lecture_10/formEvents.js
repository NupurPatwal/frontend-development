let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log("form Submitted");
  //   alert("form submitted");
  console.log(form);
  //   let user = this.elements[0];
  //   let pass = this.elements[1];

  //   //   let user = document.querySelector("#user");
  //   //   let pass = document.querySelector("#pass");
  //   console.log(user.value);
  //   console.log(pass.value);
});

//  input event:
let user = document.querySelector("#user");

user.addEventListener("input", function (event) {
  event.preventDefault();
  console.log("input changed");
  console.log("final value:= ", user.value);
});
