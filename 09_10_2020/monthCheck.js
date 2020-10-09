/*

You will be provided with a number. Print the number of days in the month corresponding to that number.

Note: In case the input is February, print 28 days. If the Input is not in valid range print "Error".

Input Description:
The input is in the form of a number.

Output Description:
Find the days in the month corresponding to the input number. Print Error if the input is not in a valid range.

Sample Input :
8
Sample Output :
31

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
 
 var num = userInput[0];
 
 if(num >= 1 && num <= 12){
     if(num === 2){
     console.log(28);
 }
 else if(num % 2 != 0 || num == 8){
     console.log(31);
 }
 else
     console.log(30);
 }
 else
 {
     console.log("Error");
 }
});