function clicked(){
    alert("Form submitted")
}
function nlClicked(){
    alert("Email submitted")
}
function passwordCheck(input) {
    if (input.value == document.getElementById("password1").value) {
        input.setCustomValidity("");
    } else {
        input.setCustomValidity("Passwords must match")
    }
}
function emailCheck(input) {
    if ((input.value).includes("@") && (input.value).includes(".")) {
        input.setCustomValidity("");
    } else {
        input.setCustomValidity("Invalid email")
    }
}