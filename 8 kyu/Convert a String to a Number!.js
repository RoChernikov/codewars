// https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript

// Note: This kata is inspired by Convert a Number to a String!. Try that one too.

// Description

// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

const stringToNumber = str => +str;

//-----------------------------------------------------------------------------------------------------------------
console.log(stringToNumber('1234')); //1234
console.log(stringToNumber('605')); //605
console.log(stringToNumber('1405')); //1405
console.log(stringToNumber('-7')); //-7
