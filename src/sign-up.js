const showPasswordIcon = document.querySelector('.show-password-icon');
const passwordInput = document.querySelector('#password');

const signUp = e => {
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let formData = JSON.parse(localStorage.getItem('formData')) || [];

    let exist = formData.length &&
        JSON.parse(localStorage.getItem('formData')).some(data =>
            data.firstName.toLowerCase() == firstName.toLowerCase() &&
            data.lastName.toLowerCase() == lastName.toLowerCase()
        );

    if (!exist) {
        formData.push({ firstName, lastName, email, password });
        localStorage.setItem('formData', JSON.stringify(formData));
        document.querySelector('form').reset();
        document.getElementById('firstName').focus();
        alert("Account Created.\n\nPlease Sign In using the link below.");
    }
    else {
        alert("Ooopppssss... Duplicate found!!!\nYou have already signed up");
    }
    e.preventDefault();
}

showPasswordIcon.addEventListener('click', function () {
    if(passwordInput.type === 'password')
    {
        passwordInput.type = 'text';
    }
    else
    {
        passwordInput.type = 'password';
    }
});
