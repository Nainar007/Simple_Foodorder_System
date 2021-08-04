
function pay(){
    var cardnumber=document.getElementById("cardno").value;
    if(cardnumber=='')
    {
        alert("    Enter Your Cardnumber. \n    Payement is incomplete...");
    }
    else{
    alert("    Your card number : "+cardnumber+"\n    Payement successful...!");
    }
    document.getElementById("form").reset();
}
function problems()
{
 var name=document.getElementById("contact-name").value;
 if(name=='')
 {
    alert("Enter your Name.");
 }
 else{
 alert(name+",Your problem had been send.");
 }
 document.getElementById("form2").reset();
}

function myFunction() 
{
     var element = document.body;
     element.classList.toggle("dark-mode");
  }
  
 
