/*Multiple Conditions:
Write a program to check if a number is divisible by 3, 5, or both and print the appropriate message.*/
let num = 67;
if (num % 3 == 0 || num % 5 == 0) {
  console.log(`The num is either divisible by 3 or 5 or both.`);
} else {
  console.log(`Better luck next time.`);
}
