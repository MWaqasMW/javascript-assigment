// chp5
// Que1
var num1=(3);
var num2=(4);

document.write(num1+num2)

// Que2
var num3=(3);
var num4=(4);
document.write(num4-num3)


var num5=(3);
var num6=(4);
document.write(num5*num6)

var num7=(3);
var num8=(4);
document.write(num7/num8)

var num9=(3);
var num10=(4);
document.write(num9%num10)


// Que3
var num=(8)
document.write(num++)
console.log(num)
var Num=(5)
document.write(Num++)
var num7=(7)
document.write(Num+num7)
document.write(--Num+num7)

var num3=(3)
document.write(Num+num7/num3)

// Que4
var oneticket=(600);
var ticktotal=(5);

console.log(oneticket*ticktotal);


//Que5
var tablenum=prompt("enter table No")
var table5=("Table for 5 <br> 5x1=5 <br> 5x2=10 <br> 5x3=15 <br> 5x4=20 <br> 5x5=25 <br> 5x6=30 <br> 5x7=35 <br> 5x8=40 <br> 5x9=45 <br> 5x10=50")
if(tablenum == 5 ){
   document.write(table5)
}
var table6=("Table for 6 <br> 6x1=6 <br> 6x2=12 <br> 6x3=18 <br> 6x4=24 <br> 6x5=30 <br> 6x6=36 <br> 6x7=42 <br> 6x8=48 <br> 6x9=54<br> 6x10=60")
if(tablenum == 6 ){
   document.write(table6)
}
var table7=("Table for 7 <br> 7x1=7 <br> 7x2=14 <br> 7x3=21 <br> 7x4=28 <br> 7x5=35 <br> 7x6=42 <br> 7x7=49 <br> 7x8=56 <br> 7x9=63<br> 7x10=70")
if(tablenum == 7 ){
   document.write(table7)
}


var num1=( "4" + 2)
alert(num1)

 document.write("Table for 5 <br> 5x1=5 <br> 5x2=10 <br> 5x3=15 <br> 5x4=20 <br> 5x5=25 <br> 5x6=30 <br> 5x7=35 <br> 5x8=40 <br> 5x9=45 <br> 5x10=50 ");
var num1= +prompt("enter no ")
alert(num1+6)

//chp=6
//Que1
var a =(10)
console.log(a)
var a =(++a)
console.log(a)
var num=(a++)
console.log(num)
var num1=(--a)
console.log(num1)
var num2=(a--)
console.log(num2)

//Que2
var a=(2)
var b=(1)
var result=(--a - --b + ++b + b--)
alert(result)

//Que3
var fullname=prompt("Enter your name")
document.write(fullname)

//Que5
var table =prompt("Enter table NO")
if(table == "2"){
   document.write("Table for 2 <br> 2x1=2 <br> 2x2=4 <br> 2x3=6 <br> 2x4=8 <br> 2x5=10 <br> 2x6=12 <br> 2x7=14 <br> 2x8=16 <br> 2x9=18 <br> 2x10=20")
}
else if(table == "3"){
    document.write("Table for 3 <br> 3x1=3 <br> 3x2=6 <br> 3x3=9 <br> 3x4=12 <br> 3x5=15 <br> 3x6=18 <br> 3x7=21 <br> 3x8=24 <br> 3x9=27 <br> 3x10=30")
}
else(document.write ("Table for 5 <br> 5x1=5 <br> 5x2=10 <br> 5x3=15 <br> 5x4=20 <br> 5x5=25 <br> 5x6=30 <br> 5x7=35 <br> 5x8=40 <br> 5x9=45 <br> 5x10=50"))


//Que6
var sub1 = prompt("Enter sub1")
var sub2 = prompt("Enter sub2")
var sub3  = prompt("Enter sub3")
var marks=(100)
var totalmarks=(300)
var sbo1 = +prompt ("enter obtain marks in subject 1")
var sbo2 = +prompt ("enter obtain marks in subject 2")
var sbo3 = +prompt ("enter obtain marks in subject 3")

var result=(sbo1+sbo2+sbo3)
alert( "Total marks" + " " + result)

var result1=(sbo1+sbo2+sbo3)/(totalmarks)*(100)
alert("Total percentage"+ " " + result1 + "%")

