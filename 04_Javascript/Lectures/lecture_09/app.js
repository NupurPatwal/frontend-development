// let mainImg = document.getElementById("mainImg");
// console.log(mainImg); // it will return image k object.
// console.dir(mainImg);/

// let oldImg = document.getElementsByClassName("oldImg")[1];
// let oldImg2 = document.getElementsByClassName("oldImg")[2];
// console.log(oldImg);
// console.log(oldImg2);
// console.dir(oldImg2);

// let allPara = document.getElementsByTagName("p");
// console.log(allPara);
// let allPara = document.querySelectorAll("p");
// console.log(allPara);
// let allId = document.querySelectorAll("#id");
// console.log(allId);
// let allClass = document.querySelectorAll(".boxLink");
// console.log(allClass);

// let allImg = document.getElementsByClassName("oldImg");

// for (let i = 0; i < allImg.length; i++) {
//   console.log(`This is image ${i} = ${allImg[i]}`);
//   console.log(allImg[i]);
//   console.dir(allImg[i]);
//   //   console.log(allImg[i].src);
// }

// for (let i = 0; i < allImg.length; i++) {
//   allImg[i].src = "assets/spiderman_img.png";
//   console.log(`value of image # ${i} is changed`);
// }

// let img = document.getElementById("mainImg");
// let imageTag = document.querySelector("img");
// console.log(imageTag);
// console.log(imageTag.getAttribute("id"));

// const person = {
//   name: "John",
//   age: 30,
//   address: {
//     city: "New York",
//     country: "USA",
//   },
// };

// console.log(person); // Outputs: { name: 'John', age: 30, address: { city: 'New York', country: 'USA' } }
// console.dir(person); // Outputs an interactive list of properties that can be expanded

// let links = document.querySelectorAll(".box a");

//  through for loop:-

// for (let i = 0; i < links.length; i++) {
//   links[i].style.color = "yellow";
//   links[i].style.backgroundColor = "brown";
// }

// for of loop:

// for (let link of links) {
//   link.style.color = "red";
// }

// for in loop not working:

// for (let link in links) {
//   link.style.color = "red";
// }

// for in loop:

// for (let index in links) {
//   if (links.hasOwnProperty(index)) {
//     links[index].style.color = "red";
//   }
// }

// for each loop:

// links.forEach((element) => {
//   element.style.color = "red";
// });

// let box = document.querySelector(".box a");
// console.log(box.classList);

// let heading = document.querySelector("h1");
// console.log(heading.classList);
// heading.classList.add("green");
// console.log(listsOfClass);
// heading.classList.add("dec");
// heading.classList.remove("green");
// console.log(heading.classList.contains("green"));
// heading.classList.add("green");

let boxColor = document.querySelector(".box");
boxColor.classList.add("yellobg");
// console.log(boxColor.classList);
console.log(boxColor.children);

let ulList = document.querySelector("ul");
console.log(ulList);
console.log(ulList.children);
console.log(ulList.childElementCount);
console.log(ulList.parentNode);
console.log(ulList.parentElement);
console.log(ulList.children[1].nextElementSibling);
console.log(ulList.previousElementSibling);
console.log(ulList.nextSibling);

let image = document.querySelector("img");
let newImg = image.previousElementSibling;
console.log(newImg);
newImg.innerHTML = `peter`;
newImg.style.color = "magenta";

let newPara = document.createElement("p");
let body = document.querySelector("body");
newPara.innerHTML = `<p> My name is nupur patwal</p>`;

body.append(newPara);

//  creating a button:
let btn = document.createElement("button");
btn.innerText = "Click me!";
// boxColor.appendChild(btn);
boxColor.append(btn);
btn.append("jaldi kro kl subh panwel niklnah");

btn.remove();
// newPara.remove();
let p = document.querySelector("h2");
p.remove();
