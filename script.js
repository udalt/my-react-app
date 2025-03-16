// Get the button and the body element
const toggleButton = document.getElementById("toggleButton");
const body = document.body;
const modeText = document.getElementById("modeText");

// Check the current mode from localStorage (if available)
let currentMode = localStorage.getItem("theme") || "light";

// Set the current mode to the body
body.classList.add(currentMode);
modeText.textContent = currentMode === "light" ? "Light Mode" : "Dark Mode";

// Add event listener to toggle the mode
toggleButton.addEventListener("click", () => {
  if (body.classList.contains("light-mode")) {
    // Switch to dark mode
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    modeText.textContent = "Dark Mode";
    localStorage.setItem("theme", "dark");
  } else {
    // Switch to light mode
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    modeText.textContent = "Light Mode";
    localStorage.setItem("theme", "light");
  }
});
