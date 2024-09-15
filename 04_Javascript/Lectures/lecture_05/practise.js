// let random = Math.floor(Math.random() * 1000 + 1);

// console.log(random);

// let random = Math.floor(Math.random() * 5) + 11;
// console.log(random);

// let num = prompt("Enter the num?");
// let guessedNUm = 7;
// if (guessedNUm > num) {
//   prompt("Guess something smalller.");
// } else if (guessedNUm < num) {
//   prompt("Guess something larger.");
// } else {
//   console.log("You guessed it right.");
// }

const max = prompt("Enter the number.");

const random = Math.floor(Math.random() * max) + 1;
// console.log(random);

let guess = prompt("Enter the num.");
while (true) {
  if (guess == "quit") {
    console.log("User quits");
    break;
  }
  if (guess == random) {
    console.log("Congrats! It's right.", random);
    break;
  } else if (guess < random) {
    guess = prompt("Your guess was too small.");
  } else {
    guess = prompt("Your guess was large.");
  }
}
