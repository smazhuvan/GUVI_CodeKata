/*

You are given with a number "N", find its cube.

Input Description:
A positive integer is provided.

Output Description:
Find the cube of the number.

Sample Input :
2
Sample Output :
8

*/

const readline = require("readline");
const userInput = [];

const inp = readline.createInterface({
    input: process.stdin
});

inp.on("line",(data) => {
    userInput.push(data);
});

inp.on("close",() => {
    
    var N = userInput[0];
    
    console.log(Math.pow(+N,3))
});

