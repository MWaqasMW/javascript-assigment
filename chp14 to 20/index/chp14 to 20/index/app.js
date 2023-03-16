// //chp14 to chp16
// Que1
// var students =["waqas","ali","ahmed","naveed","umar"];
// alert(students[0] + students[3])

// //Que2to3
// var student=["ali raza"];

// Que4
// var num=[1,2,3,4,5];
//  alert(num[3] + " " + num[2]);


// //Que5
// var boolean= [true , false];
// alert(boolean[0] +" "+ boolean[1])

// //Que6
// var mix=["ali","musa","ibrahim",1,2,3,true,false];
// alert(mix[7] + mix[2] + mix[4] + mix[5]+mix[6])


// Que7
// var qul=("")
// var edu=["SSC", "HSC", "BCS","BS", "BCOM", "MS", "MPhil", "PhD"];
// document.write( "<h2>Available education qualifications in Pakistan</h2>"  + "</br>")
// document.write("1)"+ edu[0] +"</br>"+ "2)"+ edu[1] + "</br>" + "3)"+ edu[2] + "</br>"+ "4)"+ edu[3] +"</br>"+ "5)"+ edu[4] +"</br>"+ "6)"+ edu[5] +"</br>"+ "7)"+ edu[6]  +"</br>"+ "8)"+ edu[7]);

// Que8
// var students=["Musa","Ibad","Waqas"];
// var score=[320 ,230 ,480 ,];
// var total=[500];

// var percent=(score[0]/total*100 + "% " +score[1]/total*100 + "% "+score[2]/total*100 +"% ");
// document.write("Students Name: "+ students[0] +" "+ students[1] +" "+students[2]+ "</br>"+"</br>"+"Total Score:  "+ + score[0]+" "+score[1] +" "+score[2] + "</br>"+"</br>"  +"Percentages :" +  " "+ percent)

// students[3]="umar"
// alert(students[3])


// var names=["waqas"]
// names[1]="ameer"
// names[2]="asif"
// names[names.length]="Waseem"
// names[names.length]="ali"

// names.pop();
// names.pop();
// names.pop();

// names.push("khan","imran","nabeel");
// names.shift();
// names.shift();

// names.unshift("test" , "raza")

// console.log(names)


// // var fruits=["apple", "mango", "banana","orange" ];

// // fruits.splice(2,0, "grapes","kiwi")
// // console.log(fruits)

// // var fruits=["apple", "mango", "banana","orange","grapes","kiwi"];

// // //var del =fruits.splice(2,3,5);
// // //var del=fruits.push("grapes","kiwi","watermellon");
// // //var del=fruits.splice(2,1, "grapes","kiwi");
// // // fruits[0]="ghous"
// // //console.log(fruits);
// // //console.log(del);

// // console.log(fruits)
// // var copy=fruits.slice(2,5)
// // console.log(copy)


// Que9
// var colours= ["black","blue","red","orange"];
// // colours[4]="green"
// // colours.push("yellow")
// // colours.unshift("grey")
// // colours.shift()
// // colours.pop()
// //colours.splice(3,0,"brown")
// // document.write(colours);
// var del= colours.splice(1,2)
// console.log(del)
// document.write(colours)


// Que10
// var scores=[320,230,480,120];
// var sort=(scores.sort());
// console.log(sort)

// //Que11
// var cites=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];

// var copy=(cites.slice(1,3));
// document.write("Cities list </br>"  + cites);
// document.write("</br> </br> Selected cities list </br>"+ copy);

// //Que12
// var arr=["this","is","my","cat"];
// console.log(arr.join(" "));


// //Que13
// //FIFO
// var cites=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// var unsh= (cites.unshift("multan"));
// console.log(cites);
// var sh=(cites.shift());
// console.log(cites);


// //Que14
// //FILO

// var cites=["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// var un= (cites.unshift("multan"));
// console.log(cites);
// var po=(cites.pop());
// console.log(cites);


//Que15
// var arr =[ "samsung", "motorola", "nokia", "sony" ];
// var user =prompt("user enter company");

// for(var i=0; i<arr.length;  i++){
//     if(user == arr[i]){
//   var flags =true
//     }
//     }
// if(flags == true){
//     alert("available");
// }
// else{
//     alert("not available")
// }
//                 /****End chp14 to 16******/








                  /*****End vhp17 to 20******/


// var str =prompt("Enter your name");
// var str2=(str.split("").reverse().join(""));

// if(str==str2){
//     alert("Its palindrome words")
// }
// else{
//     alert("its not palindrome words")
// }

//var arr=["karachi","lahore"];
//console.log(arr.join(" "))

// var str=prompt("enter your name");

// for(var i =0; i <str.length; i++){
// console.log(str[i],i)
// }

// var str=prompt("enter your name");

// for(var i =str.length-1; i >=0; i--){
// console.log(str[i],i)
// }
// var str="waqas";
// var reverse = "";
// for(var i =str.length-1; i >=0; i--){
//     reverse =reverse + str[i]

// }
// console.log(reverse)

// var str=prompt("enter your name");
// var reverse = "";
// for(var i =str.length-1; i >=0; i--){
//     reverse =reverse + str[i]
// }
// if(str == reverse){
//     alert("its  palindrome words ")
// }else{
//     alert("its not palindrome words")
// }


//nested for loop
// var firstname=["waqas",""]


//  for(var i =0; i <= 5; i++){
//  for(var j =0; j <= 5; i++){
//      console.log(i,j);
//      break
//  }

//  }






//Chp17 to 20
//Que1
//  var arr=[[],[],[],[]];








//que3
//  for(var i=0; i<=10; i++){
// console.log(i);


//Que4
// var inp =prompt("Enter table no");
// var flag=""
// for(var i=1; i<=1000; i++){
// var count =(i);

// if(inp == count)
// flag=true
// }


// for(var j=1; j<=10;j++){
// var table= (count+"x"+j+"=" + count*j  );
// } 

// if(inp == count){
//     flag=true
// }

//  if(flag){
//     document.write(table);
// }

// else{
//     alert("not found");
// }

//  //Que5
//  var fruits = ["apple", "banana", "mango", "orange","strawberry"];
//  for(var i=0;i<=fruits.lenght-1; i++){

// }
// var inp =prompt("Enter table numbers");
// var range =["Samsung","Apple","Huawei","Nokia","Sony","LG","HTC","Motorola",];

// for(var i =0; i<=range; i++){
//         document.write(inp + "x" + i +  "="+ inp*i +"</br>");
//     }

//      //missing numbers

//     var arr =[21,22,23,25,26,27,28,29,30];
//     for(var i=0; i<=arr.length-1; i++){
//         if(arr[0]-arr[1] === 1){
//             console.log("not missing");
//         }
//         else{
//            console.log();
//         }
//     }






/** find missing number Without Methode **/

// var num = [21, 22, 23, 25, 26, 27, 28, 29, 30];
// var flag = false;
// for (var i = 1; i <= num.length - 1; i++) {
//   var difnum = num[i] + i - num[i];
//   if (difnum == 2) {
//     flag = true; break
//   }
// }

// if (flag)
//   console.log("missing number is " + ++num[i]);
// else {
//   console.log("number not missing");
// }





//     var inp= prompt("Enter city name")

// var cites =["karachi","lahore","islamabad","peshwar",]
// var flag="";
// for(var i=0; i<=cites.length-1; i++){
// if(inp === cites[i]){
// flag =true
// }
// }
// if(flag==true){
//   alert("welcome to" + " " + inp)
// }
// else{
//     alert("not found ")
// }

/**********  use sort method ***********/
// var series = [4, 6, 2, 5, 6, 7, 2, 3];



//Que6
//a)
// document.write("Counting: <br>")
// for (var i = 0; i <= 15; i++) {
// document.write( (i)+ " ");
// }
// //b)
// document.write("<br> Reverse counting: <br>")
// for (var i = 15; i > 0; i--) {
// document.write( (i)+ " ");}

// //c)
// document.write("<br> Even: <br>")
// for (var i = 0; i <= 15; i++) {
// document.write( (i)+ i +" ");}

// //d)
// document.write("<br> Odd: <br>")
// for (var i = 0; i <= 15; i++) {
// document.write( (i) +1+i+" ");}

// //e)
// document.write("<br> Series: <br>")
// for (var i = 0; i <= 15; i++) {
// document.write( (i)+ i+"k" +" ");}



//Que7
// var inp =prompt("Enter sweets name");
// var sweets=["cake", "applepie", "cookie", "chips", "patties"];
// var flag=""
// for(var i=0;0<=inp.length;i++){
//   var out=  sweets[i]
//   if(out === inp){
//    flag=true
//   }
// }
// if(flag){
//   alert("avaliabal");
// }
// else{
//   alert("not avaliabal");
// }


// //Que8
// var num=[24, 53, 78, 91, 12,17,19,10];
// for(var i=0;i<=num.length;i++){
// if(num > )
// }














// //Que10
// var num =""
