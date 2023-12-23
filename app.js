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
