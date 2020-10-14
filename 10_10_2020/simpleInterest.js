var a = userInput[0].split(" ");
var princAmount = a[0];
var rate = a[1];
var year = a[2];
var simInt = ((+princAmount * +rate * +year)/100);

console.log(simInt.toFixed(2));
