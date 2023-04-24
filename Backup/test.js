// let a = ""; //assigining variable with definition
// let b = 0;
// let c = true;

// var d = "";
// var e = 0;
// var f = true;

// const g = "";
// const h = 0;
// const i = true;

// abc();

// function abc(){
//     var a = "1";
//     var b = 1;
//     if(a == b){
//         var c = true;
//     }
//     var d = c;
// }

// if(condition){//true

// }

// if(condition){//true

// }
// else{//false

// }

// if(condition){//true

// }
// else if(condition){//false -> true

// }



// if(condition){//true

// }
// else if(condition){//false -> true
    
// }
// else{//false

// }

// 1==1 -> true
// 1==0 -> false
// "1" == 1 -> true
// "1" === 1 -> false
// 24 > 27 -> false
// 25 <= 25 -> true
// "sample" == "sample" -> true
// "sample1" == "sample2" -> false


// const name = "raman";

// let a = "pooja";
// let b = "Pooja";
// let c = "aman";

// if(a == name)
// console.log("Condition 1");
// else if(b == name)
// console.log("Condition 2");
// else if(c == name)
// console.log("Condition 3");
// else
// console.log("Condition 4");

// const a = true;
// var b = "Aman";
// var c = "Pooja";

// if(b != c)
// console.log("1st");
// else
// console.log("2nd");

// var a = "aman";

// switch(a){
//     case "Pooja":
//         console.log(0);
//         break;
//     case "Aman":
//         console.log(1);
//         break;
//     case "aman":
//         console.log(3);
//         break;
//     default:
//         console.log("default");
// }

//var a = ["Aman","Pooja", "Raman", "Saju", "Blue"];
// "Aman" -> a[0]
// "Saju" -> a[3]

//let length = a.length;

//var b = a.entries();

// for(let i=0; i<length; i++){
//     console.log(a[i]);
// }

// for(var entry of b){
//     console.log(entry);
// }


// function addition(number1, number2){
//       return number1 + number2;
// }

// var a = addition(2,3);

// console.log(a);

function fullname(firstname,middlename,lastname){
    var a;
    if(middlename != "")
       a = firstname+" "+lastname;
    else
       a = firstname+" "+ middlename+" "+lastname;
    console.log(a);
} 

fullname("","","");

// a=1;
// b=1;
//  if(a!=b)
 
//==, !=, <, >, <=, >=, 


function calculate(number1,number2,Toadd){
    var a;
    if(Toadd) 
    a= number1 + number2;
    else
    a=number1 * number2;
    return a;

}
var a = calculate(4,6,true);
//alert(a);


function getday(number){
switch(number)
{
case 1: 
console.log("sunday");
break;
case 2: 
console.log("Monday");
break;
case 3: 
console.log("tuesday");
break;
case 4: 
console.log("wednesday");
break;
case 5: 
console.log("thursday");
break;
case 6: 
console.log("friday");
break;
case 7: 
console.log("satday");
break;
default:
    console.log("Invalid Week")


}

}

getday(1);

//  left variable/value operator right variable/value

//  1 != 1 -> false

//  var a = 1;
//  var b = 1;

//  a != b -> true

//  var a = "Aman";
//  var b = "Raman";

//  a != b -> true


//  var c = "PoKumarioja";
//  var d = "Pooja";

//  c == d -> false
//  c != d -> true

//  var a = 34;
//  var b = 54;

//  b > a -> true
//  b < a -> false

//  a !< b -> false

// var b = !true;
// b -> false;
// b -> true;

// var a = false;

// if(!a)
// alert("Hello");
// else
// alert("World");

//getTable(2);

function getTable(number1){
var a = [];
for (let i=1; i<=10; i++){
var b= i*number1;
a.push(b);
}
return a;
}
var a = 5;
console.log(getTable(a));




function getoddNumber(){
var a =[];
for (let i=1; i<=20; i++){
if(i%2==1){
a.push(i);
}
}
console.log(a)

}

getoddNumber();



function calculator(number1,number2,operator){
    var a;
  switch(operator)
    {
        case "+": 
        a= number1 + number2;
        console.log(a);
        break;
        case "-": 
        a= number1 - number2;
        console.log(a); 
        break;
        case "*": 
        a= number1 * number2;
        console.log(a);
        break;
        case "/": 
        a= number1 / number2;
        console.log(a);
        break;
        default:
        console.log("invalid operator")

}
}
calculator(10,5,"%");




















