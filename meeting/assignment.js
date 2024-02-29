function monthlySavings(arr, livingCost) {
  if (Array.isArray(arr) == false || Number.isNaN(livingCost)) {
    return "Invalid input";
  }

  let totalIncome = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 3000) {
      totalIncome += arr[i] - arr[i] * 0.2;
    } else {
      totalIncome += arr[i];
    }
  }

  const savings = totalIncome - livingCost;

  if (savings >= 0) {
    return savings;
  } else {
    return "earn more";
  }
}

let myself = {
  name: "muhit",
  age: 34,
  birthday: "01/03/1997",
};

let check = myself.hasOwnProperty("birthday");
console.log(check);

if (
  obj.hasOwnProperty("siteName") == false ||
  obj.hasOwnProperty("birthYear") == false ||
  obj.hasOwnProperty("name") == false
) {
  return "invalid";
}

let myName = "musarrat";
