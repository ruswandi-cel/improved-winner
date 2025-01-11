document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value.trim().toLowerCase();
    const password = document.getElementById("password").value.trim().toLowerCase();

    if (username === "tarmidi" && password === "tarmidi") {
        localStorage.setItem("userRole", "leader");
        localStorage.setItem("userName", "Leader Tarmidi");
        window.location.href = "dashboard.html";
    } else if (username === "marja group" && password === "marja group") {
        localStorage.setItem("userRole", "operator");
        localStorage.setItem("userName", "Operator Marja Group");
        window.location.href = "dashboard.html";
    } else {
        alert("Username atau Password salah!");
    }
});