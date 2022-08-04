// Trying to implement functions for password - min 8 carachters, min 1 special carachter

const form = document.querySelector("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
});

const [username, password, confirm-password] = document.querySelectorAll('input');

password.addEventListener('blur',function(){
    if(password.length === 0) {
        password.style.border = '20px solid red';
    } else if () {

    }
})



//All inputs required

