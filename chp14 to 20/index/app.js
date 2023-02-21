//chp14 to chp16
Que1
var students =["waqas","ali","ahmed","naveed","umar"];
alert(students[0] + students[3])

//Que2to3
var student=["ali raza"];

Que4
var num=[1,2,3,4,5];
 alert(num[3] + " " + num[2]);


//Que5
var boolean= [true , false];
alert(boolean[0] +" "+ boolean[1])

//Que6
var mix=["ali","musa","ibrahim",1,2,3,true,false];
alert(mix[7] + mix[2] + mix[4] + mix[5]+mix[6])


Que7
var qul=("")
var edu=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "MPhil", "PhD"];
document.write( "<h2>Available education qualifications in Pakistan</h2>"  + "</br>")
document.write("1)"+ edu[0] +"</br>"+ "2)"+ edu[1] + "</br>" + "3)"+ edu[2] + "</br>"+ "4)"+ edu[3] +"</br>"+ "5)"+ edu[4] +"</br>"+ "6)"+ edu[5] +"</br>"+ "7)"+ edu[6]  +"</br>"+ "8)"+ edu[7]);

Que8
var students=["Musa","Ibad","Waqas"];
var score=[320 ,230 ,480 ,];
var total=[500];

var percent=(score[0]/total*100 + "% " +score[1]/total*100 + "% "+score[2]/total*100 +"% ");
document.write("Students Name: "+ students[0] +" "+ students[1] +" "+students[2]+ "</br>"+"</br>"+"Total Score:  "+ + score[0]+" "+score[1] +" "+score[2] + "</br>"+"</br>"  +"Percentages :" +  " "+ percent)

students[3]="umar"
alert(students[3])


var names=["waqas"]
names[1]="ameer"
names[2]="asif"
names[names.length]="Waseem"
names[names.length]="ali"

names.pop();
names.pop();
names.pop();

names.push("khan","imran","nabeel");
names.shift();
names.shift();

names.unshift("test" , "raza")

console.log(names)

 
// var fruits=["apple", "mango", "banana","orange" ];

// fruits.splice(2,0, "grapes","kiwi")
// console.log(fruits)

// var fruits=["apple", "mango", "banana","orange","grapes","kiwi"];

// //var del =fruits.splice(2,3,5);
// //var del=fruits.push("grapes","kiwi","watermellon");
// //var del=fruits.splice(2,1, "grapes","kiwi");
// // fruits[0]="ghous"
// //console.log(fruits);
// //console.log(del);

// console.log(fruits)
// var copy=fruits.slice(2,5)
// console.log(copy)


Que9
var colours= ["black","blue","red","orange"];
// colours[4]="green"
// colours.push("yellow")
// colours.unshift("grey")
// colours.shift()
// colours.pop()
//colours.splice(3,0,"brown")
// document.write(colours);
var del= colours.splice(1,2)
console.log(del)
document.write(colours)


Que10
var scores=[320,230,480,120];
var sort=(scores.sort());
console.log(sort)

//Que11
var cites=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

var copy=(cites.slice(1,3));
document.write("Cities list </br>"  + cites);
document.write("</br> </br> Selected cities list </br>"+ copy);

//Que12
var arr=["this","is","my","cat"];
console.log(arr.join(" "));


//Que13
//FIFO
var cites=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var unsh= (cites.unshift("multan"));
console.log(cites);
var sh=(cites.shift());
console.log(cites);


//Que14
//FILO

var cites=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var un= (cites.unshift("multan"));
console.log(cites);
var po=(cites.pop());
console.log(cites);


//Que15
var comp=[Apple,Samsung, Motorola, Nokia, Sony ];
document.write(comp);