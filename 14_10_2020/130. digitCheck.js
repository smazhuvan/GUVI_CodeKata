/*
Given a number N and a number K, check if it has all digits from 0 to k in it.

Input Size : N <= 100000

Sample Testcase :
INPUT
1234034 4

OUTPUT
yes
*/

var N = userInput[0].split(" ");
var K = +N[1], flag = 0;
 
for (i=0; i<=K; i++){
    if(N[0].indexOf(i) !== -1)
     flag += 1;
}
if(flag === K+1)
 console.log("yes");
else
 console.log("no");