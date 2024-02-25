let arr = [2, 4, 6, 8, 10, 12, 14, 16];
const testArr = [2, 2, 2, 2, 2, 3, 3, 4, 5, 6, 7, 7, 8, 8, 33, 33, 12];
const testArr2 = [];

const uniqs = [2, 3, 4, 5, 6, 7, 8, 33];

const printArrNumbers = (X) => {
  if (Array.isArray(X)) {
    // for (let i = 0; i < X.length; i++) {
    //   console.log(X[i]);
    // }

    X.forEach((element, i) => {
      if (i != 0) console.log(element, i);
    });
  } else {
    console.error("THIS IS NOT AN ARRAY");
  }
};

function AddOne(arr) {
  // arr.forEach((x, i) => {
  //   arr[i] = x + 1;
  // });
  // return arr;
  console.log("before", arr);

  return arr.map((x) => (x = x + 1));
}

function addM(arr) {
  //each element + "M"
}

function changeArr(arr) {
  arr.push("hello");
}

function changeValue(x) {
  x = 1000;
  return x;
}

const addTwoNumbers = (x, y) => {
  x = x + 1;
  return x + y;
};

const addTwoNumbers2 = (x, y) => x + y + 1;

function getUniqueNumbers(arr) {
  const uniqueArr = [];
  if (arr.length == 0) return uniqueArr;

  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }

  //

  return uniqueArr;
}

console.log(getUniqueNumbers(testArr));
