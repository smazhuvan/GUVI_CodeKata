/*
Question:
Given a string S, print 'yes' if it has a vowel in it else print 'no'

Sample Testcase :

INPUT
codekata

OUTPUT
yes
*/

// Solution:

var inpStr = userInput[0].split("");

if (inpStr[0] == 'a' || inpStr[1] == 'e' || inpStr[2] == 'i' || inpStr[3] == 'o' || inpStr[4] == 'u')
  console.log("yes")
else
  console.log("no")
