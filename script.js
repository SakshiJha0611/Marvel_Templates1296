console.log("Welcome to The Template Samples Page!");

// Initial passwords
const firstPassword = "SmithJohn9021";
const secondPassword = "JhaSakshi321";

// Check if the user has already accessed the page before
const hasAccessedBefore = localStorage.getItem("accessGranted") === "true";

// Add event listener to the login button
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
    document.getElementById("ContainerBox101").style.display = "flex"; // Use flex for proper layout
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
    const forbiddenKeys = ["PrintScreen", "F12", "I", "C"];

    // Check for forbidden key combinations
    if (
        (event.ctrlKey && event.shiftKey && forbiddenKeys.includes(event.key)) ||
        forbiddenKeys.includes(event.key)
    ) {
        event.preventDefault();
        alert("Screenshots and screen recording are disabled on this page.");
    }
}

// Block keyboard shortcuts to prevent easy screenshots
window.addEventListener("keyup", function (e) {
    if (e.key === "PrintScreen") {
        navigator.clipboard.writeText("");
        alert("Screenshots are disabled on this page.");
    }
});

// Grab ContainerBox101 and the sections within it
const container = document.getElementById('ContainerBox101');
const boxes = document.querySelectorAll('.box');
const popup = document.getElementById('popup');

// Intersection Observer options
const options = {
    root: container, // Set the container as the root
    rootMargin: '0px',
    threshold: 0.5 // 50% visibility
};

// Callback function for Intersection Observer
const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const index = Array.from(boxes).indexOf(entry.target) + 1;
            popup.textContent = `Page ${index}`;
            popup.classList.add('visible');
            popup.classList.remove('hidden');
        }
    });
};

// Create Intersection Observer
const observer = new IntersectionObserver(callback, options);

// Observe each box
boxes.forEach(box => {
    observer.observe(box);
});

// Optional: Hide popup when no boxes are intersecting
container.addEventListener('scroll', () => {
    let anyIntersecting = false;
    boxes.forEach(box => {
        const boxRect = box.getBoundingClientRect();
        const containerRect = container.getBoundingClientRect();

        const boxTop = boxRect.top - containerRect.top;
        const boxBottom = boxRect.bottom - containerRect.top;
        const containerHeight = container.clientHeight;

        if (
            boxTop < containerHeight * 0.5 &&
            boxBottom > containerHeight * 0.5
        ) {
            anyIntersecting = true;
        }
    });

    if (!anyIntersecting) {
        popup.classList.add('hidden');
    }
});
