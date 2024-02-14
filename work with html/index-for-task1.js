var emailInput = document.getElementById("email");
var titleInput = document.getElementById("title");
var textInput = document.getElementById("text");
var checkboxInput = document.getElementById("checkbox");
var formData = {
    email: "",
    title: "",
    text: "",
    checkbox: false,
};

var forms = document.querySelectorAll("form");
if (forms) {
    forms.forEach(function (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            //   console.log("Form submitted!");
            formData.email = emailInput.value;
            formData.title = titleInput.value;
            formData.text = textInput.value;
            formData.checkbox = checkboxInput.checked;
            //   console.log(formData);
            //   console.log(`All values filled? ${isAllValuesTrue(formData)}`);
            //   validateFormData(formData);
            if (validateFormData(formData)) {
                checkFormData(formData);
            }
        });
    });
}
function isAllValuesTrue(data) {
    if (data.email !== undefined &&
        data.email !== "" &&
        data.title !== undefined &&
        data.title !== "" &&
        data.text !== undefined &&
        data.text !== "") {
        return true;
    }
    return false;
}
function validateFormData(data) {
    if (isAllValuesTrue(data)) {
        return true;
    }
    else {
        console.log("Please, complete all fields");
        return false;
    }
}
function checkFormData(data) {
    var email = data.email;
    var emails = ["example@gmail.com", "example@ex.com", "admin@gmail.com"];
    if (emails.includes(email)) {
        console.log("This email is already exist");
    }
    else {
        console.log("Posting data...");
    }
}
