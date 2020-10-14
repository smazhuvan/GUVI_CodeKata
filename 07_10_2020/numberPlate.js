/*
Question:

In XYZ country there is rule that car’s engine no. depends upon car’ number plate.
Engine no is sum of all the integers present on car’s Number plate.
The issuing authority has hired you in order to provide engine no. to the cars.
Your task is to develop an algorithm which takes input as in form of string(Number plate) and gives back Engine number.

Input Description:
You are given a string ’s’

Output Description:
Print the engine number

Sample Input :
HR05-AA-2669

Sample Output :
28
*/

// Solution

   var numPlate = userInput[0].split("").map(Number);
   var expOp = numPlate.filter(numPlate => numPlate > 0)
   var sum = expOp.reduce(function(a, b){
        return a + b;
    }, 0);

    console.log(sum);
});
