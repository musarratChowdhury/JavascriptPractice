<<<<<<< HEAD
console.log("HELLO WORLD");
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
});
=======
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
>>>>>>> 687765db851a88fc889885409c64b8324dd7a661
