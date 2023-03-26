// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//     text = text.slice(0, i) + "the Second World War" + text.slice(i + 12);
//      }
//      }
// console.log(text)




                /******** creat a game Heads/tail  ********/

 var coin =prompt("chose head/tail" );

var random=Math.random()*1;
var round=Math.round(random);
var chose ="";

if(coin !== "head" && coin !== "tail"){
    alert("please chose head/tail");
    }

else if(round === 1 ){
    chose="head";
}
else if(round === 0 ){
    chose="tail";
}
if(chose === coin){ 
    alert(coin +" is win")
}
else{
    alert(coin + " is lose")
}



            /******** Genrate a Random password using for loop  ********/


var larg = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var small = "abcdefghijklmnopqrstuvwxyz";
var num = "0123456789";
var special = "!@#$%^&*()";
var password = "";


for (var i = 0; i < 3; i++) {
var lg = Math.floor(Math.random(i)*larg.length)
 password +=  larg[lg]
var sm = Math.floor(Math.random(i)*small.length);
password += small[sm]

var nm = Math.floor(Math.random(i)* num.length)
password += num[nm]

var spe = Math.floor( Math.random()*special.length)
password += special[spe]


}
console.log(password)


/****************** Replace a name in string uses splice method ****************/

var str="waqas ahmed smit";

console.log(str.indexOf("ahmed"))

var str="waqas ahmed smit";

var index =str.indexOf("ahmed")
if(index !== -1){
var first= str.slice(0,index);
var sec = "waseem"
var last=str.slice(-5)

var res=(first+sec+last);
}
console.log(res)





/************Chp21 to 25************/
//Que1
var firstname =prompt("Enter your first name");
var lastname =prompt("Enter your last name");

var fullname =firstname +" "+ lastname;
console.log(fullname);



//Que2
var mob ="Samsung Galaxy S6 Edge Plus"
console.log(mob)
console.log("Length of string :" + mob.length)





//Que3
var pak = "Pakistani";

var n =pak.indexOf("n");
console.log(pak);
console.log("index of  n=" +  n);








// //Que4
var word ="Hello World";
var l =word.lastIndexOf("l");

console.log(word);
console.log("last index of l=" +l)








//Que 5
var pak2 ="Pakistani";
var i = pak2.charAt(3);
console.log(pak2);
console.log( "Character of index of 3rd="+i);









//Que 6
var firstname =prompt("Enter your first name");
var lastname =prompt("Enter your last name");

var fullname = firstname.concat(lastname);
console.log(fullname);





// //Que 7
var city1 ="Hyderabad";
var city2 = city1.replace("Hyder","Islam")

console.log("city: "+ city1)
console.log("After replacement " +city2)






// Que8
var message = "Ali and Sami are best friends. They play cricket and football together";
var message2= message.replace(/and/g,"&");
console.log(message2);

let text = "Mr Blue has a blue house and a blue car my name is blue";
let result = text.replace(/blue/g, "red");
console.log(text)
console.log(result)




//Que9
var str = "472";
console.log("Type to string "+ str)
var num = Number(str)
console.log(num);


// //Que10
var inp ="peanuts"
var uppcase=inp.toUpperCase()
console.log("lower case " + inp)
console.log("upper case "+ uppcase);






//Que11
var java =prompt("Enter your language");
var str ="";
var copy1 =java.slice(0,1);
var up = copy1.toUpperCase()
var copy2 =java.slice(1)
console.log(up + copy2);






//Que12
var num = 76.8978;
console.log(num.toString())











//Que13

var inp =prompt("Enter your valid name")
var flag ="";

for(var i=0; i<=inp.length-1; i++){
var str=  inp.charCodeAt(i)
}
   if(str > 64 && str < 123){
    flag=true;
   }

if(flag){
    alert("your name is fine")
}
else{
    alert("no special character allow");
}





//Que14

var inp =prompt("Enter item name")

var arr =["cake", "apple pie", "cookie", "chips", "patties"];
var flag ="";
for(var i=0; i<=inp.length-1; i++){
    if(inp == arr[i] ){
flag=true
    }
}
if(flag){
    alert("your " +inp+ " is found")
}
    else{
        alert("your " +inp+ " is not found")
    }






//Que15

var password = prompt("Enter a password:");

// Check if password contains at least 6 characters
if (password.length < 6) {
  alert("Password should be at least 6 characters long.");
} 
// Check if password starts with a letter
else if (!isNaN(password[0])) {
  alert("Password should not start with a number.");
} 
// Check if password contains only alphabets and numbers
else if (!/^[a-zA-Z0-9]+$/.test(password)) {
  alert("Password should contain only alphabets and numbers.");
} 
else {
  alert("Password is valid.");
}





//Que16
var uni = "University of Karachi"
var arr = uni.split(" ")
console.log (arr)







//Que 17
var inp = prompt("Enter word")
var last = inp.charAt(inp.length-1)
console.log(last);






//Que18
let string = "The quick brown fox jumps over fox the lazy dog";
let count = (string.match(/fox/g));
console.log(count);