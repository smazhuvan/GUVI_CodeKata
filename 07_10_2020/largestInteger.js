/*
Question:
You are given with a string which comprises of some numbers.
Your task is to find the largest integer by converting the string to the corresponding integer.

Input Description:
First line contains n denoting number of Test Cases.
The first and only Line of testcase has the string

Output Description:
Print the largest number

Sample Input :
I was born on 12 october 1998.

Sample Output :
1998
*/

// Solution

var inpStr = userInput[0].split(" ").map(Number);
var num = 0;

for (i=0; i < inpStr.length; i++){
    if (inpStr[i] > num) {
        num = inpStr[i];
    }
}
console.log(num);
});
