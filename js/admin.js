document.getElementById("submit-btn").addEventListener("click", function () {
    const email = document.getElementById("user-email").value;
    const password = document.getElementById("user-password").value;
    if ((email == "akash@gmail.com") && (password == 123)) {
        window.location = "bank.html";
    }
})
