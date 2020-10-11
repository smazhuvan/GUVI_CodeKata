/*
Given a number N, print their prime factors in sorted order.
Input Size : 2 <= N <= 100000

Sample Testcase

INPUT
18

OUTPUT
2 3
*/

// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  var a=parseInt(userInput[0]),f=[],arr=[];
  for(var i=1;i<=a;i++)
    if(a%i===0)
      f.push(i);
  function isPrime(num) {
    if(num < 2) return false;
    for (var i = 2; i < num; i++) {
        if(num%i==0)
            return false;
    }
    return true;
}
for(var i = 0; i < f.length; i++){
    if(isPrime(parseInt(f[i]))) arr.push(f[i]);
}
  console.log(arr.join(" "));
});
