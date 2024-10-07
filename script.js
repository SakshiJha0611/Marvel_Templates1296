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
// Grab containerbox101 and the sections within it
const container = document.getElementById('containerbox101');
const box = document.querySelectorAll('.box');
const popup = document.getElementById('popup');

// Function to check which section is in view
function handleScroll() {
    let visibleSection = null;

    box.forEach((box, index) => {
        const boxRect = box.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        // Check if box is visible inside containerbox101
        if (
            boxRect.top >= containerRect.top &&
            boxRect.bottom <= containerRect.bottom
        ) {
            visibleSection = index + 1;  // Store the section number (1-based)
        }
    });

    // If a section is visible, update the popup with the section number
    if (visibleSection) {
        popup.textContent = `Page ${visibleSection}`;
        popup.classList.add('visible');
        popup.classList.remove('hidden');
    } else {
        popup.classList.add('hidden');
    }
}

// Add the scroll event listener to containerbox101
container.addEventListener('scroll', handleScroll);