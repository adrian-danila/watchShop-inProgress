
//Disabled button when input email it's empty

const email = document.getElementById("email");
const password = document.getElementById("password");
const submitButton = document.getElementById("submit");

submitButton.disabled = true;
password.addEventListener("input", checkInputs);


function checkInputs() {
    if(email.value.length > 0 && password.value.length > 0) {
        submitButton.disabled = false;
        submitButton.style.backgroundColor = "var(--customGreen";
    } else {
        submitButton.disabled = true;
    }
}

//Local storage accounts

function signIn(e) {
    let email = document.getElementById('email').value, password = document.getElementById('password').value;
    let formData = JSON.parse(localStorage.getItem('formData')) || [];
    let exist = formData.length && 
    JSON.parse(localStorage.getItem('formData')).some(data => data.email.toLowerCase() == email && data.password.toLowerCase() == password);
    if(!exist){
        alert("Incorrect login credentials");
    }
    else{
        location.href = "/index.html";
    }
    e.preventDefault();
}