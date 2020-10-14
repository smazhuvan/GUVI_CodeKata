/*
Problem:

You are given a string.
Your task is to print only the consonants present in the string without affecting the sentence spacings if present.
If no consonants are present print -1

Input Description:
You are given a string ‘s’.

Output Description:
Print only consonants.

Sample Input :
I am shrey

Sample Output :
 m shry

 */

// Solution:

var inpStr = userInput[0];
var regExVow = /[aeiouAEIOU]/g; //Regex Vowel 
var str1 = "";
var str2 = "";

for(i=0; i<inpStr.length; i++){
 if(inpStr[i].match(regExVow))
  str1 += str[i];
 else
   str2 += str[i];
}
console.log(str2);
