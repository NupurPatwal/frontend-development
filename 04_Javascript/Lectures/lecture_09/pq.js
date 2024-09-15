// document.createElement("p");
// let para = document.querySelector("p");
let para = document.createElement("p");
para.innerText = "Hello I am red";
para.style.color = "red";
document.body.appendChild(para);

//  h3 element:
let h3Element = document.createElement("h3");
h3Element.innerText = `Hi! I'm blue H3`;
h3Element.style.color = "blue";
document.body.appendChild(h3Element);

//  div:
let divCreate = document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText = "I'm in a div.";
para2.innerText = "Me Too!";

divCreate.append(h1);
divCreate.append(para2);

divCreate.style.borderBlockColor = "black";
divCreate.style.backgroundColor = "plum";

// divCreate.insertAdjacentElement("beforebegin", h1);
document.body.appendChild(divCreate);
