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

var N = userInput[0].split(" ");
var factorial = parseInt(N);

for(i = factorial-1; i >= 1; i --)
  factorial = factorial * i;

console.log(factorial);
