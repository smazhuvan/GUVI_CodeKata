/*
Given a number N and an array of N elements, print the prefix sum array.

Input Size : N <= 100000

Sample Testcase :
INPUT
4
2 4 4 2
OUTPUT
2 6 10 12
*/

var num = +userInput[0];
var arr = userInput[1].split(" ").map(x=>+x);
var sum = 0, resArr = [];
  
for(i=0; i<num; i++){
    sum += arr[i];
    resArr[i] = sum;
}
  
console.log(resArr.join(" "));