/*

You are provided with two numbers. Find and print the smaller number.

Input Description:
You are provided with two numbers as input.

Output Description:
Print the small number out of the two numbers.

Sample Input :
23 1
Sample Output :
1

*/

const readline = require("readline");

const inp = readline.createInterface({
    input:process.stdin
})

const userInput = [];

inp.on("line",(data)=>{
   userInput.push(data); 
});

inp.on("close",()=>{
   var num = userInput[0].split(" ");
   
   if(num[0] > num[1]){
       console.log(num[1]);
   }
   else{
       console.log(num[0]);
   }
});