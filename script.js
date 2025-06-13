

var first;
var last;
var mail;
var number;
var pass;

function getInfo(){
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const eMail = document.getElementById("eMail");
    const phoneNumber = document.getElementById("phoneNumber");
    const password = document.getElementById("password");
    const finalPass = document.getElementById("finalPass")
    const check = document.getElementById("check");
    

    if(password.value != finalPass.value){
        alert("Passwords not the same!");
    }
    else{
        const userName = document.getElementById("userName");
        const userEmail = document.getElementById("userEmail");
        const userPhone = document.getElementById("userPhone");
        const userPass = document.getElementById("userPass");
        first = firstName.value;
        last = lastName.value;
        mail = eMail.value;
        number = phoneNumber.value;
        pass = finalPass.value;

        userName.innerHTML = "Name: " + first + " " + last;
        userEmail.innerHTML = 'Email: ' + mail;
        userPhone.innerHTML = "Phone Number: " + number;
        userPass.innerHTML - "Password: " + pass;

        check.classList.toggle("active");

    }
}

function confirmed(){
    const check = document.getElementById("check");

    check.classList.toggle("deactive");
}