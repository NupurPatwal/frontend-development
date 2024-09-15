const movie = "ddlj";
let favMovie = prompt(`Enter your fav movie...`);
while (favMovie != movie && favMovie !== "quit") {
  //   console.log("worng guess");
  favMovie = prompt("Wrong guess! Enter the movie again...");
}
if (favMovie === movie) {
  console.log("you got this");
} else {
  console.log("quit");
}
