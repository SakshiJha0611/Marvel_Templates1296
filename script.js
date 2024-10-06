// You can add any JavaScript functionality here if needed in the future.
console.log("Welcome to The Template Samples Page!");
// Initial passwords
const firstPassword = "SmithJohn9021";
const secondPassword = "JhaSakshi321";

// Check if the user has already accessed the page before
const hasAccessedBefore = localStorage.getItem("accessGranted") === "true";

document.getElementById("loginButton").addEventListener("click", function () {
    const enteredPassword = document.getElementById("passwordInput").value;

    // If user has accessed before, they need the second password
    if (hasAccessedBefore) {
        if (enteredPassword === secondPassword) {
            showContent();
            startTimer();  // Start the timer when content is displayed
        } else {
            showError("Incorrect password. Try again.");
        }
    } else {
        // First-time access
        if (enteredPassword === firstPassword) {
            // Grant access and store that they've accessed the page
            localStorage.setItem("accessGranted", "true");
            showContent();
            startTimer();  // Start the timer when content is displayed
        } else {
            showError("Incorrect password. Try again.");
        }
    }
});
function togglePassword() {
    const passwordInput = document.getElementById("passwordInput");
    passwordInput.type = passwordInput.type === "password" ? "text" : "password";
}

// Function to display content and hide login
function showContent() {
    document.querySelector(".login-container").style.display = "none";
    document.getElementById("content").style.display = "block";
}

// Function to show error messages
function showError(message) {
    const errorElement = document.getElementById("errorMessage");
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

// Timer that reloads the page after 60 seconds
function startTimer() {
    let timeLeft = 60; // 60 seconds
    const timerElement = document.getElementById("timer");

    const countdown = setInterval(function () {
        timeLeft -= 1;
        timerElement.textContent = timeLeft;

        // Reload page after time is up
        if (timeLeft <= 0) {
            clearInterval(countdown);
            location.reload(); // Refresh the page
        }
    }, 1000);
}

// Disable right-click, screenshot shortcuts, and copying
function disableShortcuts(event) {
    const forbiddenKeys = ["PrintScreen", "F12", "Control+Shift+I", "Control+Shift+C"];
    
    if (forbiddenKeys.includes(event.key) || event.ctrlKey && (event.key === 'c' || event.key === 'u' || event.key === 's')) {
        event.preventDefault();
        alert("Screenshots and screen recording are disabled on this page.");
    }
}

// Optionally, block keyboard shortcuts to prevent easy screenshots
window.addEventListener("keyup", function (e) {
    if (e.key == "PrintScreen") {
        navigator.clipboard.writeText("");
        alert("Screenshots are disabled on this page.");
    }
});


// Function to display content and hide login
function showContent() {
    document.querySelector(".login-container").style.display = "none"; // Hide login
    document.getElementById("content").style.display = "block"; // Show content
    document.getElementById("ContainerBox101").style.display = "block"; // Show templates
}

// Function to show error messages
function showError(message) {
    const errorElement = document.getElementById("errorMessage");
    errorElement.textContent = message;
    errorElement.style.display = "block";
}

// Timer that reloads the page after 60 seconds
function startTimer() {
    let timeLeft = 60; // 60 seconds
    const timerElement = document.getElementById("timer");

    const countdown = setInterval(function () {
        timeLeft -= 1;
        timerElement.textContent = timeLeft;

        // Reload page after time is up
        if (timeLeft <= 0) {
            clearInterval(countdown);
            location.reload(); // Refresh the page
        }
    }, 1000);
}

// Disable right-click, screenshot shortcuts, and copying
function disableShortcuts(event) {
    const forbiddenKeys = ["PrintScreen", "F12", "Control+Shift+I", "Control+Shift+C"];
    
    if (forbiddenKeys.includes(event.key) || event.ctrlKey && (event.key === 'c' || event.key === 'u' || event.key === 's')) {
        event.preventDefault();
        alert("Screenshots and screen recording are disabled on this page.");
    }
}

// Optionally, block keyboard shortcuts to prevent easy screenshots
window.addEventListener("keyup", function (e) {
    if (e.key == "PrintScreen") {
        navigator.clipboard.writeText("");
        alert("Screenshots are disabled on this page.");
    }
});
function disableShortcuts(event) {
    if (event.key === 'PrintScreen' || event.key === 'F12' || 
        (event.ctrlKey && event.shiftKey && event.key === 'I') || 
        (event.ctrlKey && event.shiftKey && event.key === 'C')) {
        event.preventDefault();
    }
}
