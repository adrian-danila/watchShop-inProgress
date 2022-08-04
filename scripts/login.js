
//Disabled button when input email it's empty

document.getElementById("submit").disabled = true;

document.getElementById("email").addEventListener("keyup", e => {
    if(e.target.value ==""){
        document.getElementById("submit").disabled = true;
    } else {
        document.getElementById('submit').disabled = false;
    }
});

