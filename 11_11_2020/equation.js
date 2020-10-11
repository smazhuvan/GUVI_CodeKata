/*
Given the values of a,b and x in the equation ax + b = y. Find the value of y.

Sample Testcase

INPUT
3 5 2

OUTPUT
11

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

  var num = userInput[0].split(" ").map(Number);
  console.log((num[0]*num[2])+num[1]);

});
