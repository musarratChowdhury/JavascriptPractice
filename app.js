// console.log("HELLO WORLD");
// Opentip.styles.myErrorStyle = {
//   extends: "standard",
//   color: "black",
//   background: [
//     [0, "rgba(30, 30, 30, 0.7)"],
//     [0.5, "rgba(30, 30, 30, 0.8)"],
//     [0.5, "rgba(10, 10, 10, 0.8)"],
//     [1, "rgba(10, 10, 10, 0.9)"],
//   ],
// };
// Opentip.defaultStyle = "myErrorStyle";
// let tip;
// const renderTooltips = (triggerElementId, targetElementId) => {
//   tip = new Opentip(`#${triggerElementId}`, $(`#${targetElementId}`).html(), {
//     delay: 0,
//     style: "myErrorStyle",
//   });
// };
// renderTooltips("my-trigger-element", "target-element");
// anime({
//   targets: ".animate",
//   translateX: 250,
// });
// var animation = anime({
//   targets: ".loop-alternate-infinity",
//   translateX: 400,
//   direction: "alternate",
//   loop: true,
//   easing: "easeInOutSine",
// });

///call
// printAvgOf3numbers(3, 5, 7);
// 'A', 'B'
let avg = printAvgOf3numbers(3, 5, 7);
let average = avgOf3numbers(4, 5, 6);
let outputString = addThreeStrings("Abcc", "Bdddd", "ddddd");

console.log(avg);
console.log(average * 3);
//
calculateCombinedLengthOfThreeStrings("muhit", "soheba", "sadit");
// console.log(outputString);

///declaration
function printAvgOf3numbers(num1, num2, num3) {
  let avg = (num1 + num2 + num3) / 3;

  console.log(avg);
}

function avgOf3numbers(num1, num2, num3) {
  let avg = (num1 + num2 + num3) / 3;

  return avg;
}
// "muhit" "soheba" "sadit";
//
function calculateCombinedLengthOfThreeStrings(string1, string2, string3) {
  //let x  = 10
  let combinedString = addThreeStrings(string1, string2, string3); // "muhitsohebasadit"
  //

  let outputLength = getStringLength(combinedString);
  //outputlentgh = 14

  console.log("Length: ", outputLength);
}

function addThreeStrings(string1, string2, string3) {
  return string1 + string2 + string3;
}

function getStringLength(string) {
  return string.length;
}
