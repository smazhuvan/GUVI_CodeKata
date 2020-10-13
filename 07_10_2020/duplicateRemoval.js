/*
Question:
You are given a number with duplicate digits your task is to remove the immediate duplicate digits and print the result

Input Description:
You are given a long string of digits

Output Description:
Print the desired result print -1 if result length is 0

Sample Input :
1331

Sample Output :
11
*/

// Solution



var inpArr = userInput[0].split("");

for(i=0; i<inpArr.length; i++){
    if (inpArr[i] === inpArr[i+1]){
        inpArr.splice(i,2);
    }
}
console.log(inpArr.join(""));
});
