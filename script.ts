
document.addEventListener('DOMContentLoaded', function() {
    // Ensure that the DOM is fully loaded before executing JavaScript

    document.getElementById("resumeForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form from submitting and refreshing the page

        // Fetch values from form inputs
        const name = document.getElementById("name")?.value || '';
        const email = document.getElementById("email")?.value || '';
        const phone = document.getElementById("phone")?.value || '';
        const education = document.getElementById("Education")?.value || '';
        const experience = document.getElementById("Experience")?.value || '';
        const skills = document.getElementById("Skills")?.value || '';

        // Display the fetched values in the resume display section
        document.getElementById("display-name")?.innerText = name;
        document.getElementById("display-email")?.innerText = email;
        document.getElementById("display-phone")?.innerText = phone;
        document.getElementById("display-education")?.innerText = education;
        document.getElementById("display-experience")?.innerText = experience;
        document.getElementById("display-skills")?.innerText = skills;
    });

    // Allow the resume display section to be editable directly by the user
    document.querySelectorAll('#resume-display [contenteditable="true"]').forEach(function(element) {
        element.addEventListener('input', function() {
            console.log("Content changed in: " + element.id);
        });
    });
});
