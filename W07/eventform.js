
// Grab the form elements from the DOM
const form = document.querySelector("#eventForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notesLabel = document.querySelector("#notesLabel");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");

// Show the correct input depending on Student or Guest
function updateNotesField() {
    const value = travelRange.value;

    if (value === "student") {
        notesContainer.hidden = false;
        notesLabel.textContent = "Student ID";
        notes.placeholder = "Enter your 9 digit ID number";
        notes.required = true;
    } 
    else if (value === "guest") {
        notesContainer.hidden = false;
        notesLabel.textContent = "Access Code";
        notes.placeholder = "Enter EVENT131";
        notes.required = true;
    } 
    else {
        notesContainer.hidden = true;
        notes.required = false;
        notes.value = "";
    }
}

// Listen for changes to the dropdown
travelRange.addEventListener("change", updateNotesField);

// Make sure the field starts hidden
updateNotesField();


// Check if the date is in the past
function isPastDate(value) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const chosen = new Date(value + "T00:00:00");

    return chosen < today;
}


// Submit the form
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Clear previous messages
    output.innerHTML = "";

    // Get the values from the form
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = travelRange.value;
    const availableDate = form.availableDate.value;
    const code = notes.value.trim();

    // Store any errors
    let errors = [];

    // Check the selected type
    if (type === "") {
        errors.push("Please select Student or Guest.");
    }

    // Check the Student I number
    if (type === "student" && !/^\d{9}$/.test(code)) {
        errors.push("Student I# must contain exactly 9 digits.");
    }

    // Check the Guest access code
    if (type === "guest" && code !== "EVENT131") {
        errors.push("The Guest access code must be EVENT131.");
    }

    // Check the date
    if (!availableDate) {
        errors.push("Please select an event date.");
    } 
    else if (isPastDate(availableDate)) {
        errors.push("Please choose a date that is today or later.");
    }

    // Display errors if there are any
    if (errors.length > 0) {
        output.innerHTML = `
            <div class="error">
                <h2>Please fix the following errors:</h2>
                <ul>
                    ${errors.map(error => `<li>${error}</li>`).join("")}
                </ul>
            </div>
        `;
        return;
    }

    // Display the ticket information
    output.innerHTML = `
        <div class="ticket">
            <h2>Your Event Ticket!</h2>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Ticket Type:</strong> ${type === "student" ? "Student" : "Guest"}</p>
            <p><strong>Event Date:</strong> ${availableDate}</p>
            <p><strong>Confirmation:</strong> ${type === "student" ? "Student I# verified" : "Access Code verified"}</p>
            <p>Thank you for registering!</p>
        </div>
    `;

    // Reset the form
    form.reset();
    updateNotesField();
});
