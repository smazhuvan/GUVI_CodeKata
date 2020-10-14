/*
Given a number N and an array of N strings, find the lexicographically smallest string.
Input Size : N <= 1000

Sample Testcase :

INPUT
3
code
learn
practice

OUTPUT
code
*/

var N = +userInput[0];
var buffer = [], buffer2 = [];

for(i=1; i<=N; i++){
   buffer2.push(userInput[i]);
   buffer.push(userInput[i].length);
}
 
var sorted = [...buffer],m;
 
sorted.sort(function(x,y){
     return x+y
});
 
var rem = sorted.pop();
console.log(buffer2[buffer.indexOf(rem)]);