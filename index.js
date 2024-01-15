// Q1. Check if a number is odd or even in JavaScript
// Function `isEvenOrOdd()` checks if input number
// is even or odd by using “%” operator in JavaScript.
// 1. Print “Number is even” if the number is divisible
//    by 2.
// 2. Else print “Number is odd” if the number returns
//    a remainder when divided by 2.

// Solution >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function isEvenOrOdd(num) {
//     if (num % 2 == 0) {
//         console.log("Number is even");
//     } else {
//         console.log("Number is odd");
//     }
// }
// isEvenOrOdd(+prompt("Enter a number : "));
// ----------------------------------------------------------------------

// Q2. Find the largest of two number
// Function `findLargest()` finds the largest between two number
// by using “>” and “=” operator in JavaScript.
// 1. Print num1 is the largest if num1>num2.
// 2. Print num2 is the largest if num1<num2.
// 3. Else print num1 and num2 are equal when num1==num2.

// solution >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function findLargest(num1, num2) {
//     if (num1 > num2) {
//         console.log(`${num1} is the largest`);
//     } else if (num1 < num2) {
//         console.log(`${num2} is the largest`);
//     } else {
//         console.log(`${num1} and ${num2} are equal`);
//     }
// }
// findLargest(+prompt("Enter num1 : "), +prompt("Enter num2 : "));
// -------------------------------------------------------------------------------

// Q3. Find the largest of three number.
// Function `findLargest()` finds the largest of three number
// by using “>” and “&&” operator in JavaScript.
// 1. Print num1 is the largest if num1>num2 and num1>num3.
// 2. Print num2 is the largest if num2<num3.
// 3. Else print num3.

// Solution >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function findLargest(num1, num2, num3) {
//     if (num1 > num2 && num1 > num3) {
//         console.log(`${num1} is the largest`);
//     } else if (num2 > num1 && num2 > num3) {
//         console.log(`${num2} is the largest`);
//     } else {
//         console.log(`${num3} is the largest`);
//     }
// }
// findLargest(+prompt("Enter num1 : "), +prompt("Enter num2 : "), +prompt("Enter num3 : "));
// --------------------------------------------------------------------------------------------------

// Q4. Perform arithmetic operations on two numbers
// Function `evalNumbers()` prints the result after evaluating
// arithmetic operations between two numbers of addition,
// multiplication, division, and modulus in JavaScript.
// 1. Print result of num1+num2 if operation is “add”
// 2. Print result of num1-num2 if operation is “subtract”
// 3. Print result of num1*num2 if operation is “multiply”
// 4. Print result of num1/num2 if operation is “divide”
// 5. Print result of num1%num2 if operation is “modulus”
// 6. Else print “Invalid operation”

// Solution >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function evalNumbers(num1, num2, operator) {
//   switch (operator) {
//     case "add":
//       console.log(num1 + num2);
//       break;
//     case "subtract":
//       console.log(num1 - num2);
//       break;
//     case "multiply":
//       console.log(num1 * num2);
//       break;
//     case "divide":
//       console.log(num1 / num2);
//       break;
//     case "modulus":
//       console.log(num1 % num2);
//       break;
//     default :
//     console.log("Invalid operator");
//   }
// }
// evalNumbers(
//   +prompt("Enter num1 : "),
//   +prompt("Enter num2 : "),
//   prompt("Enter operator : ")
// );
// --------------------------------------------------------------------

// Q5.Find check if a year is leap year or not
// Function `checkLeapYear()` find if the given year is a leap year
// or not by using %, !=, && and || operators in JavaScript.
// 1. If year is divisble by 4 and not divisble by 100 then
// print “leap year”. 2. Or if year is divisible by 400 then
// print “leap year”. 3. Else print “not a leap year”.


// Solution >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// function checkLeapYear(year) {
//     if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
//         console.log(`${year} is a leap year`);
//     } else {
//         console.log(`${year} is not a leap year`);
//     }
// }
// checkLeapYear(+prompt("Enter a year : "));
