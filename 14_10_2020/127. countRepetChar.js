/*
Given a string S,count the maximum number of times a character repeated in the string.
If no character is repeated print '0'.

Input Size : 1 <= N <= 100000

Sample Testcase :
INPUT

codekata
OUTPUT
2
*/

var a = userInput[0];
var flag = 1, buffer = [];
  
for(i=0; i<a.length; i++){
    for(j=0; j<a.length; j++)
        if(i !== j && a[i] === a[j])
            flag += 1;
        buffer.push(c);
        flag = 1;
}

buffer.sort(function (x,y){ return x-y;});

if (buffer.length>0)
    console.log(buffer.pop());
else
    console.log(0);