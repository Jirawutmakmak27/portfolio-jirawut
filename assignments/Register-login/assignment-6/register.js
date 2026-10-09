window.addEventListener("DOMContentLoaded", pageLoad);

function pageLoad() {
    const form = document.getElementById("myRegister");
    form.addEventListener("submit", validateForm);
}

function validateForm(event) {
    event.preventDefault();

    const form = document.forms["myRegister"];
    const errorMsg = document.getElementById("errormsg");

    const firstname = form["firstname"].value.trim();
    const lastname = form["lastname"].value.trim();
    const gender = form.querySelector('input[name="gender"]:checked');
    const bday = form["bday"].value;
    const email = form["email"].value.trim();
    const username = form["username"].value.trim();
    const password = form["password"].value;
    const retypePassword = form["retypePassword"].value;

    if (!firstname || !lastname || !gender || !bday || !email ||
        !username || !password || !retypePassword) {
        errorMsg.textContent = "Please fill in all required fields.";
        return false;
    }

    if (password !== retypePassword) {
        errorMsg.textContent = "Password and Retype Password do not match.";
        return false;
    }

    localStorage.setItem("firstname", firstname);
    localStorage.setItem("lastname", lastname);
    localStorage.setItem("gender", gender.value);
    localStorage.setItem("bday", bday);
    localStorage.setItem("email", email);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Register successful!");
    window.location.href = "login.html";
}
