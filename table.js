// function searchData(){
// var a= document.getElementById("input").value;
// $.ajax({
// "url":"test.json",
// "method":"GET",
// "success": function(data){
//     //debugger;
//     var arr=[];
//     for(let i=0; i<data.length; i++){
//      var b=data[i];
//    var c= Object.keys(b);
//    for(let j=0; j<c.length; j++){
//     var name = b[c[j]];
   
//     if(a.toLowerCase() === name.toString().toLowerCase())
//     {
//        arr.push(b);
//        console.log(arr);
//     }
// } 
//  }
//  CreateTable(arr)
// },
// "error":function(err){
// console.log(err);
// }
// })
// }

// function CreateTable(json){
//     $("table").remove();
// debugger
// var table= document.createElement("table");
// table.setAttribute("border","1");

// var tr= document.createElement("tr");
// var a=Object.keys(json[0]);
// for(let i=0; i<a.length; i++){
// var b= document.createElement("th");  
//   b.innerHTML= a[i];
//   tr.appendChild(b);

// }
// table.appendChild(tr);
// for( let i=0;  i<json.length; i++){
//     var tr=document.createElement("tr");
// for(let j=0; j<a.length; j++){
//     var td= document.createElement("td");
//     td.innerHTML=json[i][a[j]];
// tr.appendChild(td);

// }
// table.appendChild(tr);
//   }
//   document.getElementsByTagName("body")[0].appendChild(table);


// }
// function myFunction() {
//   debugger;

//   var a = document.getElementById("show");
   
//   if (a.style.display === "none") {
//     a.style.display = "block";
//   } else {
//     a.style.display = "none";
//   }
// }


// var b= document.getElementById("show").addEventListener("click",function(e){

//   debugger;
//   // var p=document.createElement("p");
//   // p.innerText="This is a pragraph";
 
//    p.show(b);
   
//   console.log(p);


//$("#hide").hide();

//})
import { Calc } from "./module.js";

Calc.sub(10,5);


document.getElementById("myFunctionHide").addEventListener("click", Calc.myFunctionHide)


document.getElementById("myFunctionShow").addEventListener("click", Calc.myFunctionShow)

document.getElementById("input1").addEventListener("click", Calc.input1)
document.getElementById("apidata").addEventListener("change", Calc.getStatedata)
document.getElementById("stateid").addEventListener("change", Calc.getCitydata)
Calc.apidata();
 var search=(a,b)=>{

console.log(a+b);




}
search(1,2);




  

 
 

