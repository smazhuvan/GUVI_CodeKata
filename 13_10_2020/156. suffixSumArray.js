/*
Given a number N and an array of N elements, print the suffix sum of the array.
Input Size : N <= 100000
Sample Testcase :
INPUT
4
2 4 4 2
OUTPUT
12 10 6 2
*/

var num = +userInput[0];
var arr = userInput[1].split(" ").map(x=>+x);
var sum = 0, resArr = [];
  
for(i=num-1; i>-1; i--){
    sum += arr[i];
    resArr[i] = sum;
}
  
console.log(resArr.join(" "));