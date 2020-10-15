/*
Given a number N and an array of N strings,Print yes, if all strings have atleast one vowel in them otherwise print no.
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
yes
*/

var N = +(userInput[0]);
var flag = 0,
    vowArr = /[AEIOUaeiou]/g;

for (var i = 1; i <= N; i++) {
    var str = userInput[i];
    if (str.match(vowArr)) flag += 1;
}
if (flag === N) console.log("yes");
else console.log("no");
