function register(event){
    event.preventDefault();
    // getting data from html to js
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
    var userData = {name : userName, email : userEmail, password : userPassword }
     
//   console.log(userData, "userData")
// starting data from js to ls 
var dataFromLS =JSON.parse(localStorage.getItem("userData")) || [];
console.log(dataFromLS, "dataFromLS")
var flag = false;
for (var i=0; i<dataFromLS.length; i++){
    if(dataFromLS[i].email===userEmail){
        flag= true;
    }
}
if(flag===true){
    alert("email alredy prsent, type another email")
} else if(userPassword.length < 1 && userName.length < 1 && userEmail < 1){
    alert("must fill all fields")
} else if (userPassword.length < 8){
    alert("password more than 8 digits")
} else{
    dataFromLS.push(userData)
    localStorage.setItem("userData", JSON.stringify(dataFromLS));
    document.getElementById("userName").value='';
    document.getElementById("userEmail").value='';
    document.getElementById("userPassword").value='';
    window.location.href ="login.html";
    alert("Registration done.")



}

    
}