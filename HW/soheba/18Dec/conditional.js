//Write a program to print if a given year is a leap year or not.
let testYear = 2019;

if (testYear%400==0){
    console.log(" This year is not leap year");
}else if(testYear % 100 == 0) {
    console.log("This year is not leap year");
}else if (testYear %4 == 0) {
    console.log("This year is leap year");
}else{
    console.log("This year is not leap year");
}



//Grade Calculation: Write a program that takes a student's marks as input and
//determines their grade based on certain criteria (e.g., A, B, C, D, or F).
// Mark >= 80 => A
// Mark < 80 && mark >= 70 => B
// Mark < 70 && mark >= 60 => C
// Mark < 60 && mark >= 50 => D
// Mark < 50 => F
 
let studentMark = 59;

if(studentMark >= 80 ){
    console.log("The grade is A");
}else if( studentMark < 80 && studentMark >= 70){
    console.log("The grade is B");
}else if( studentMark < 70 && studentMark >= 60){
    console.log("The grade is C");
}else if( studentMark <  60 && studentMark >= 50){
    console.log("The grade is D");
}else{
    console.log("FAIL");
}


//Vowel or Consonant: Write a program that checks if an input character is a vowel or a consonant.

let inputCharacter = "a";

if(inputCharacter=="a"){
    console.log("a is a vowel");
}else if (inputCharacter=="e"){
    console.log("e is a vowel");
}else if (inputCharacter=="i"){
    console.log("i is a vowel");
}else if (inputCharacter=="o"){
    console.log("o is a vowel");
}else if (inputCharacter=="u"){
    console.log("u is a vowel");
}else {
    console.log("this word is not a vowel");
}
