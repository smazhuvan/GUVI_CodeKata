/*

Using the method of looping, write a program to print the table of 9 till N in the format as follows:
(N is input by the user)

9 18 27...

Print NULL if 0 is input

Input Description:
A positive integer is provided as an input.

Output Description:
Print the table of nine with single space between the elements till the number that is input.

Sample Input :
3
Sample Output :
9 18 27

*/

var N = userInput[0];
var resArr =[];
 
if (N === 0)
  console.log("NULL");

else{
  for(i=1; i<=N; i++)
    resArr[i] = i * 9;
  console.log(resArr.join(" ").trim())   
}
