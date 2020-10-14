/*
Given a number N, print the even factors of N.
If the even factor does not exists for N print '-1'.

Input Size : 1 <= N <= 1000

Sample Testcase :

INPUT
8

OUTPUT
2 4 8
*/

var num = +userInput[0], c=[], a=0;
  
for(i=1; i<=num; i++){
    if(num%i===0 && i%2===0){
        c.push(i);
        a = 1;
    }
    else
        a=0;
}
      
if(a===1)
    console.log(c.join(" "))   
else
    console.log("-1")
      
