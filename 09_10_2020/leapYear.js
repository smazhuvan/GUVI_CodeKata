/*

Let "A" be a year, write a program to check whether this year is a leap year or not.

Print "Y" if its a leap year and "N" if its a common year.

Input Description:
A Year is the input in the form of a positive integer.

Output Description:
Print "Y" if its a leap year and "N" if its a common year.

Sample Input :
2020
Sample Output :
Y

*/

var year = userInput[0];
  
if(year % 400 == 0 || year % 100 == 0 || year % 4 == 0)
  console.log("Y");
else
  console.log("N");
