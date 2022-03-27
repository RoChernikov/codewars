// https://www.codewars.com/kata/58a8807c5336a3f613000157/train/javascript

// #Task: Write a function that gets a square of a number without the following:
// Your code musn't contain any *s and you cannot use the pow function. Edit: You also cannot use __mul__ / imul function
// You cannot import any external libraries (unless you are satisfied with random being pre-imported).
// Only one function can be defined.
// The code has a length limit:
// if Python: Your code must be under or equal to 50 characters (and you already have to use 6 for the function name).
// if JavaScript: The length of function's body (without name of function) should be 25 or less characters long.
// Loophole solutions will not be accepted.
// If I use test.expect in my restriction tests, that is okay. This is not an issue.
// Input will always be positive or 0

const square = n => n / (1 / n);

//-----------------------------------------------------------------------------------------------------------------
console.log(square(2)); //4
console.log(square(3)); //9
console.log(square(4)); //16
console.log(square(0)); //0
