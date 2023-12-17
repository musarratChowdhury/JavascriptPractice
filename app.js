let x = 100;
let y = 101;
let z = 99;

if (x > y) {
  // x is greater than y
  if (x > z) {
    console.log("x is the greatest");
  } else {
    console.log("z is the greatest");
  }
} else {
  //y is greater than x
  if (y > z) {
    console.log("y is the greatest");
  } else {
    console.log("z is the greatest");
  }
}
