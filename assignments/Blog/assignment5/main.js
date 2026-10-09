window.onload = setupFunction;

let postCount = 0;

function setupFunction() {
    document.getElementById("top").innerHTML = "Welcome to the Forum";

    let buttons = document.getElementsByTagName("button");
    buttons[0].onclick = postFunction;
    buttons[1].onclick = clearFunction;
}

function postFunction() {
    let message = document.getElementById("message").value;

    if (postCount == 0) {
        document.getElementById("topic").innerHTML = message;
    } else if (postCount == 1) {
        document.getElementById("reply1").innerHTML = message;
    } else if (postCount == 2) {
        document.getElementById("reply2").innerHTML = message;
    }

    if (postCount < 3) {
        postCount++;
    }

    document.getElementById("message").value = "";
}

function clearFunction() {
    document.getElementById("topic").innerHTML = "";
    document.getElementById("reply1").innerHTML = "";
    document.getElementById("reply2").innerHTML = "";
    document.getElementById("message").value = "";

    postCount = 0;
}
