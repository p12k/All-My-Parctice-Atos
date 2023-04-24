// var t=$.get("test.json")
// var g=JSON.parse(t.responseText);
// createtable(g);
function searchData(){
var a= document.getElementById("input").value;


$.ajax({

"url":"test.json",
"method":"GET",

"success":function(data){
   // debugger;
    var arr=[];
  for(let i=0; i<data.length;i++){
    var b= data[i];
    var c = Object.keys(b);
    for(let j=0; j<c.length; j++){
        var name=b[c[j]]
     if(a.toLowerCase() === name.toString().toLowerCase())
        
 {
   // var d= b;
   arr.push(b); 
   console.log(arr);
 }
    }
  }
 //table
createtable(arr);

},

"error":function(err){
//console.log(err.responseText);
console.log(err);
}


})

}
    
function createtable(json){
$("table").remove();
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

  import { Calc } from "./module.js";

  Calc.sub(10,5);
  
  
