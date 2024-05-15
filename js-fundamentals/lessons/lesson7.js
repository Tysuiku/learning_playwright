// loops

// for(statement1; statement2; statement3){

// }

// for loop (for i loop)
for (let i = 0; i < 5; i++) {
  console.log("hello world" + i);
}

let cars = ["volvo", "toyota", "tesla"];
// for of loop
for (let car of cars) {
  console.log(car);
  if (car == "toyota") {
    break;
  }
}

//es6 syntax for each loop
cars.forEach(car => {
    console.log(car)
})
