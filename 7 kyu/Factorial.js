// https://www.codewars.com/kata/57a049e253ba33ac5e000212/train/javascript

// Your task is to write function factorial.

const factorial = n => (n ? n * factorial(n - 1) : 1);

//-----------------------------------------------------------------------------------------------------------------
console.log(factorial(0)); //1
console.log(factorial(1)); //1
console.log(factorial(4)); //24
console.log(factorial(7)); //5040
console.log(factorial(17)); //355687428096000
