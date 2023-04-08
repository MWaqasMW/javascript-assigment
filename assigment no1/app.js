/************** Assigment No 1  ******************/


//Que1
// var inp1 = prompt("Enter a number");
// var inp2 = prompt("Enter a number");

// if(inp1 > inp2){
// console.log(inp1 + " largest number")
// }
// else{
//     console.log(inp2 + " largest number")
// }


//Que2
 var inp =prompt("Enter a Int");

if(inp > 0) {
    alert(inp + " is positive.");
  } else if(inp < 0) {
    alert(inp + " is negative.");
  } else {
    alert(inp + " is zero.");
  }

//Que3
let num1 = parseFloat(prompt("Enter number 1:"));
let num2 = parseFloat(prompt("Enter number 2:"));
let num3 = parseFloat(prompt("Enter number 3:"));
let num4 = parseFloat(prompt("Enter number 4:"));
let num5 = parseFloat(prompt("Enter number 5:"));

// Compare the numbers to find the largest one
let largest = num1;

if(num2 > largest) {
  largest = num2;
}

if(num3 > largest) {
  largest = num3;
}

if(num4 > largest) {
  largest = num4;
}

if(num5 > largest) {
  largest = num5;
}

//largest number in the console
console.log("The largest number is " + largest);