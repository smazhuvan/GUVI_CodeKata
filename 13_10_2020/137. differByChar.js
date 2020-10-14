/*
Given 2 strings and a number K, check whether they differ exactly by K characters.

Input Size : |s| <= 100000(complexity O(nlogn) or O(n))

Sample Testcase :

INPUT
codekata codeguvi 4

OUTPUT
yes
*/

var str = userInput[0].split(" ");
var flag = 0, num = parseInt(a[2]);
 
for(i = 0; i<str[0].length; i++){
    if(str[0][i] === str[1][i])
        flag += 1;
}

if(flag === str[0].length-num)
console.log("yes");
else 
console.log("no");