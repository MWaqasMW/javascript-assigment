

//Chp9 to 11
//Que1
var city = prompt("Enter city");
if (city == "karachi") { alert("Welcom to city of lights") }
else(alert("another cities"))

//Que2
var gender = prompt("Enter gender");
if (gender == male) { alert("Good morning Sir") }
else if (gender == female) { alert("Good morning Maam") }
else (prompt("please fill gender"))


//Que3
var color = prompt("Enter signal color");
if (color === "red") { alert("Must Stop") }
else if (color === "yellow") { alert("Ready to move") }
else if (color === "green") { alert("Move now") }
else (alert("please fill correct signal color"))


//Que4 
var fuel = prompt("Enter reamaning fuel");
if (fuel >= "2.5litr") { alert("Fuel ok hai") }
else (alert("please refil the fuel in your car"))

//Que5 
 var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}



 var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
 var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
 if (true){
alert("True");
}
if (false){
alert("False");
}
 if("car" < "cat"){
alert("car is smaller than cat");
}

Que6
 var totalmarks = (300);
var sbo1 = +prompt("enter obtain marks in subject 1");
var sbo2 = +prompt("enter obtain marks in subject 2");
var sbo3 = +prompt("enter obtain marks in subject 3");
var result = (sbo1 + sbo2 + sbo3);
 alert("Your total marks" + " "+ result);
var result1 = (sbo1 + sbo2 + sbo3)/(totalmarks)*(100)
alert("Your percentage" + " " + result1 + "%") 
if (result1 >= 80) { alert("Grade A1") } 
else if (result1 >= 70) { alert("Grade A"); }
else if (result1 >= 60) { alert("Grade B");}
else if (result1 >= 50) { alert("Grade C"); }
else if (result1 >= 40) { alert("Grade D");}
else(alert("You are Falied"))

Que7
var a1= (1);
var a2=(2);
var a3=(3);
var a4=(4);
var a5=(5);
var a6=(6);
var a7=(7);
var a8=(8);
var a9=(9);
var a10=(10);
var a =prompt("Enter 1 to 10 numbers")
if(a==a1 || a ==a2 ||  a ==a3 ||  a ==a4 ||  a ==a5 ||  a ==a6 ||  a ==a7 ||  a ==a8 ||  a ==a9 ||  a ==a10 ){
    alert("Correct Answer")
}
else(
    alert("Answer is Incorrect try again")
)

Que8
var num=(3);
var inpnum =prompt("Enter any no divided by 3");
var res= (inpnum/num);
alert("Your answer" +" "+ res);

Que9
var even=(prompt("check number type"));
if(
    even==2 ||    even==4 ||    even==6 ||    even==8 ||    even==10 ||    even==12 ||    even==14 ||    even==16 ||    even==18 ||    even==20 ||    even==22 ||    even==24 ||    even==26 ||    even==28 ||    even==30 ||    even==32 ||    even==34 ||    even==36 ||    even==38 ||    even==40   ){
       alert("type Even number ") 
    }
else if(even==0){
    alert("type Whole number")
}
else( alert("type Odd number") )


Que10
var tem=prompt("Enter how many temperature in Celcius")
if(tem>=40){
    alert("It is too hot outside.")
}
else if(tem>=30){
    alert("The Weather today is Normal.")
}
else if(tem>=20){
    alert("Today’s Weather is cool.")
}
else if(tem>=10){
    alert("OMG! Today’s weather is so Cool.")
}

//Que11
var n1 =prompt("Enter num1")
var opt =prompt("Enter opt")
var n2 =prompt("Enter num2")
if(opt== "-"){
    alert(n1-n2)
}
else if(opt== "/"){
    alert(n1/n2)
}
else if(opt== "*"){
    alert(n1*n2)
}
else if(opt== "+"){
    alert(n1+n2)
}
else(alert("try once again"))


//Chp12 t0 13
//Que1




//Que3
var input= prompt("Enter Num and looking numbers type");
if(input > "0" ){
    alert("Postive integral Numbers")
}
else if(input < "0"){ alert("Negative integral numbers")}

else(alert("Natural integral number"))



//Que4
var vowel = prompt("Enter vowel");
if(vowel == "a" || vowel == "e" || vowel == "i" || vowel == "o" || vowel == "u")
{
    alert("its a vowel")
}
else(alert("its not a vowel"))


//Que5
var password =prompt("Create password");
var password2 =prompt("Please enter your password");
if(password === password2){
    alert("Password is Correct")
}
else(
    alert("Password is InCorrect")
)

//Que6 //Que7
var am =("+GST")
var hour1=(" In 24:00 hour");
var hour = prompt(am + " Time"+ hour1);
if(hour<12.1){
    alert("Good Morning")
}
 else if(hour<15.1){
    alert("Good Afternoon")
 }
 else if(hour<18.1){
    alert("Good Evening")
 }
else if(hour<23.9){
    alert("Good Night")
}
else(
    alert("Enter correct time  ")
)
