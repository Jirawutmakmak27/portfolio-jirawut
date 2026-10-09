window.addEventListener("DOMContentLoaded", pageLoad);

function pageLoad() {
    const form = document.getElementById("myLogin");
    form.addEventListener("submit", checkLogin);
}

function checkLogin(event) {
    event.preventDefault();

    const form = document.forms["myLogin"];
    const username = form["username"].value.trim();
    const password = form["password"].value;

    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        alert("Login success!");
    } else {
        alert("Username or password is incorrect.");
    }
}
