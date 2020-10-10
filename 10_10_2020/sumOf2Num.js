/*

You are given Two Numbers, A and B. If C = A + B. Find C.

Note: Round off the output to a single decimal place.

Input Description:
You are provided with two numbers A and B.

Output Description:
Find the sum of the two numbers (A + B)

Sample Input :
1
1
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
    
    var ip1 = userInput[0];
    var ip2 = userInput[1];
    
    var ip3 = +ip1 + +ip2;
    console.log(+ip3);
    
});

