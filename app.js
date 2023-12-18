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
var animation = anime({
  targets: ".loop-alternate-infinity",
  translateX: 400,
  direction: "alternate",
  loop: true,
  easing: "easeInOutSine",
});
