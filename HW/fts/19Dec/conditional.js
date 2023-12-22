//Write a program to print if a given year is a leap year or not.
let testYear = 2024;


    
    if ((testYear % 4 === 0 && testYear % 100 !== 0) || (testYear % 400 === 0)) {
        console.log("Leap Year");
    } else {
        console.log("Not a Leap Year");
    }

 



//Grade Calculation: Write a program that takes a student's marks as input and
//determines their grade based on certain criteria (e.g., A, B, C, D, or F).
// Mark >= 80 => A
// Mark < 80 && mark >= 70 => B
// Mark < 70 && mark >= 60 => C
// Mark < 60 && mark >= 50 => D
// Mark < 50 && mark >= 40 => E
// Mark < 40 => F

let studentMark = 59;

if (studentMark>= 80)
console.log(" A");
else if (studentMark< 80 && studentMark>= 70)
console.log(" B");
else if (studentMark< 70 && studentMark>= 60)
console.log(" C");
else if (studentMark< 60 && studentMark>= 50)
console.log(" D");
else if (studentMark< 50 && studentMark>= 40)
console.log(" E");
else if (studentMark< 40 )
console.log(" F");

//Vowel or Consonant: Write a program that checks if an input character is a vowel or a consonant.

let ch = 'a';
if (ch == 'a' || ch == 'A' ||ch == 'E' ||  ch == 'e' ||ch == 'I' || ch == 'i' ||ch == 'O' ||  ch == 'o' || ch == 'U' || ch == 'u') 
     console.log("Given character is a Vowel"); 
   else{ console.log("Given character is a Consonent");
}

//check if a Quadrilateral is square or rectangle or others not by given values of its 4 arms
let A = 12;
let B = 13;
let C = 13;
let D = 12;

//check if a triangle is equal, bilateral, or unequal

let X = 10;
let Y = 10;
let Z = 10;

if (X == Y && X == Z) {
    console.log("equal triangle");
  } else if (X == Y || X==Z || Y==Z) {
    console.log("BILATERAL ");
  } else {
    console.log("unequal");
  }