 /*
Program name: patient-form.css
Author: Isaiah Louis
Date created: 6/26/2026
Date last edited: 6/26/2026
Version:2.0
Description: A document to style the new patient form
*/

let validity_error = 0

function verifyfname(){
    const x = document.getElementById("fname").value;
    if (/^[A-Za-z]{1,30}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifymi(){
    const x = document.getElementById("mi").value;
    if (x == "" || /^[A-Za-z]{0,1}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}      
    
function verifylname(){
    const x = document.getElementById("lname").value;
    if (/^[A-Za-z]{1,30}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifybirthday(){
    const x = document.getElementById("birthday").value;
    if (x != ""){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifyssn(){
    const x = document.getElementById("ssn").value;
    if (/^[0-9]{3}-[0-9]{2}-[0-9]{4}|[0-9]{9}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifyAddress_One(){
    const x = document.getElementById("Address_One").value;
    if (/^[A-Za-z0-9\s.#'-]{1,30}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifyAddress_Two(){
    const x = document.getElementById("Address_Two").value;
    if (x== "" || /^[A-Za-z0-9\s.#'-]{1,30}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifycity(){
    const x = document.getElementById("city").value;
    if (/^[A-Za-z\s.#'-]{1,30}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifyZipcode(){
    const x = document.getElementById("Zipcode").value;
    if (/^[0-9]{5,10}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifyemail(){
    const x = document.getElementById("email").value;
    if (/^[A-Za-z0-9._%+\-]+@[A-Za-z0-9.\-]+\.[A-Za-z]{2,}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifyphone(){
    const x = document.getElementById("phone").value;
    if (/^[0-9]{3}-[0-9]{3}-[0-9]{4}|[0-9]{10}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifyuserID(){
    const x = document.getElementById("userID").value;
    if (/^[A-Za-z0-9]{1,20}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifypassword(){
    const x = document.getElementById("password").value;
    if (/^[A-Za-z0-9._%+\-]{8,20}$/.test(x)){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}

function verifyrepassword(){
    const x = document.getElementById("repassword").value;
    if (x === verifypassword){
        return "Valid!";
    } else {
        validity_error = 1
        return "Invalid"
    }
}



function review_form(){
    const fname = document.getElementById("fname");
    const mi = document.getElementById("mi");
    const lname = document.getElementById("lname");
    const birthday = document.getElementById("birthday");
    const ssn =  document.getElementById("ssn");
    const Address_One = document.getElementById("Address_One");
    const Address_Two = document.getElementById("Address_Two");
    const State = document.getElementById("State");
    const city = document.getElementById("city");
    const Zipcode = document.getElementById("Zipcode");
    const email = document.getElementById("email");
    const phone = document.getElementById("phone");
    const userID = document.getElementById("userID");
    const password = document.getElementById("password");
    const repassword = document.getElementById("repassword");
    const slider = document.getElementById("slider");
    const patient_thoughts = document.getElementById("patient_thoughts");

    const fnameverify = verifyfname()
    const miverify = verifymi()
    const lnameverify = verifylname()
    const birthdayverify = verifybirthday()
    const ssnverify = verifyssn()
    const Address_Oneverify = verifyAddress_One()
    const Address_Twoverify = verifyAddress_Two()
    const cityverify = verifycity()
    const Zipcodverify = verifyZipcode()
    const emailverify = verifyemail()
    const phoneverify = verifyphone()
    const userIDverify = verifyuserID()
    const passwordverify = verifypassword()
    const repasswordverify = verifyrepassword()

    document.getElementById("show_validate").innerHTML= "PATIENT INPUT REVIEW" + "<br>" + "<br>" +
                                                        "First Name: " + fname.value + "- " + fnameverify + "<br>" + "<br>" +
                                                        "Middle Inital: " + mi.value + "- " + miverify + "<br>" + "<br>" +
                                                        "Last Name: " +   lname.value + "- " + lnameverify + "<br>" + "<br>" +
                                                        "Birthday: " + birthday.value + "- " + birthdayverify + "<br>" + "<br>" +
                                                        "SSN: " + ssn.value + "- " + ssnverify + "<br>" + "<br>" +
                                                        "Address One: " + Address_One.value + "- " + Address_Oneverify + "<br>" + "<br>" +
                                                        "Address Two: " + Address_Two.value + "- " + Address_Twoverify + "<br>" + "<br>" +
                                                        "State: " + State.value + " - " + "Valid" + "<br>" + "<br>" +
                                                        "City: " + city.value + "- " + cityverify + "<br>" + "<br>" +
                                                        "Zipcode: " + Zipcode.value + "- " + Zipcodverify + "<br>" + "<br>" +
                                                        "Email: " + email.value + "- " + emailverify + "<br>" + "<br>" +
                                                        "Phone: " + phone.value + "- " + phoneverify + "<br>" + "<br>" +
                                                        "UserID: " + userID.value + "- " + userIDverify + "<br>" + "<br>" +
                                                        "Password: " + password.value + "- " + passwordverify + "<br>" + "<br>" +
                                                        "Re-password: " + repassword.value + "- " + repasswordverify + "<br>" + "<br>" +
                                                        "Slider: " + slider.value + " - " + "Valid" + "<br>" + "<br>" +
                                                        "Patient Thoughts: " + patient_thoughts.value + "- " + "Valid" + "<br>"
}