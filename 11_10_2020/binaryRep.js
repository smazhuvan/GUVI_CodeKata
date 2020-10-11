/*
Print the position of first 1 from right to left, in binary representation of an Integer.

Sample Testcase :
INPUT
18

OUTPUT
2
*/

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
 var a =+ userInput[0], b = a.toString(2);
  console.log(b.length - b.lastIndexOf(1));
});
