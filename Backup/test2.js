// const json=[

// {

//     "name":"Pooja",
//     "age":"25",
//     "salary":"5000000",
// },
// {
//     "name":"baby",
//     "age":"24", 
//     "salary":"10000000"
    
// },
// {
//     "name":"aman",
//     "age":"45",
//     "salary":"18000000"
    
// }
// ]

//var a = ["name", "age", "salary"];
// a = {
// 0:"name",
// 1:"age",
// 2:"salary",
// length:3
// }

// a[0] => "name"
// a[1] => "age"
// a[2] => "salary"
// a["length"] => 3


// for(let i=0; i<a["length"]; i++){
//     console.log(a[i]);
// }

// function createtable(json){

// var table = document.createElement("table");
// table.setAttribute("border","1");
// table.style.borderBlockColor="red";
// table.style.color="green";
// //table.style.cursor="pointer";
// var tr= document.createElement("tr");

// var a = Object.keys(json[0]);

// for(let i =0; i<a.length; i++){
// var b= document.createElement("th");
 
// b.style.color="pink";
// b.innerHTML=a[i]; 
 
// tr.appendChild(b);

// }
// table.appendChild(tr);
// for( let i=0;  i<json.length; i++){
//     var tr=document.createElement("tr");
// for(let j=0; j<a.length; j++){
//     var td= document.createElement("td");
//     td.style.color="blue";
//     td.innerText=json[i][a[j]];
//     tr.appendChild(td);
// }
//   table.appendChild(tr);
// }
// document.getElementsByTagName("body")[0].appendChild(table);
// }

// ////////////////////////AJAX////////////////////////////////////////


// $.ajax({
// "url":"test.json",
// "method":"GET",

// "success":function(data){
// //createtable(data);
// var a= "<p>"+ JSON.stringify(data) +"</p>"
// $("body").append(a);

// console.log(data);
// },

// "error":function(err){
// //console.log(err.responseText);
// console.log(err);
// }

// })
    
function createtable(json){
  //var a = document.getElementById("button").addEventListener("click",function(e){
   // var a = document.createElement("button");
    
    //a.setAttribute("type","submit");
   // a.setAttribute("id","button");
    // a.innerText="SubmitTable";
    // a.style.color="red";
    // a = document.getElementById("button").addEventListener("click",function(e){
    //}
// document.getElementsByTagName("body")[0].appendChild(a);
var table = document.createElement("table");
table.setAttribute("border","1");
table.style.borderBlockColor="red";
table.style.color="green";
//table.style.cursor="pointer";
var tr= document.createElement("tr");

var a = Object.keys(json[0]);

for(let i =0; i<a.length; i++){
var b= document.createElement("th");
 
b.style.color="pink";
b.innerHTML=a[i]; 
 
tr.appendChild(b);

}
table.appendChild(tr);
for( let i=0;  i<json.length; i++){
    var tr=document.createElement("tr");
for(let j=0; j<a.length; j++){
    var td= document.createElement("td");
    td.style.color="blue";
    td.innerText=json[i][a[j]];
    tr.appendChild(td);
}
  table.appendChild(tr);
}
document.getElementsByTagName("body")[0].appendChild(table);
   // });


}



function callAjax(){

    $.ajax({
        "url":"test.json",
        "method":"GET",
        
        "success":function(data){
          createtable(data);
        var a= "<p>"+ JSON.stringify(data) +"</p>"
        $("body").append(a);
        
        //console.log(data);
        },
        
        "error":function(err){
        //console.log(err.responseText);
        console.log(err);
        }
        
        })
    

}






// .div1{
//     width: 200px;
//     height: 200px;
//     cursor: pointer;
//     border: 1px solid #333;
// }




// [Violation] 'click' handler took 12885ms
// data.length
// 10
// var b = datfor(a[0]
// undefined
// b
// {Name: 'Pooja', Age: 25, Designation: 'developer', Salary: 15000.96, Mobile Number: 8962173474}Age: 25Designation: "developer"Mobile Number: 8962173474Name: "Pooja"Salary: 15000.96[[Prototype]]: Object
// Object.keys(b)
// (5) ['Name', 'Age', 'Designation', 'Salary', 'Mobile Number']
// Object.keys(b).length
// 5
// b[Object.keys(b)[0]]
// 'Pooja'

// if(b[Object.keys(b)[0]] === a)