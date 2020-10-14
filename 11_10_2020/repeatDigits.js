/*
Given a number N,check whether it has repeating digits in it.print 'yes' if it has repeating digits otherwise print 'no'.

Sample Testcase
INPUT
11234

OUTPUT
yes
*/

var a = userInput[0].split(""), flag = 0;

for(i=0; i<a.length; i++){
  for(j=0; j<a.length; j++){
    if(i!==j && a[i]===a[j]){
      flag=1;
      break;
    }
  }
}

if(flag === 1)
  console.log("yes");
else
  console.log("no");
