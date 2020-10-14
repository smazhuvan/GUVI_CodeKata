/*
Given a number N, print their prime factors in sorted order.
Input Size : 2 <= N <= 100000

Sample Testcase

INPUT
18

OUTPUT
2 3
*/

var a = parseInt(userInput[0]), buffer = [], resArr = [];

for(i = 1; i <= a; i++) {
  if(a%i === 0)
    buffer.push(i);
  
  function isPrime(num) {
    if(num < 2) 
      return false;
    
    for (i = 2; i < num; i++) {
      if(num%i == 0)
        return false;
    }
    return true;
}
  
for(i = 0; i < buffer.length; i++){
    if(isPrime(parseInt(buffer[i])))
      resArr.push(buffer[i]);
}
  console.log(resArr.join(" "));
