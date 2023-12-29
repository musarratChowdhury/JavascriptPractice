$(".play-btn").on("click", function () {
  easingDemo.play();
});
$(".pause-btn").on("click", function () {
  easingDemo.pause();
});
$(".restart-btn").on("click", function () {
  easingDemo.restart();
});

Opentip.styles.myErrorStyle = {
  extends: "standard",
  color: "black",
  background: [
    [0, "rgba(30, 30, 30, 0.7)"],
    [0.5, "rgba(30, 30, 30, 0.8)"],
    [0.5, "rgba(10, 10, 10, 0.8)"],
    [1, "rgba(10, 10, 10, 0.9)"],
  ],
};
Opentip.defaultStyle = "myErrorStyle";
let tip;
const renderTooltips = (triggerElementId, targetElementId) => {
  tip = new Opentip(`#${triggerElementId}`, $(`#${targetElementId}`).html(), {
    delay: 0,
    style: "myErrorStyle",
  });
};
renderTooltips("my-trigger-element", "target-element");
anime({
  targets: ".animate",
  translateX: 250,
});
anime({
  targets: ".loop-alternate-infinity",
  translateX: 400,
  direction: "alternate",
  loop: true,
  easing: "easeInOutSine",
  autoplay: false,
});

var myobject = {
  prop1: 0,
  prop2: "0%",
};

var objRender = anime({
  targets: myobject,
  autoplay: false,
  prop1: 10,
  prop2: "100%",
  easing: "linear",
  round: 1,
  update: function () {
    console.log(myobject.prop1, myobject.prop2);
  },
});
console.log(objRender);

var easingDemo = anime({
  targets: ".easing-demo",
  translateX: 250,
  loop: true,
  duration: 1000,
  easing: "easeOutElastic",
});

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

function AddTwoNumbers(num1, num2 = 10) {
  if (typeof num1 == "string" || typeof num2 == "string") {
    console.log("Input is not a number");
    return;
  }
  console.log(num1 + num2);
}

function DeductFrom100(num) {
  if (num > 100) {
    return num - 100;
  }
  return 100 - num;
}
AddTwoNumbers(11);

function avgOf10Numbers(
  num1,
  num2,
  num3,
  num4,
  num5,
  num6,
  num7,
  num8,
  num9,
  num10
) {
  let sum =
    num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10;
  let avg = sum / 10;
  return avg;
}

function avgFromArr(inputArr) {
  if (inputArr.length == undefined) {
    console.log("Not an array");
  } else {
    return inputArr.length;
  }
}
