function calculatePercentageDifference(num1, num2) {
  if (num1 === num2) {
    return "Both numbers are equal";
  }

  const largerNumber = Math.max(num1, num2);
  const smallerNumber = Math.min(num1, num2);

  const difference = largerNumber - smallerNumber;
  const percentageDifference = (difference / smallerNumber) * 100;

  return `${largerNumber} is ${percentageDifference.toFixed(
    2
  )}% larger than ${smallerNumber}`;
}

// Usage example:
const number1 = 11;
const number2 = 10;

const result = calculatePercentageDifference(number1, number2);
console.log(result); // Output: "20 is 100.00% larger than 10"
