document.addEventListener("DOMContentLoaded", function () {
    const toggleBtn = document.getElementById("toggle-rsvp");
    const rsvpSection = document.getElementById("rsvp-section");
    const rsvpForm = document.getElementById("rsvp-form");
    const confirmationMessage = document.getElementById("confirmation-message");

    // Hide RSVP section and confirmation initially
    rsvpSection.style.display = "none";
    confirmationMessage.style.display = "none";

    // Toggle RSVP section
    toggleBtn.addEventListener("click", () => {
        if (rsvpSection.style.display === "none") {
            rsvpSection.style.display = "block";
            toggleBtn.textContent = "Hide Response";
        } else {
            rsvpSection.style.display = "none";
            toggleBtn.textContent = "Show Response";
        }
    });

    // Handle RSVP form submission
    rsvpForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const name = document.getElementById("guest-name").value.trim();
        // const count = document.getElementById("guest-count").value;
        const message = document.getElementById("guest-message").value.trim();

        if (!name ) {
            alert("Please enter your name and number of guests.");
            return;
        }

        // You can process/store the data here

        confirmationMessage.style.display = "block";
        rsvpForm.reset();
    });

    function doGet(e) {
        return ContentService.createTextOutput("This script only accepts POST requests.");
      }
2       
});
