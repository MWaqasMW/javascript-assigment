// /************** Assigment No 1  ******************/


// //Que1
var inp1 = prompt("Enter a number");
var inp2 = prompt("Enter a number");

if(inp1 > inp2){
console.log(inp1 + " largest number")
}
else{
    console.log(inp2 + " largest number")
}


//find Positive and negative numbers
// //Que2
 var inp =prompt("Enter a Int");

if(inp > 0) {
    alert(inp + " is positive.");
  } else if(inp < 0) {
    alert(inp + " is negative.");
  } else {
    alert(inp + " is zero.");
  }


  //Find the largest Number
// //Que3
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



// //find even or odd number
// //Que4
for (let i = 0; i <= 15; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}



//Marksheet structur
//Que5
let sub1 = +prompt("Enter your math marks out of 100");
let sub2 = +prompt("Enter your physcis marks out of 100")
let sub3 = +prompt("Enter your computer Science marks out of 100")
let sub4 = +prompt("Enter your English marks out of 100")
let sub5 = +prompt("Enter your urdu marks out of 100")

let obtTotal = sub1 + sub2 + sub3 + sub4 + sub5
let total = 500;

// for (let i = 0; i < marks.length; i++) {
//   sum += marks[i];

// }

const average = Math.round( obtTotal / total * 100)

let grade;

if (average >= 90 && average <= 100) {
  grade = "A1+";
} else if (average >= 80 && average <= 89) {
  grade = "A+";
} else if (average >= 70 && average <= 79) {
  grade = "A";
} else if (average >= 60 && average <= 69) {
  grade = "B";
} else if (average >= 50 && average <= 59) {
  grade = "C";
} else {
  grade = "D";
}

alert( " The  Grade is: " + grade + " The Percentage is: " + average +"%");




//Que6
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }



//nested for loop
//Que7
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "*";
  }
  console.log(row);
}