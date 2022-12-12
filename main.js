/*
  Write a function to add two values together.
  This function needs to define two parameters - the two numbers that you want to add together.
*/
const adderFunction = (num1, num2) => num1 + num2;

/*
  A function to multiply a single number by 2.
  This function takes one parameter - the number you want to multiply by 2.
*/
const multiplyByTwo = (num) => num * 2;

/*
  In the adding function, add the values of the two parameters and return the result
*/
const mySum = adderFunction(69, 420);
console.log(mySum);

/*
  In the multiplication function, multiply the value of the single parameter by 2 and return the result.
*/
const twoThou = multiplyByTwo(1000);
console.log(twoThou);
