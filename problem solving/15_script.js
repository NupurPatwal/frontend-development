/*Switch with Default:
Write a program to handle multiple cases for a given fruit name and print the corresponding color. If the fruit is not listed, print "Unknown fruit." */
let fruitColor = `blue`;
switch (fruitColor) {
  case `red`:
    console.log(`apple`);
    break;
  case `blue`:
    console.log(`jamun`);
    break;
  case `yellow`:
    console.log(`mango`);
    break;
  case `orange`:
    console.log(`orange`);
    break;

  default:
    console.log(`Unknown fruit`);
    break;
}
