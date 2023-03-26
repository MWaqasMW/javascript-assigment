// /**********Chp 26 to 30*************/ 


// //Que1
var num = 3.45214;
var round = Math.round(num);
var floor = Math.floor(num);
var ceil = Math.ceil(num);

console.log("\n Number ="+ num +  "\n Round =" + round  + "\n floor =" + floor + "\n Ceil =" + ceil);

// //Que2
var num = -3.45214;
var round = Math.round(num);
var floor = Math.floor(num);
var ceil = Math.ceil(num);

console.log("\n Number ="+ num +  "\n Round =" + round  + "\n floor =" + floor + "\n Ceil =" + ceil);


// //Que3
var num = -6;
var absolute = Math.abs(num);
console.log("negative number "+ num)
console.log("absolute "+ absolute);


// //Que4
var dice = "";
var token = Math.floor( Math.random(dice)*6)
console.log("random dice value" + token + "\n random dice value"+ token)


//Que5
var coin = prompt("chose head/tail");

var random = Math.random() * 1;
var round = Math.round(random);


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



//Que6
var random = Math.round(Math.random()*100)
document.write(" Random numbers between 1 to 100 :" + random)
console.log(parseFloat(random))






//Que7
var weight = prompt("Enter your weight in kg");

var weightDecimel = parseFloat(weight);
alert(weightDecimel.toFixed(1) + "kg");







//Que8
var inp = prompt("Enter secret no 1 to 10 ")
var random = Math.round(Math.random()*10)

if(inp === random){
alert("congulration")
}
else{
    alert("sorry try again")
}


console.log(random)




// var myInteger = parseInt("1.999956646546");
// console.log(myInteger)