// Trying to implement functions for password - min 8 carachters, min 1 special carachter

// const form = document.querySelector("form");
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
// });

// const [username, pwd] = document.querySelectorAll('input');

// password.addEventListener('blur',function(){
//     if(pwd.length === 0) {
//         pwd.style.border = '20px solid red';
//     } else if () {

//     }
// })



//All inputs required



// Login and Local Storage accounts

const signUp = e => {
    let fname = document.getElementById('fname').value,
        lname = document.getElementById('lname').value,
        email = document.getElementById('email').value,
        pwd = document.getElementById('pwd').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length && 
        JSON.parse(localStorage.getItem('formData')).some(data => 
            data.fname.toLowerCase() == fname.toLowerCase() && 
            data.lname.toLowerCase() == lname.toLowerCase()
        );

    if(!exist){
        formData.push({ fname, lname, email, pwd });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('fname').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else{
        alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
    }
    e.preventDefault();
}

