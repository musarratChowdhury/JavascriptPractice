function calculateArea() {
  const A = getInputValueById("calculationA");
  const B = getInputValueById("calculationB");
  const area = A + B;
  setInnerTextById("calculate-calculation", area);
}

// function getInputValueById(inputFieldId) {
//   const inputField = document.getElementById(inputFieldId);
//   const inputValueText = inputField.value;
//   const value = parseFloat(inputValueText);
//   return value;
// }

// function setInnerTextById(elementId, area) {
//   const element = document.getElementById(elementId);
//   element.innerText = area;
// }

// let clickButton = document.querySelectorAll("#subtract");
// clickButton.forEach((seat) => {
//   seat.addEventListener("click", function () {
//     console.log("Subtract button clicked");
//   });
// });
// let inputTextCatchInnar = inputTextCatch.innarText;

let displayBtn = document.getElementById("display");
let sevenBtn = document.getElementById("seven");
let clearBtn = document.getElementById("clear");
let subtractBtn = document.getElementById("subtract");
let eightBtn = document.getElementById("eight");
let nineBtn = document.getElementById("nine");
let fourBtn = document.getElementById("four");
let fiveBtn = document.getElementById("five");
let sixBtn = document.getElementById("six");
let oneBtn = document.getElementById("one");
let twoBtn = document.getElementById("two");
let threeBtn = document.getElementById("three");
let zeroBtn = document.getElementById("zero");
let equalsBtn = document.getElementById("equals");
let decimalBtn = document.getElementById("decimal");
let addBtn = document.getElementById("add");
let divideBtn = document.getElementById("divide");
// let multiplyyBtn = getElementById("multiplyy");

console.log(displayBtn);

//seven button

sevenBtn.addEventListener("click", () => {
  console.log(sevenBtn.innerText);
  displayBtn.innerText = sevenBtn.innerText;
});

// clear button
clearBtn.addEventListener("click", () => {
  console.log(clearBtn.innerText);
  displayBtn.innerText = clearBtn.innerText;
});

//subtract button

subtractBtn.addEventListener("click", () => {
  console.log(subtractBtn.innerText);
  displayBtn.innerText = subtractBtn.innerText;
});

// eight button

eightBtn.addEventListener("click", () => {
  console.log(eightBtn.innerText);
  displayBtn.innerText = eightBtn.innerText;
});

//nine button

nineBtn.addEventListener("click", () => {
  console.log(nineBtn.innerText);
  displayBtn.innerText = nineBtn.innerText;
});

// four button

fourBtn.addEventListener("click", () => {
  console.log(fourBtn.innerText);
  displayBtn.innerText = fourBtn.innerText;
});

// five button

fiveBtn.addEventListener("click", () => {
  console.log(fiveBtn.innerText);
  displayBtn.innerText = fiveBtn.innerText;
});

// six button

sixBtn.addEventListener("click", () => {
  console.log(sixBtn.innerText);
  displayBtn.innerText = sixBtn.innerText;
});

//one button

oneBtn.addEventListener("click", () => {
  console.log(oneBtn.innerText);
  displayBtn.innerText = oneBtn.innerText;
});

//two button

twoBtn.addEventListener("click", () => {
  console.log(twoBtn.innerText);
  displayBtn.innerText = twoBtn.innerText;
});

//three button

threeBtn.addEventListener("click", () => {
  console.log(threeBtn.innerText);
  displayBtn.innerText = threeBtn.innerText;
});

//zero button

zeroBtn.addEventListener("click", () => {
  console.log(zeroBtn.innerText);
  displayBtn.innerText = zeroBtn.innerText;
});

// decimal button

decimalBtn.addEventListener("click", () => {
  console.log(decimalBtn.innerText);
  displayBtn.innerText = decimalBtn.innerText;
});

// equals button

equalsBtn.addEventListener("click", () => {
  console.log(equalsBtn.innerText);
  displayBtn.innerText = equalsBtn.innerText;
});

// add button

addBtn.addEventListener("click", () => {
  console.log(addBtn.innerText);
  displayBtn.innerText = addBtn.innerText;
});

// // multiply button

//divide button

divideBtn.addEventListener("click", () => {
  console.log(divideBtn.innerText);
  displayBtn.innerText = divideBtn.innerText;
});

// add button

addBtn.addEventListener("click", () => {
  console.log(addBtn.innerText);
  displayBtn.innerText = addBtn.innerText;
});

//divide button

divideBtn.addEventListener("click", () => {
  console.log(divideBtn.innerText);
  displayBtn.innerText = divideBtn.innerText;
});

// // multiplyy button

// multiplyyBtn.addEventListener("click", () => {
//   console.log(multiplyyBtn.innerText);
//   displayBtn.innerText = multiplyyBtn.innerText;
// });
