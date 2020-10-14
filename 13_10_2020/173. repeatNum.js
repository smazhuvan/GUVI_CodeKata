/*
Given a number N followed by N numbers. Out of these N numbers some of them are repeated. 
Write a program to find the number which is repeated and print the repeated numbers in sorted order. 
If no numbers are repeated print "unique".
Input Size : 1 <= N <= 100000

Sample Testcase :

INPUT
7
1 2 3 2 3 4 3

OUTPUT
2 3
*/

var inpSize = +userInput[0];
var numSeries = userInput[1].split(" ").map(Number);
var result = [], flag = 0;
 
 for(i=0; i<inpSize; i++){
     for(j=0; j<i; j++){
         if(numSeries[i]===numSeries[j]){
             result.push(i);
             flag = 1
            }
     }
 }
 
 if(flag === 1)
 console.log(1);
 else
 console.log("unique");

