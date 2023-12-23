// Simple Calculator Function:
// Create a function that takes two numbers and an operator (+, -, *, /) as parameters and returns the result of applying the operator on the two numbers.

// Temperature Converter Function:
// Write a function that converts Celsius to Fahrenheit or Fahrenheit to Celsius based on user input and returns the converted temperature.
function TemperatureConverter(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}
const result1 = TemperatureConverter(100);
console.log(result1);

// Greeting Function:
// Develop a function that takes a name as an argument and returns a personalized greeting message.

function message(name) {
  return name + " " + "congratulations!";
}
const userName = "Muhit";
const greetingMessage = message(userName);
console.log(greetingMessage);

// Even or Odd Checker:
// Build a function that takes an integer as input and returns whether the number is even or odd.
function checkEvenOrOdd(number) {
  if (number % 2 == 0) {
    return "even";
  } else {
    return "odd";
  }
}
const TakeANumber = 13;
const result = checkEvenOrOdd(TakeANumber);
console.log(result);

// Largest among Three Numbers:
// Create a function that takes three numbers as arguments and returns the largest among them.

// 100,101,102 ; 102>101>100
function TakeThreeNumbers(number1, number2, number3) {
  if (number2 > number1) {
    if (number2 > number3) {
      console.log("number 2 is the largest");
    } else {
      console.log("number 3 is largest");
    }
  } else {
    console.log("number 1 > number 2");
    if (number1 > number3) {
      console.log("number 1 is the largest");
    } else {
      console.log("number 3 is the largest");
    }
  }
}
const number1 = 100;
const number2 = 1001;
const number3 = 12033;

// String Reversal Function:
// Write a function that takes a string as input and returns the reverse of that string.

// Character Counter:
// Develop a function that takes a string as an argument and returns the count of characters in that string.

// Factorial Calculator:
// Create a function that calculates the factorial of a given number.

// Palindrome Checker:
// Write a function that checks if a given word is a palindrome (reads the same backward as forward) and returns true or false accordingly.

// Leap Year Checker:
// Develop a function that determines whether a given year is a leap year or not.
function LeapYearChecker(year) {
  if (year % 400 == 0) {
    console.log(" This year is not leap year");
  } else if (year % 100 == 0) {
    console.log("This year is not leap year");
  } else if (year % 4 == 0) {
    console.log("This year is leap year");
  } else {
    console.log("This year is not leap year");
  }
}
LeapYearChecker(2022);
LeapYearChecker(2020);
LeapYearChecker(1999);
LeapYearChecker(1997);
