document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get username and password values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation
    if (username === "" || password === "") {
        displayError("Both fields are required.");
    } else if (username !== "admin" || password !== "password123") {
        displayError("Incorrect username or password.");
    } else {
        alert("Login successful!");
        // Redirect to a different page if needed, e.g. window.location.href = "dashboard.html";
    }
});

function displayError(message) {
    const errorMessage = document.getElementById('error-message');
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
}
