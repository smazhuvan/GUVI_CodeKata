/*
Given a number N and an array of N strings, find if two consecutive words are same.
Input Size : N <= 1000
Sample Testcase :
INPUT
5
code
overload
vishal
sundar
anish
OUTPUT
no
*/

var N = parseInt(userInput[0]),
    buffer = [],
    flag = 0;
for (i = 1; i <= N; i++) buffer.push(userInput[i]);
for (j = 1; j <= N; j++)

    if (buffer[j - 1] === l[j]) {
        flag = 1;
        break;
    }
if (flag === 1) console.log("yes");
else console.log("no");
