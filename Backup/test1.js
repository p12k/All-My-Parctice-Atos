// var a = document.getElementById("div");
// a.style.color="green";

// var a=document.createElement("div");
// a.setAttribute("class","abc");
// a.setAttribute("id","abc1");
// a.setAttribute("name","abc2");
// a.innerText="kjlkjl";
// a.style.color="red";
// a.style.backgroundColor="grey";
// document.getElementsByTagName("body")[0].appendChild(a);

//document.getElementsByTagName("body")[0].appendChild(document.createElement("div"));

// document.getElementById("input").addEventListener("keyup",function(e){
//     debugger;
//     var a = this.value;
//     //this.value =a.replace("*","");

//      this.value = a.toUpperCase();





// });


//////////////////////////////////////////////////////////////////////


// var a = {
// "Name":"Aman",
// "Designation":"Developer",
// "Surname":"Singh"

// };
// document.getElementById("button").addEventListener("click",function(e){
   
//     var a= document.getElementById("input1").value;
//     var b= document.getElementById("input2").value;
//     var c= parseInt(a)+parseInt(b);
//    document.getElementById("input3").value=c;

// })


// <h1 id="head">What is your Name</h1>
// <span id="name1">Pooja Roy</span>
// <span id="name2">Aman Motu</span>

// var a= document.createElement("h1");
//     a.setAttribute("id","head");
//     a.innerHTML="what is your name";
//     var b=document.createElement("span");
//     b.setAttribute("id","name1");
//       b.innerHTML="Pooja ";
//       b.style.cursor="pointer";
//     var c=document.createElement("span");
//     c.setAttribute("id","name2");
//     c.innerHTML="Aman";
//     c.style.cursor="pointer";
//     var d= document.getElementsByTagName("body")[0];
//     d.appendChild(a);
//     d.appendChild(b);
//     d.appendChild(c);
// document.getElementById("name1").addEventListener("click",function(e){
// this.style.color="green";
// })
// document.getElementById("name2").addEventListener("click",function(e){
//     this.style.color="red";
// })
//i>0-greater

// const ele = ["h1","span","span"];
// const ids = ["head", "name1", "name2"];
// const data = ["What is your name?", "Pooja ", "Aman"];
// const color = ["green","red"];
// for(let i=0; i<ele.length; i++){
//     var a = document.createElement(ele[i]);
//     a.setAttribute("id",ids[i]);
//     a.innerText = data[i];
//     a.style.cursor = "pointer";
//     document.getElementsByTagName('body')[0].append(a);
//     if(i > 0)
//         document.getElementById(ids[i]).addEventListener("click",(e)=>{document.getElementById(ids[i]).style.color = color[i-1]});
// }

const json = [
    {
        "Name": "Aman",
        "Salary": 10000.21,
        "Age": 67
    },
    {
        "Name": "Pooja",
        "Salary": 54000.67,
        "Age": 25
    },
    {
        "Name": "Raman",
        "Salary": 34000.21,
        "Age": 23
    },
    {
        "Name": "Shyam",
        "Salary": 100000.71,
        "Age": 28
    },
    {
        "Name": "Anubhav",
        "Salary": 1000.91,
        "Age": 25
    }
];

// for( let i=0;  i<json.length; i++){
// var a= document.createElement("h1");
// a.innerHTML=(json[i].Name);
// var b= document.createElement("span");
// b.innerHTML=(json[i].Salary);
// var c= document.createElement("span");
// c.innerHTML=(json[i].Age);
// var d= document.getElementsByTagName("body")[0];
// d.appendChild(a);
// d.appendChild(b);
// d.appendChild(c);
// }

/* <table>
<tr>
<th></th>
<th></th>
<th></th>
</tr>
<tr>
    <td></td>
    <td></td>
    <td></td>
</tr>
    </table> */

//     var a= document.createElement("table");
//     a.setAttribute("border","1");
//     var b= document.createElement("tr");
//     const data= Object.keys(json[0]);
//     for(let i=0; i<data.length; i++){
//       var c=  document.createElement("th");
//       c.innerText=data[i];
//       b.appendChild(c);
    
//     }
//     a.appendChild(b);
//     // var d= document.getElementsByTagName("body")[0];
//     // d.appendChild(a);
    

//     for( let i=0;  i<json.length; i++){

//         var tr=document.createElement("tr");
// for(let j=0; j<data.length; j++){
//    var td = document.createElement("td");
//    td.innerText=json[i][data[j]];
   
// tr.appendChild(td);

//     }
// a.appendChild(tr);


// }
// var d= document.getElementsByTagName("body")[0];
//     d.appendChild(a);
    
    
   

//////////////////////////////////////////////////////////////////////////////////////////



// for(let i=0; i<json.length; i++){
// var a= document.createElement("h1");
// a.innerHTML= (json[i].Name);
// var b= document.createElement("span");
// b.innerHTML=(json[i].Salary);
// var c=document.createElement("span");
// c.innerHTML=(json[i].Age);

// var d = document.getElementsByTagName("body")[0];

// d.appendChild(a);
// d.appendChild(b);
// d.appendChild(c);
// }


//   for( let i=0;  i<json.length; i++){
//     var a= document.createElement("h1");
//     a.innerHTML=(json[i].Name);
//     var b= document.createElement("span");
//     b.innerHTML=(json[i].Salary);
//     var c= document.createElement("span");
//     c.innerHTML=(json[i].Age);
//     var d= document.getElementsByTagName("body")[0];
//     d.appendChild(a);
//     d.appendChild(b);
//     d.appendChild(c);
//     }


test.js:38 name
json
(3) [{…}, {…}, {…}]0: {name: 'Pooja', age: '25', salary: '5000000'}1: {name: 'baby', age: '24', salary: '10000000'}2: {name: 'aman', age: '45', salary: '18000000'}length: 3[[Prototype]]: Array(0)
json[0]
{name: 'Pooja', age: '25', salary: '5000000'}age: "25"name: "Pooja"salary: "5000000"[[Prototype]]: Object
json[0]["name"]
'Pooja'
Object.keys(json[0])
(3) ['name', 'age', 'salary']
var a = Object.keys(json[0])

undefined
a["length"]
3
th.innertext = a[i]
VM1926:1 Uncaught ReferenceError: th is not defined
    at <anonymous>:1:1
(anonymous) @ VM1926:1