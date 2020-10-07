/*
Question:
Given a string S, print 'yes' if it has a vowel in it else print 'no'

Sample Testcase :

INPUT
codekata

OUTPUT
yes
*/

// Solution:

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
 var str = userInput[0].split("");

     if (str[0] == 'a' || str[1] == 'e' || str[2] == 'i' || str[3] == 'o' || str[4] == 'u')
     console.log("yes")
     else
     console.log("no")

});
