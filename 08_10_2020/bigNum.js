/*

You are given three numbers A, B & C. Print the largest amongst these three numbers.

Input Description:
Three numbers are provided to you.

Output Description:
Find and print the largest among the three

Sample Input :
1
2
3
Sample Output :
3

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
    
    var ip1 = userInput[0].split(" ");
    var ip2 = userInput[1].split(" ");
    var ip3 = userInput[2].split(" ");
    
    if(ip1 > ip2 && ip1 > ip3)
    {
        console.log(parseInt(ip1));
    }
    else if(ip2 > ip1 && ip2 > ip3)
    {
        console.log(parseInt(ip2));
    }
    else
    {
        console.log(parseInt(ip3));
    }
    
});