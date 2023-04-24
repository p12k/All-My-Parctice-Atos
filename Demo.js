export  class DemoFunction{
static Dropdown(){
  debugger; 
$.ajax({

URL:"https://localfacebookapi.azurewebsites.net/api/v1/fetchCountry_v1",
method:"GET",
contentType: "application/json",
headers:{"Credential":"Aman@333"},
success:function(data){
//console.log(data);

},
  error:function(err){
  console.log(err.response.Text);
  
  }


})


}


}