/*
Given a number 'N' print the sum of each digit to the power of number of digits in given input.

Example :
Input => 1234
=> ( 1 ^ 4 ) + ( 2 ^ 4 ) + ( 3 ^ 4 ) + ( 4 ^ 4 )
=> 1 + 16 + 81 + 256
Output => 354

N <=100000000000

Sample Testcase
INPUT
1234
OUTPUT
354
*/

 var a = userInput[0].split("");
 var aLen = a.length;
 var a1 = userInput[0].split(" ");
 var buffer = [];

 for(i = 0; i < aLen; i++){
     buffer[i] = Math.pow(a[i],aLen);
 }

 var sum = buffer.reduce(function(a, b){
        return a + b;
    }, 0);

 console.log(sum);
