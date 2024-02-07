let arr = [2, 4, 6, 8, 10, 12, 14, 16];
const testArr = [2, 2, 2, 2, 2, 3, 3, 4, 5, 6, 7, 7, 8, 8, 33, 33, 12];
const testArr2 = [];

const uniqs = [2, 3, 4, 5, 6, 7, 8, 33];

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
