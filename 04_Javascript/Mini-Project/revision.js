let a = 3;
setTimeout(() => {
  console.log("set time out running");
}, 4000);
console.log("writing this.");

let si = setInterval(() => {
  console.log("this is set interval");
}, 1000);
clearInterval(si);
