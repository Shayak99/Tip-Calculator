document.getElementById("totaltip").style.display = "none";
function calc(){
   let bill = document.getElementById("billamt").value;
   let service = document.getElementById("serviceQual").value;
   let persons = document.getElementById("peopleamt").value;
   if(bill=="" || service==0){
      alert("Please Enter Bill Amount");
      return;
   }
   if(persons=="" || persons<=1){
      persons =1;
      document.getElementById("morethanone").style.display = "none";
   }else{
      document.getElementById("morethanone").style.display = "block";
   }
   let total = (bill * service)/persons;
   total = total.toFixed(2);
   document.getElementById("totaltip").style.display = "block";
   document.getElementById("dollar").innerHTML = total;
   
}
