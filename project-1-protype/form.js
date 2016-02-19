var button1 = document.getElementById("submit");

button1.addEventListener('click',function subscribe(){
    
    var x = document.forms["my_form"]["email"].value;
    
    if (x==null || x==""){
    document.getElementById("thank_you").innerHTML=("Please enter an email!");
    }
    
    else{
         document.getElementById("thank_you").innerHTML=("Thank you for subscribing to Golden Aquarium!");
    }

    
    
})