// login-script.js

function togglePw() {
    var pw = document.getElementById('password');
    pw.type = pw.type === 'password' ? 'text' : 'password';
}

// Example login handler
document.getElementById('loginForm').onsubmit = function(e) {
    e.preventDefault();
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value;

    if (!name || !email || !password) {
        document.getElementById('loginError').innerText = "Please fill in all fields.";
        return;
    }

    // Demo only: Accept any input, you can add custom logic or integration
    document.getElementById('loginError').innerText = "";
    alert("Welcome, " + name + "! Email: " + email);
    // Optionally, save profile to localStorage here
    // localStorage.setItem('userName', name);
    // localStorage.setItem('userEmail', email);
    // Reset form or redirect after login
};
