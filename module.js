// export class Calc{
//     static sub (a,b){
    
//         console.log(a-b);
//     }
  
// static myFunctionHide() {
  
//     var b = document.getElementById("input").value;
//      var a= document.getElementById(b);
//       a.style.display="none";
//     }
  
//     static myFunctionShow() {
    
//       var b = document.getElementById("input").value;
//        var a= document.getElementById(b);
//         a.style.display="block";
//       }
    
//     static  input1(){
//       debugger;
//     var date = document.getElementById("input1").value;

    
//     var today = new Date();
//     var dd = String(today.getDate()).padStart(2, '0');
//     var mm = String(today.getMonth() + 1).padStart(2, '0');
//     var yyyy = today.getFullYear();

//     today = yyyy + '-' + mm + '-' + dd;
//     //alert(today);
//     $('#input1').attr('min', today);
    
//       }

//       static apidata(){
        
//           $.ajax({
//          // url: "https://localfacebookapi.azurewebsites.net/api/v1/fetchCountry_v1",
//          method: "GET",
//          contentType: "application/json",
//             headers:{"Credential":"Aman@333"},
         
//           success: function(data) {
//             debugger;
       
//           const apidata = document.getElementById("apidata");
//           for (let kuchv of data.countries) {
//             //debugger;
//             let option = document.createElement("option");
//              option.setAttribute('value', kuchv.id);
//              option.innerText=kuchv.countryName;
          
          
//             apidata.appendChild(option);
//           }


//         },
//        error:function(err){
//         alert(err.responseText);
//        }
        
//             });
//       }
     
// static getStatedata(){
// var id =document.getElementById("apidata").value;
//   $.ajax({
//    // url: "https://localfacebookapi.azurewebsites.net/api/v1/fetchState_v1?id=" +id,
//    method: "GET",
//    contentType: "application/json",
//     headers:{"Credential":"Aman@333"},
   
//     success: function(data) {
//       debugger;
 
//     const apidata = document.getElementById("stateid");
//     apidata.innerHTML="";
//     for (let kuchv of data.states) {
//       //debugger;
//       let option = document.createElement("option");
//       option.setAttribute('value', kuchv.id);
//        option.innerText=kuchv.stateName;
    
    
//       apidata.appendChild(option);
//     }

//   },
//  error:function(err){
//   alert(err.responseText);
//  }
  
//       });

// }
// static getCitydata(){

//   var id =document.getElementById("stateid").value;
//   $.ajax({
//    // url: "https://localfacebookapi.azurewebsites.net/api/v1/fetchCity_v1?id=" +id,
//    method: "GET",
//    contentType: "application/json",
//     headers:{"Credential":"Aman@333"},
   
//     success: function(data) {
//       debugger;
 
//     const apidata = document.getElementById("cityid");
//     apidata.innerHTML="";
//     for (let kuchv of data.cities) {
//       //debugger;
//       let option = document.createElement("option");
//       option.setAttribute('value', kuchv.id);
//        option.innerText=kuchv.cityName;
    
    
//       apidata.appendChild(option);
//     }

//   },
//  error:function(err){
//   alert(err.responseText);
//  }
  
//       });


// }

//     }


  
  

  

  



