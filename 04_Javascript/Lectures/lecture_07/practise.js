let sq = (n) => n * n;
console.log(sq(90));

let id = setInterval(() => {
  console.log("Hello ji ! hello world");
}, 2000);

// clearInterval(id(5));
setTimeout(() => {
  clearInterval(id);
}, 10000);
