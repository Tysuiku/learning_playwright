// declarative function can be invoked anytime

function helloOne() {
  console.log("hello1");
}

helloOne();

// anonymus function can't be invoked if not defined
let helloTwo = function () {
  console.log("hello2");
};

helloTwo();

//es6 function syntax or arrow function
let helloThree = () => {
  console.log("hello3");
};

helloThree();

//function with arguments
let printName = (name) => {
  console.log(name);
};

printName("John");

//function with return
let multiplyByTwo = (number) => {
  let result = number * 2;
  return result;
};

console.log(multiplyByTwo(10));

//import function
import { printAge } from "../helpers/printHelper.js";
printAge(5);

//import everything
import * as helper from "../helpers/printHelper.js";
helper.printAge(10);
