/*
Print the position of first 1 from right to left, in binary representation of an Integer.

Sample Testcase :
INPUT
18

OUTPUT
2
*/

var ip =+ userInput[0], bin = ip.toString(2);
console.log(bin.length - bin.lastIndexOf(1));
