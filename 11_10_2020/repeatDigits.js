/*
Given a number N,check whether it has repeating digits in it.print 'yes' if it has repeating digits otherwise print 'no'.

Sample Testcase
INPUT
11234

OUTPUT
yes
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
  var a=userInput[0].split(""),c=0;

  for(var i=0;i<a.length;i++)
    for(var j=0;j<a.length;j++)

      if(i!==j && a[i]===a[j]){c=1;break;}

  if(c===1)console.log("yes");
  else console.log("no");
});
