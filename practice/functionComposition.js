const f = (x) => x * 199;
const g = (x) => x + 100;
const i = (x) => x + 100;
const h = (x) => x + 100;

const arrOfFunctions = [f, g, h, i];
const functions = [(x) => x + 1, (x) => 2 * x];

var compose = (functions) => {
  return function (x) {
    while (functions.length > 0) {
      let lastFn = functions.pop();
      x = lastFn(x);
    }
    return x;
  };
};

var once = function (fn) {
  let counter = 0;
  return function (...args) {
    counter++;
    if (counter < 2) return fn(...args);
    else return;
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);

const argumentsLength = (...args) => {
  console.log(args.length);
};

console.log(onceFn(1, 2, 3));
console.log(onceFn(1, 2, 3));
// const fn = compose(functions);
