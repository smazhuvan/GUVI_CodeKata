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

var str = userInput[0];
var vow = /[aeiouAEIOU]/g;
var str1 = "";
var str2 = "";

  for(i=0; i<a.length; i++){
    if(str[i].match(vow))
    str1 += str[i];
    else
    str2 += str[i];
  }

  console.log(str2);
  
});
