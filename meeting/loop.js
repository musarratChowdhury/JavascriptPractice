const arr = ["muhit", "sadit", "soheba", "sohely", "abdullah"];
//const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];

for (let i = 0; i < arr.length; i++) {
  if (arr[i][0] == "s" && arr[i][1] == "o") {
    console.log(arr[i]);
  }
}

//take 10 numbers and  print even and odd number

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 10];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    console.log(numbers[i]);
  }
}
