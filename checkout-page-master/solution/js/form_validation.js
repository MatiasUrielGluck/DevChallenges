// Form elements
function validate() {
    var phone = document.forms["form"]["phone"].value;

    if (phone.length > 11) {
        alert("Error, your phone number cannot have more than 11 numbers.");
    }
    else {
        alert("Form sent successfully")
    }

    return false;
}