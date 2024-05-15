//concatination and interpolation
let price = 80;
let itemName = "Table";
let messageToPrint =
  "The price for your " + itemName + " is " + price + " dollars"; //concatination
let messageToPrint2 = `Then price for you ${itemName} is ${price} dollars`; //interpolation
console.log(messageToPrint);
console.log(messageToPrint2);
