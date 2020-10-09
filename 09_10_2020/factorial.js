/*

You are provided with a number, "N". Find its factorial.

Input Description:
A positive integer is provided as an input.

Output Description:
Print the factorial of the integer.

Sample Input :
2
Sample Output :
2

*/

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  //console.log(data);
  userInput.push(data);
});
inp.on("close", () => {
    
    var a = userInput[0].split(" ");
    var b = parseInt(a);

    for(i = b-1; i >= 1; i --)
        {
            b = b * i;
        }

console.log(b);
    
});