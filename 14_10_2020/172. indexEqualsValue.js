/*
Given a number n followed by n numbers. 
Find the numbers which are equal to their index value and print them in sorted order. 
If no such numbers are present print '-1' without quotes.

Input Size : 1 <= n <= 100000

Sample Testcases :
INPUT
6
6 7 3 3 4 5
OUTPUT
3 4 5
*/

var inpSize = +userInput[0];
var numSer = userInput[1].split(" ").map(Number);
var result = [], c = 0;
 
 for(i=0; i<inpSize; i++){
     if(numSer[i] === numSer.indexOf(i)){
         result.push(i);
         c = 1
     }
 }

 if(c===1)
 console.log(result.join(" "));
 else
 console.log(-1);